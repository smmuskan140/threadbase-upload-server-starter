import express from "express";
import upload from "../config/upload.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

router.post("/upload", verifyToken, (req, res, next) => {
  upload.single("avatar")(req, res, (err) => {
    if (err) {
      if (err instanceof Error && err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ error: "File too large (max 5MB)" });
      }
      return res.status(400).json({ error: err.message || "File upload failed" });
    }

    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    return res.status(201).json({
      url: `/uploads/${req.file.filename}`,
      filename: req.file.filename,
    });
  });
});

export default router;
