const express = require('express');
const router = express.Router();
const data = require("../recipeData");
const recipesData = data.recipes;

router.get("/:id", (req, res) => {
    recipesData.getRecipeById(req.params.id).then((recipe) => {
        res.json(recipe);
    }).catch(() => {
        res.status(404).json({error: "recipe does not exist"});
    });
});

router.get("/", (req, res) => {
    recipesData.getAllRecipes().then((recipesList) => {
        res.json(recipesList);
    }, () => {
        res.sendStatus(500);
    });
});

router.post("/", (req, res) => {
    let newRecipe = req.body;

    if (!newRecipe) {
        res.status(400).json({error: "no data for recipe"});
        return;
    }
    if (!newRecipe.title) {
        res.status(400).json({error: "recipe title not provided"});
        return;
    }
    if (!newRecipe.ingredients) {
        res.status(400).json({error: "recipe ingredients not provided"});
        return;
    }
    if (!newRecipe.steps) {
        res.status(400).json({error: "recipe steps not provided"});
        return;
    }
    if (!newRecipe.comments) {
        newRecipe.comments=[];
    }
    recipesData.addRecipe(newRecipe.title,newRecipe.ingredients,newRecipe.steps,newRecipe.comments)
        .then((newRecipe) => {
            res.json(newRecipe);
        }, () => {
            res.status(500).send("error");
        });
});

router.put("/:id", (req, res) => {
    let newRecipe = req.body;
    if (!newRecipe) {
        res.status(400).json({error: "no update for recipe"});
        return;
    }
    let getRecipe = recipesData.getRecipeById(req.params.id).then(() => {
        return recipesData.updateRecipe(req.params.id, newRecipe)
            .then((newRecipe) => {
                res.json(newRecipe);
            }, (e) => {
                res.status(404).send(e);
            });
    }).catch((e) => {
        res.status(404).json({error: "recipe does not exist"});
    });
});

router.delete("/:id", (req, res) => {
    let recipe = recipesData.getRecipeById(req.params.id).then(() => {
        return recipesData.removeRecipe(req.params.id)
            .then(() => {
                res.sendStatus(200).json({message:"recipe deleted"});
            }).catch(() => {
                res.sendStatus(500);
            });

    }).catch((e) => {
        console.log(e);
        res.status(404).json({error: "recipe does not exist"});
    });
});

module.exports = router;