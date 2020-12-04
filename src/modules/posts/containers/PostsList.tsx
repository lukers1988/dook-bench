import React from 'react';
import {PostInterface} from "../actions";

interface Posts {
    posts: PostInterface[]
}

const PostsList: React.FC<Posts> = ({
    posts
}) => {
    return (
        <>
            {posts.map((post: PostInterface, index: number) => {
                return <div className="card mt-1 text-left" key={index}>
                    <div className="card-header alert-info">
                        {post.title}
                    </div>
                    <div className="card-body">
                        {post.body}
                    </div>
                </div>
            })}
        </>
        // <div className="card">
        //     <div className="card-body">
        //         {posts?.map((post: PostInterface, index: number)  => {
        //             return <div key={index}>{post.title}</div> })}
        //     </div>
        // </div>
    )
}

export default PostsList;
