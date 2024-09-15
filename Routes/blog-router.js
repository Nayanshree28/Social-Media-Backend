import express from 'express';
import {getAllBlogs, addBlog, updateBlog, getById, deleteBlog} from "../Controllers/blog-controller.js"
const blogrouter = express.Router();

blogrouter.get("/", getAllBlogs);
blogrouter.post("/add",addBlog);
blogrouter.put("/update/:id",updateBlog);
blogrouter.get("/:id",getById);
blogrouter.delete("/:id",deleteBlog);

export default blogrouter;