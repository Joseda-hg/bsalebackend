const Category = require("../models/categories.model.js");

// Retrieve all Customers from the database.
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