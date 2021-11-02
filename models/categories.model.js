const sql = require("./db.js");

// constructor
const Category = function(category) {
  this.id = category.id;
  this.name = category.name;
};
// Consulta por todas las categorias
  Category.getAll = result => {
    sql.query("SELECT * FROM category", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("categories: ", res);
      result(null, res);
    });
  };

module.exports = Category;