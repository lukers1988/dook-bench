import React, { useEffect } from 'react';
import { addPost, PostInterface } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import postsSelector from "../selector";

const PostsContainer = () => {
    const { posts } = useSelector(postsSelector);
    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(addPost({
            id: 100,
            userId: 1,
            title: 'Test jsec',
            body: 'TestBody'
        }));
    }, []);

    return (
        <div>
            <span>Lista postów</span>
            <div>
                {posts?.map((post: PostInterface, index: number)  => {
                    return <div key={index}>{post.title}</div> })}
            </div>
        </div>
    )
}

export default PostsContainer;
