import express from "express";
import promocaoController from "../controllers/promocaoController.js";

const router = express.Router();

router.post("/", promocaoController.inserir);
router.get("/", promocaoController.listar);

export default router;