const Category = require("../models/categories.model.js");

// extrae todos los datos de la columna category de la base de datos
exports.findAll = (req, res) => {
    Category.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving products."
          });
        else res.send(data);
      });
};