import React from 'react'
import {Link} from 'react-router'
import Photo from'./Photo'
import Comments from './Comments'

const Single = React.createClass({
    render(){
        const i = this.props.posts.findIndex((post) => post.code === this.props.params.PostId);
        const post = this.props.posts[i]
        console.log(post)
        console.log(i)
        return (
            <div className='single-photo'>
                <Photo i={i} post={post} {...this.props} />
                <Comments></Comments>
            </div>
        )
    }
})
 
export default Single