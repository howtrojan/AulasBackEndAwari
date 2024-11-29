import express from "express";
import funcionarioController from "../controllers/funcionarioController.js";

const router = express.Router();

router.post("/", funcionarioController.inserir);
router.get("/", funcionarioController.listar);

export default router;