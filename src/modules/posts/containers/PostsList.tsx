import React from 'react';
import { PostInterface } from "../actions";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { postsSelector } from "../selector";

interface Posts {
    path: string
}

const PostsList: React.FC<Posts> = ({
    path
}) => {
    const { posts } = useSelector(postsSelector);
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
                    <div className="card-footer">
                        <Link to={`${path}/${post.id}/show`} > Comments </Link>
                    </div>
                </div>
            })}
        </>
    )
}

export default PostsList;
