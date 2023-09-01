const Post = require("./post.model");

const insert = async (data) =>  {
    let post = new Post(data)
    await post.save()
}

const list = async () => {
    let posts =  await Post.find({status:true}).lean()
    let data = []
    for(let i=0 ; i<posts.length;i++){
        let trueComment = []
        let post = posts[i]
        for(let j=0;j<post.comments.length;j++){
            let comment = post.comments[j]
            if(comment.status == true){
                trueComment.push(comment)
            }
        }
        data.push({...post,comments:trueComment})
    }
    return data
}

const detail = async (id) => {
    return await Post.findById(id)
}

const update = async (id,data) => {
    return await Post.findByIdAndUpdate(id,data)
}

const remove = async (id) => {
    return await Post.findByIdAndUpdate(id,{status:false})
}

const pushComment = async (id,data) => {
    return await Post.findByIdAndUpdate(id,{$push:{comments:data}})
}

const deleteComment = async (postId,commentId) => {
    return await Post.findOneAndUpdate(
        {
            _id: postId,
            'comments._id': commentId
        },
        {
            $set: {
                'comments.$.status': false
            }
        },
        { new: true }
    );
}

module.exports = {
    insert,
    list,
    detail,
    update,
    remove,
    pushComment,
    deleteComment
}

