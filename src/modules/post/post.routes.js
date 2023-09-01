const express = require("express");
const {
    insertPosts,
    listPosts,
    addComment,
    deletePost,
    updatePost,
    removeComment
} = require("./post.controller");

const router = express.Router()

router.route("/").get(listPosts)


router.route("/comment/:id").post(addComment)
router.route("/").post(insertPosts)

// router.patch()
router.route("/:id").put(updatePost)

router.route("/comment").delete(removeComment)
router.route("/:id").delete(deletePost)


module.exports = router