const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

// Import test-reachability to ensure vulnerable swig code is analyzed
const { renderTemplate } = require("./test-reachability");

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware setup - makes body-parser reachable
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration - makes cookie (transitive dependency) reachable
app.use(session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

// Simple route that uses vulnerable swig method
app.get("/", (req, res) => {
    const result = renderTemplate("Hello {{name}}", { name: "World" });
    res.send(result);
});

// Start server
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

module.exports = app;
