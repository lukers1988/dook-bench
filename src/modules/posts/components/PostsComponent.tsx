import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import postsSelector from "../selector";
import PostsList from "../containers/PostsList";
import PostsForm from "../containers/PostsForm";
import {addPost} from "../actions";

const PostsComponent = () => {
    const { posts } = useSelector(postsSelector);
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const dispatch = useDispatch();

    const handleSubmitPost = (event: any) => {
        event.preventDefault();
        dispatch(addPost({
            id:  Math.floor(Math.random() * 100) + 5,
            userId: 1,
            title,
            body
        }));
    }

    const handleChangeTitle = (event: any) => {
        setTitle(event.target.value);
    }

    const handleChangeBody = (event: any) => {
        setBody(event.target.value);
    }

    return (
        <div>
            <PostsForm handleSubmit={handleSubmitPost} handleChangeTitle={handleChangeTitle} handleChangeBody={handleChangeBody} />
            <div className="mt-1">Lista postów</div>
            <div className="row">
                <div className="col-12">
                    {(posts !== undefined) && <PostsList posts={posts} />}
                </div>
            </div>
        </div>
    )
}

export default PostsComponent;
