const paliRoutes = require("./palindrom");

const paliMethods = (app) => {
    app.use("/palindrom", paliRoutes);

    app.use("*", (req, res) => {
        res.redirect("/palindrom/static");
    })
};

module.exports = paliMethods;