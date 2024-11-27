import express from "express";
import utilitario  from "../controllers/utilitarioController.js";

const router = express.Router();

router.post("/", utilitario.inserir);

export default router;