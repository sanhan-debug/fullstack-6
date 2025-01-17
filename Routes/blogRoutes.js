import { Router } from "express";
import { addBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog } from "../Controller/blogController.js";

export const blogRouter = new Router()

blogRouter.get("/",getAllBlogs)
blogRouter.get("/:id",getBlogById)
blogRouter.post("/",addBlog)
blogRouter.put("/:id",updateBlog)
blogRouter.delete("/:id",deleteBlog)
