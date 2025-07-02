import { Router } from "express";

const router = Router();

router.get("/text", (req, res) => {
  res.json({ message: "Rota de texto funcionando!" });
});

export default router;