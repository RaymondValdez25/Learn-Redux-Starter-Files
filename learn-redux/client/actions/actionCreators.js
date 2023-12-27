//increment
export function increment(index){
    return{
        type:'INCREMENT_LIKES',
        index
    }
}

//add comment
export function addComment(PostId, author, comment){
    console.log('Dispatching add comment')
    return {
        type:'ADD_COMMENT',
        PostId,
        author,
        comment
    }
}

//remove comment
export function removeComment(postId, i){
    return{
        type:'REMOVE_COMMENT',
        i,
        postId,
    }
}