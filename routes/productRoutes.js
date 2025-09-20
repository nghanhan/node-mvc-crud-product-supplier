const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Quản lý sản phẩm
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lấy danh sách sản phẩm
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Trả về danh sách sản phẩm
 */
router.get("/", productController.index);

/**
 * @swagger
 * /products/new:
 *   get:
 *     summary: Hiển thị form thêm sản phẩm mới
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Trả về form thêm sản phẩm
 */
router.get("/new", productController.new);

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Thêm sản phẩm mới
 *     tags: [Products]
 *     responses:
 *       201:
 *         description: Sản phẩm đã được tạo
 */
router.post("/", productController.create);

/**
 * @swagger
 * /products/{id}/edit:
 *   get:
 *     summary: Lấy form chỉnh sửa sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trả về form chỉnh sửa
 */
router.get("/:id/edit", productController.edit);

/**
 * @swagger
 * /products/{id}/update:
 *   post:
 *     summary: Cập nhật sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sản phẩm đã được cập nhật
 */
router.post("/:id/update", productController.update);

/**
 * @swagger
 * /products/{id}/delete:
 *   post:
 *     summary: Xóa sản phẩm
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Sản phẩm đã được xóa
 */
router.post("/:id/delete", productController.delete);

module.exports = router;
