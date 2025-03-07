import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCommentById } from "../service/CommentService";

function FetchComment() {
    const [comment, setComment] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchCommentById(id).then(resp => setComment(resp.data));
    }, [id]);

    return (
        <div>
            <h3>Comment Details</h3>
            <div>
                {comment !== null && (
                    <div>
                        <h2>Comment Details</h2>
                        <p>Id: {comment.id}</p>
                        <p>Post ID: {comment.postId}</p>
                        <p>Comment: {comment.text}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchComment;
