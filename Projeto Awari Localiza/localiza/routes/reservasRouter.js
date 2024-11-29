import express from "express";
import reserva from "../controllers/reservaController.js";

const router = express.Router();

router.post("/", reserva.inserir);
router.get("/", reserva.listar);

export default router;