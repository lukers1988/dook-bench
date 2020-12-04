import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { postsSelector } from "../selector";
import PostsList from "../containers/PostsList";
import PostsForm from "../containers/PostsForm";
import { addPost } from "../actions";
import { Route, useHistory, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import Post from "../containers/Post";

const PostsComponent = () => {
    const { path } = useRouteMatch();
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmitPost = (event: any) => {
        event.preventDefault();
        dispatch(addPost({
            id:  Math.floor(Math.random() * 100) + 5,
            userId: 1,
            title,
            body
        }));
        history.push(`${path}`);
    }

    const handleChangeTitle = (event: any) => {
        setTitle(event.target.value);
    }

    const handleChangeBody = (event: any) => {
        setBody(event.target.value);
    }

    return (
        <div>
            <Route exact path={path}>
                <div className="mt-1 row">
                    <div className="col text-left">
                        Lista postów
                    </div>
                    <div className="col text-right">
                        <Link to={`${path}/add`} className="btn btn-success">New post</Link>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <PostsList path={path} />
                    </div>
                </div>
            </Route>
            <Route path={`${path}/add`}>
                <PostsForm handleSubmit={handleSubmitPost} handleChangeTitle={handleChangeTitle} handleChangeBody={handleChangeBody} />
            </Route>
            <Route path={`${path}/:id/show`}>
                <Post />
            </Route>
        </div>
    )
}

export default PostsComponent;
