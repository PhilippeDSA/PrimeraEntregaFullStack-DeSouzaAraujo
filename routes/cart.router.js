import { Router } from "express";
import CartManager from "../managers/CartManager.js";

const router = Router();
const cartManager = new CartManager("./src/data/carts.json");

// POST /api/carts
router.post("/", (req, res) => {
  const cart = cartManager.createCart();
  res.status(201).json(cart);
});

// GET /api/carts/:cid
router.get("/:cid", (req, res) => {
  const cart = cartManager.getCartById(req.params.cid);
  if (!cart) return res.status(404).json({ message: "Carrito no encontrado" });
  res.json(cart.products);
});

// POST /api/carts/:cid/product/:pid
router.post("/:cid/product/:pid", (req, res) => {
  const cart = cartManager.addProductToCart(req.params.cid, req.params.pid);
  if (!cart) return res.status(404).json({ message: "Carrito no encontrado" });
  res.json(cart);
});

export default router;
