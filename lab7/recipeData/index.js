const recipeRoutes = require("./recipeData");
const commentRoutes = require("./commentsData");
var initialSetup = require("../tasks/seeds.js");

let constructorMethod = (app) => {
    app.use("/recipes", recipeRoutes);
    app.use("/comments", commentRoutes);
};

(initialSetup()).then((allRecipes)=>{
   console.log("These are the default receipes");
   console.log(allRecipes);
});

module.exports = {
    recipes: require("./recipeData"),
    comments: require("./commentsData")
};
