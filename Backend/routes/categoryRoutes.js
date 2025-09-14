import express from "express";
import categoryModel from "../models/categoryModel.js";

const router = express.Router();

// ➕ Add category
router.post("/add", async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.json({ success: false, message: "Category name required" });

    const newCategory = new categoryModel({ name });
    await newCategory.save();

    res.json({ success: true, message: "Category added successfully" });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

// 📦 Get all categories
router.get("/", async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.json({ success: true, categories });
  } catch (err) {
    res.json({ success: false, message: err.message });
  }
});

export default router;
