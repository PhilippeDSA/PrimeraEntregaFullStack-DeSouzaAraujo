import { Router } from "express";
import productManager from "../manager/productManager.js";

const router = Router();


// GET /api/products
router.get("/", (req, res) => {
  res.json(productManager.getProducts());
});

// GET /api/products/:pid
router.get("/:pid", (req, res) => {
  const product = productManager.getProductById(req.params.pid);
  if (!product) return res.status(404).json({ message: "Producto no encontrado" });
  res.json(product);
});

// POST /api/products
router.post("/", (req, res) => {
  const product = productManager.addProduct(req.body);
  res.status(201).json(product);
});

// PUT /api/products/:pid
router.put("/:pid", (req, res) => {
  const updated = productManager.updateProduct(req.params.pid, req.body);
  if (!updated) return res.status(404).json({ message: "Producto no encontrado" });
  res.json(updated);
});

// DELETE /api/products/:pid
router.delete("/:pid", (req, res) => {
  const deleted = productManager.deleteProduct(req.params.pid);
  if (!deleted) return res.status(404).json({ message: "Producto no encontrado" });
  res.json({ message: "Producto eliminado correctamente" });
});

export default router;
