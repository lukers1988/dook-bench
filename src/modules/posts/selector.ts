import {PostInterface} from "./actions";

export const postsSelector = (state: any) => {
    return {
        posts: state.postsReducer.posts
    }
}

export const postSelector = (state: any, id: number) => {

    return {
        post: state.postsReducer.posts.filter((post: PostInterface) => post.id === id)
    }
}
