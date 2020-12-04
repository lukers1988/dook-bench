import {ADD_POST, GET_POSTS } from "./constants";

export interface PostInterface {
    id: number,
    userId: number,
    title: string,
    body: string
}

export const addPost = (post: PostInterface) => ({
    type: ADD_POST, post
});

export const getPosts = () => ({
    type: GET_POSTS
});
