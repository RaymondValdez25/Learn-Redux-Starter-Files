import React from 'react'
import {Link} from 'react-router'
import Photo from'./Photo'
import Comments from './Comments'

const Single = React.createClass({


    render(){
        const { PostId } = this.props.params
        const i = this.props.posts.findIndex((post) => post.code === PostId);
        const post = this.props.posts[i]
        const postComments = this.props.comments[PostId] || []
        console.log(post)
        console.log(i)
        return (
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments}></Comments>
            </div>
        )
    }
})
 
export default Single