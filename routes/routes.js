import express from "express";
import { createBlog, deleteBlog, getAllBlogs, getBlog, updataBlog } from "../controllers/BlogController.js";

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlog);
router.post('/', createBlog);
router.put('/:id', updataBlog);
router.delete('/:id', deleteBlog);


export default router;