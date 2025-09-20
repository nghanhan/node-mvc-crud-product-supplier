const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplierController");

/**
 * @swagger
 * tags:
 *   name: Suppliers
 *   description: Quản lý nhà cung cấp
 */

/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Lấy danh sách nhà cung cấp
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Trả về danh sách nhà cung cấp
 */
router.get("/", supplierController.index);

/**
 * @swagger
 * /suppliers/new:
 *   get:
 *     summary: Hiển thị form thêm nhà cung cấp mới
 *     tags: [Suppliers]
 *     responses:
 *       200:
 *         description: Trả về form thêm nhà cung cấp
 */
router.get("/new", supplierController.new);

/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Thêm nhà cung cấp mới
 *     tags: [Suppliers]
 *     responses:
 *       201:
 *         description: Nhà cung cấp đã được tạo
 */
router.post("/", supplierController.create);

/**
 * @swagger
 * /suppliers/{id}/edit:
 *   get:
 *     summary: Lấy form chỉnh sửa nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Trả về form chỉnh sửa nhà cung cấp
 */
router.get("/:id/edit", supplierController.edit);

/**
 * @swagger
 * /suppliers/{id}/update:
 *   post:
 *     summary: Cập nhật nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được cập nhật
 */
router.post("/:id/update", supplierController.update);

/**
 * @swagger
 * /suppliers/{id}/delete:
 *   post:
 *     summary: Xóa nhà cung cấp
 *     tags: [Suppliers]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Nhà cung cấp đã được xóa
 */
router.post("/:id/delete", supplierController.delete);

module.exports = router;
