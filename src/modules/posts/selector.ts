const postsSelector = (state: any) => {
    return {
        posts: state.postsReducer.posts
    }
}

export default postsSelector;
