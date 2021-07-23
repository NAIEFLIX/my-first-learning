// Load The DOTENV variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}


// Required Dependencies
const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");

// Router Files
let indexRouter = require("./routes/index.js");
let authorRouter = require("./routes/authors.js");
let addRouter = require("./routes/new.js");
let aboutRouter = require("./routes/about.js");


// Set up the SERVER
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');


// Essential Using
app.use(expressLayouts);



// Using Routes
app.use("/", indexRouter);
app.use("/authors", authorRouter);
app.use("/new", addRouter);
app.use("/about", aboutRouter);



// Starting The Server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});