const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  http.get('*',function(req,res){  
    res.redirect('http://google.com')
});
});

require("./routes/product.routes.js")(app);

// set port, listen for requests
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT}.`);
});