import express from "express";
import carController from "../controllers/carController.js";

const router = express.Router();

router.get("/", carController.listar);
router.get("/:id", carController.buscar);
router.post("/", carController.inserir);
router.put("/:id", carController.atualizar);
router.delete("/:id", carController.remover);

export default router;