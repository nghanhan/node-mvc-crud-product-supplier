// productRoutes.js
const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.index);
router.get("/new", productController.new);
router.post("/", productController.create);
router.get("/:id/edit", productController.edit);
router.post("/:id/update", productController.update);
router.post("/:id/delete", productController.delete);

module.exports = router;
