const mongoCollections = require("../database/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let methods = {
    
    getAllRecipes() {
        return recipes().then((recipeCollection) => {
            return recipeCollection.find({},{ _id: 1, title: 1 }).toArray();
        });
    },
   
    getRecipeById(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.findOne({ _id: id }).then((recipe)=>{
                if(!recipe) return Promise.reject("does not exist");
                return recipe;
            });
        });
    },

    addRecipe(title,ingredients,steps,comments) {
        return recipes().then((recipeCollection) => {
            let newRecipe = {
                _id: uuid.v4(),
                title: title,
                ingredients:ingredients,
                steps:steps,
                comments:comments
            };
            return recipeCollection.insertOne(newRecipe).then((newInsertInformation) => {
                return newInsertInformation.insertedId;
            }).then((newId) => {
                return this.getRecipeById(newId);
            });
        });
    },
    
    updateRecipe(id, newRecipe) {
        return recipes().then((recipeCollection)=>{
            let updatedRecipe = {};
            if(newRecipe.title) updatedRecipe['title']=newRecipe.title;
            if(newRecipe.ingredients) updatedRecipe['ingredients']=newRecipe.ingredients;
            if(newRecipe.steps) updatedRecipe['steps']=newRecipe.steps;
            if(newRecipe.comments) updatedRecipe['comments']=newRecipe.comments;
            return recipeCollection.updateOne({ _id: id }, {$set: updatedRecipe}).then(() => {
                return this.getRecipeById(id);
            });
        });
    },
    
    removeRecipe(id) {
        return recipes().then((recipeCollection) => {
            return recipeCollection.removeOne({ _id: id }).then((deletionInfo) => {
                if (deletionInfo.deletedCount === 0) {
                    return Promise.reject("Plese check input,Recipe could not be deleted");
                }
            });
        });
    }
}

module.exports = methods;