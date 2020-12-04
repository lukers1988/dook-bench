import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import { postSelector } from "../selector";
import {PostInterface} from "../actions";
import PostComments from "./PostComments";

interface PostParamsInterface {
    id: string
}


const Post = () => {
    const params = useParams<PostParamsInterface>();
    const postId = parseInt(params.id);
    const { post } = useSelector(state => postSelector(state, postId))


    return (
        <div className="text-left">
            {post && (<div className="card">
                <div className="card-header alert-info">
                    {post[0].title}
                </div>
                <div className="card-body">
                    {post[0].body}
                </div>
            </div>)}
            <div className="mt-1">
                <h2>Comments</h2>
            </div>
            <PostComments postId={postId} />
        </div>
    )
}

export default Post;
