const mongoCollections = require("../database/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let exportedMethods = {

    getCommentsByRecipeId(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({_id:id}).then((recipe)=>{
                console.log(recipe);
                if(!recipe) return Promise.reject("Recipe does not exist");
                comments=recipe.comments;
                for(let i=0;i<comments.length;i++){
                    comments[i]['recipeId']=recipe._id;
                    comments[i]['recipeTitle']=recipe.title;
                    if(comments.name){
                        comments[i]['name'] = comments.name;
                    }
                    else{
                        comments[i]['name'] = comments[i].comment;
                    }
                }
                return comments;
            });
        });
    },
   
    getCommentById(commentId) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ "comments._id": commentId }).then((recipe)=>{
                console.log(recipe);
                if(!recipe) return Promise.reject("Comment does not exist");
                let comments=recipe.comments;
                let cmt={
                    "recipeId":recipe._id,
                    "recipeTitle":recipe.title,
                };
                for (let i = 0; i < comments.length; i++) {
                    if(comments[i]._id===commentId.toString()){
                        console.log(comments[i]._id);
                        cmt["_id"]=comments[i]._id;
                        if(comments[i].name){
                            cmt["name"]=comments[i].name;
                        }else{
                            cmt["name"]=comments[i].comment;
                        }
                        cmt["poster"]=comments[i].poster;
                        return cmt;
                    }
                }
            });
        });
    },
   
    addOneComment(recipeId,newComment) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: recipeId }).then((recipe) => {
                if (!recipe) return Promise.reject({ error: "recipe does not exist" });
                let addComment={
                    _id:uuid.v4(),
                };

                if(newComment.poster) addComment['poster']=newComment.poster;
                if(newComment.name) addComment['name']=newComment.name;
                if(newComment.comment) addComment['comment']=newComment.comment;
                let cmt={
                    $push: { comments: addComment }
                };
                return recipeCollection.update({_id: recipeId},cmt)
                    .then(()=>{
                        return addComment;
                    });
            });
        });
    },
   
    updateComment(recipeId,commentId, updatedComment) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: recipeId })
                .then((recipe) => {
                    if (updatedComment.name) {
                        recipeCollection.update({'comments._id': commentId}, { $set:  { 'comments.$.name': updatedComment.name}});
                    }
                    if (updatedComment.comment) {
                        recipeCollection.update({'comments._id': commentId}, { $set:  { 'comments.$.comment': updatedComment.comment}});
                    }
                    if (updatedComment.poster) {
                        recipeCollection.update({'comments._id': commentId}, { $set:  { 'comments.$.poster': updatedComment.poster}});
                    }

                    return exportedMethods.getCommentById(commentId);
                });
        });
    },

    removeComment(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.update({ 'comments._id': id },{ $pull: {'comments': { _id: id} } }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    Promise.reject({error: "Could not delete post"});
                }else{
                    return "Ok";
                }
            });
        });
    }
};

module.exports = exportedMethods;