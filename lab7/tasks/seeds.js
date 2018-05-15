const dbConnection = require("../database/mongoConnection");
const data = require("../recipeData/");
const mongoCollections = require("../database/mongoCollections");
const recipes = mongoCollections.recipes;
const uuid = require('node-uuid');

let getData = function() {
    return dbConnection().then(db => {
        return db.dropDatabase().then(() => {
            return dbConnection;
        }).then((db) => {
            return recipes().then((recipeCollection) => {
                let createRecipe = function(title) {
                    return {
                        _id: uuid.v4(),
                        title: title,
                        ingredients: [],
                        steps: [],
                        comments: []
                    }
                };
                var addIngredient = function(recipe, name, amount) {
                    let newIngredient = {
                        name: name,
                        amount: amount
                    };
                    recipe.ingredients.push(newIngredient);
                };
                let addComment = function(recipe, name, poster, comment){
                    let newComment = {
                        _id: uuid.v4(),
                        name:name,
                        poster: poster,
                        comment: comment
                    };
                    recipe.comments.push(newComment);
                };
                let allRecipes = [];

                let eggsBhurji = createRecipe("Eggs Bhurji");
                eggsBhurji.steps.push("cut onions in very small pices","fry it adn add salt and spices  ","break eggs and mix it","cook well","serve hot");
                addIngredient(eggsBhurji, "Egg","2 eggs","1 Onion","spices");
                addComment(eggsBhurji, name="Spiecy Food", poster="a model",comment= "Testy Indian Food");
                addComment(eggsBhurji, name="Fast Food", poster="a model",comment="make it less spiecy");

                let biryani = createRecipe("Chicken Biryani");
                biryani.steps.push("cook rice", "mix well in chiken","secret ingredient","serve hot");
                addIngredient(biryani, "chicken ","2 chicken");
                addComment(biryani, name="Lovely food", poster="A fat model", comment="very testy");
                addComment(biryani, name="Main course", poster="A fat model",comment="I want to learn this");


                allRecipes.push(eggsBhurji,biryani);
                return recipeCollection.insertMany(allRecipes).then(function() {
                    return recipeCollection.find().toArray();
                });
            });
        });
    }, (error) => {
        return error;
    });
};

module.exports = getData;