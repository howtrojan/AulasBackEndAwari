import express from "express";
import clienteController from "../controllers/clienteController.js";

const router = express.Router();

router.post("/", clienteController.inserir);
router.get("/", clienteController.listar);

export default router;
