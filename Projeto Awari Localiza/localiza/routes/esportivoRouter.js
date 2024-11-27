import express from "express";
import esportivoController from "../controllers/esportivoController.js";

const router = express.Router();

router.post("/", esportivoController.inserir);

export default router;