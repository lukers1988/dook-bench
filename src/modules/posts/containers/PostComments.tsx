import React, {useEffect, useState} from 'react';
import axios from "axios";

interface PostCommentsInterface {
    postId: number
}

interface CommentInterface {
    postId: number
    id: number
    email: string
    name: string
    body: string
}

const PostComments: React.FC<PostCommentsInterface> = ({
    postId
}) => {
    const [comments, setComments] = useState<CommentInterface[]>([]);

    useEffect(() => {

        axios({
            url: `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
            method: 'GET'
        }).then( response => {
            setComments(response.data);
        });
    }, []);

    return (
        <>
            {comments.map((comment: CommentInterface, index: number) => {
                return <div className="card text-left mt-1" key={index}>
                    <div className="card-header alert-success">
                        {comment.name} ({comment.email})
                    </div>
                    <div className="card-body">
                        {comment.body}
                    </div>
                </div>
            })}
        </>
    )
}

export default PostComments;
