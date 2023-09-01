const {
    insert,
    list,
    detail,
    update,
    remove,
    pushComment,
    deleteComment
} = require("./post.service")


const insertPosts = async (req,res) => {
    try {
        let body = req.body

        await insert(body)

        return res.status(201).send({message:"Postunuz başarıyla oluşturuldu"})
    } catch (error) {
        return res.status(500).send(error)
    }
}

const listPosts = async (req,res) => {
    try {
        let posts = await list()
        return res.status(200).send({status:200,title:"SUCCESS",data:posts})
    } catch (error) {
        return res.status(500).send(error)
    }
}


const addComment = async (req,res) => {
    try {
        let id = req.params.id
        let body = req.body
        console.log(body)

        await pushComment(id,body)

        return res.status(201).send({message:"Yorumunuz oluşturuldu."})
    } catch (error) {
        console.log(error)
        return res.status(500).send(error)
    }
}

const deletePost = async (req,res) => {
    try {
        const id = req.params.id
        await remove(id)
        return res.status(201).send({message:"Yorumunuz silindi."})
    } catch (error) {
        return res.status(500).send(error)
    }
}

const updatePost = async (req,res) => {
    try {
        const id = req.params.id
        const body = req.body
        await update(id,body)
        return res.status(201).send({message:"Post güncellendi."})
    } catch (error) {
        return res.status(500).send(error)
    }
}

const removeComment = async (req,res) => {
    try {
        const postId = req.body.postId
        const commentId = req.body.commentId

        await deleteComment(postId,commentId)
        return res.status(201).send({message:"Yorum silindi."})
    } catch (error) {
        return res.status(500).send(error)
    }
}

module.exports = {
    insertPosts,
    listPosts,
    addComment,
    deletePost,
    updatePost,
    removeComment
}
