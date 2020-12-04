import { ADD_POST, GET_POSTS } from "./constants";
import initialPosts from "./initialState";


export const postsReducer = (state = initialPosts, action: any) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state, posts: [...state.posts, action.post]
            }
        case GET_POSTS:
            return action.posts;
        default:
            return state;
    }
}
