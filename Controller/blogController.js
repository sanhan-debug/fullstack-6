import { blogModel } from "../Model/blogModel.js";


let addBlog = async (req, res) => {
    try {
        let newBlog = await blogModel.create(req.body)
        res.send(newBlog).status(200)
    } catch (err) {
        console.error("addBlog error", err)
        res.send("addBlog error").status(500)
    }
}

let getBlogById = async (req, res) => {
    try {
        let blog = await blogModel.find(req.params.id)
        res.send(blog).status(200)
    } catch (err) {
        console.error("getBlogbyid error", err)
        res.send("getBlogbyid error").status(500)
    }
}

let getAllBlogs = async (req, res) => {
    try {
        let blogs = await blogModel.find()
        res.send(blogs).status(200)
    } catch (err) {
        console.error("getAllBlogs error", err)
        res.send("getAllBlogs error").status(500)
    }
}

let deleteBlog = async (req, res) => {
    try {
        await blogModel.findByIdAndDelete(req.params.id)
        res.send("deleted success element").status(200)
    } catch (err) {
        console.error("delete error", err)
        res.send("delete error").status(500)
    }
}

let updateBlog = async (req, res) => {
    try {
        let updatedBlog = await blogModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.send(updatedBlog).status(200)
    } catch (err) {
        console.error("update error", err)
        res.send("update error").status(500)
    }
}

export { addBlog, deleteBlog, getAllBlogs, getBlogById, updateBlog }