const recipesRoutes = require("./recipe");
const commentsRoutes = require("./comments");

const constructorMethod = (app) => {
    app.use("/recipes/", recipesRoutes);
    app.use("/comments/", commentsRoutes);
    app.use("/$/",(req,res)=>{
        res.status(200).send("It starts! ");
    });
    app.use("*", (req, res) => {
        res.status(404).send("404,Page Not found");
    })
};

module.exports = constructorMethod;

