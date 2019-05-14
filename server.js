
// var express = require("express");

// var PORT = process.env.PORT || 9999;

// var app = express();

// var orm = require("./config/orm.js");


// Serve static content for the app from the "public" directory in the application directory.
// app.use(express.static("public"));

// // Parse request body as JSON
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Set Handlebars.
// var exphbs = require("express-handlebars");

// app.engine("handlebars", exphbs({ defaultLayout: "main" }));
// app.set("view engine", "handlebars");

// // Import routes and give the server access to them.
// var routes = require("./controllers/burgers_controller.js");

// app.use(routes);

// orm.selectAll("burgers");

// app.listen(PORT, function() {
//   console.log("App now listening at localhost:" + PORT);
// });



var express = require("express");

var PORT = process.env.PORT || 9999;

var app = express();

//ORM for MySql Queries
var orm = require("./config/orm.js");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
