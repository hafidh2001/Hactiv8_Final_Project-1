import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Halaman awal admin");
  console.log("Halaman awal admin");
});

router.post("/", (req, res) => {
  console.log("Halaman post admin");
});

router.put("/:id", (req, res) => {
  console.log("Halaman update by id admin");
});

router.delete("/:id", (req, res) => {
  console.log("Halaman delete by id admin");
});

export default router;
