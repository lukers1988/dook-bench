import React from 'react';

interface PostsFormInterface {
    handleSubmit: (event: any) => void,
    handleChangeTitle: (event: any) => void,
    handleChangeBody: (event: any) => void
}

const PostsForm: React.FC<PostsFormInterface> = ({
    handleSubmit,
    handleChangeTitle,
    handleChangeBody
}) => {
    return (
        <div className="card text-left">
            <div className="card-header alert-success">
                Add Post
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" className="form-control" id="title" onKeyUp={handleChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <textarea name="body" className="form-control" id="body" onKeyUp={handleChangeBody} />
                    </div>
                    <button type="submit" className="btn btn-success">
                        Add Post
                    </button>
                </form>
            </div>

        </div>
    )
}

export default PostsForm;
