const express = require('express');
const router = express.Router();
const data = require("../recipeData");
const commentsData = data.comments;

router.get("/",(req,res)=>{
    res.status(200).send("Comments root page");
});

router.get("/recipe",(req,res)=>{
    res.status(200).send("Recipes root page");
});

router.get("/recipe/:recipeId", (req, res) => {
    commentsData.getCommentsByRecipeId(req.params.recipeId).then((comments) => {
        res.json(comments);
    }).catch((e) => {
        console.log(e);
        res.status(404).json({error: "recipe not found"});
    });
});

router.get("/:commentId", (req, res) => {
    commentsData.getCommentById(req.params.commentId).then((comment) => {
        res.json(comment);
    }).catch((e) => {
        res.status(404).json({error: "comment not found"});
    });
});

router.post("/:recipeId", (req, res) => {
    let newComment = req.body;
    if (!newComment) {
        res.status(400).json({error: "comment not provided"});
        return;
    }
    if (!newComment.poster) {
        res.status(400).json({error: "poster in comment not provided"});
        return;
    }
    if (!newComment.comment) {
        res.status(400).json({error: "comment content in comment not provided"});
        return;
    }
    commentsData.addOneComment(req.params.recipeId,newComment)
        .then((newComment) => {
            //console.log(newComment);
            res.json(newComment);
        }).catch(() => {
        res.status(404).json({error: "recipe id is invalid"});
    });
});

router.put("/:recipeId/:commentId", (req, res) => {
    console.log("put!");
    let updatedComment = req.body;
    if(!updatedComment){
        res.status(400).json({error: "comment not provided"});
    }
    if(!updatedComment.poster && !updatedComment.name&& !updatedComment.comment ){
        res.status(400).json({error: "no content for update was provided properly"});
    };
    let getComment = commentsData.getCommentById(req.params.commentId);

    getComment.then(() => {
        return commentsData.updateComment(req.params.recipeId,req.params.commentId, updatedComment)
            .then((updatedComment) => {
                console.log("comment updated");
                res.json(updatedComment);
            }).catch(() => {
                res.status(500).json({error: "error in updating comment"});
            });
    }).catch(() => {
        res.status(404).json({error: "comment was not found"});
    });
});

router.delete("/:id", (req, res) => {
    let getComment = commentsData.getCommentById(req.params.id);
    getComment.then(() => {
        return commentsData.removeComment(req.params.id)
            .then(() => {
                res.sendStatus(200).json({message: "comment deleted"});
            }).catch((e) => {
                res.status(404).json({error: e});
            });
    }).catch(() => {
        res.status(500).json({error: "comment was not found"});
    });
});

module.exports = router;