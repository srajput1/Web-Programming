const aboutRoute = require("./about");
const educationRoute = require("./education");
const storyRoute = require("./story");


const constructorMethod = (Jsonapplication) => {
    Jsonapplication.use("/about", aboutRoute);
    Jsonapplication.use("/education", educationRoute);
    Jsonapplication.use("/story", storyRoute);
    Jsonapplication.use("*", (req, res) => {
        res.status(404).json({error:"404 Not found"});
});
};

module.exports = constructorMethod;