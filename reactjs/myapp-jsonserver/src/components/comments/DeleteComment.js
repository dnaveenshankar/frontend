import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchCommentById, deleteComment } from "../service/CommentService";

function DeleteComment() {
    const navigate = useNavigate();
    const { id } = useParams();
    
    // Initialize comment as an empty object to avoid null reference errors
    const [comment, setComment] = useState({});

    useEffect(() => {
        fetchCommentById(id)
            .then(resp => setComment(resp.data))
    }, []);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            deleteComment(id)
                .then(() => {
                    alert("Comment deleted successfully!");
                    navigate(-1);
                })
        }
    };

    return (
        <div>
            <h3>Delete Comment</h3>
            
            <div>
                <p><strong>ID:</strong> {comment.id}</p>
                <p><strong>Post ID:</strong> {comment.postId}</p>
                <p><strong>Text:</strong> {comment.text}</p>

                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default DeleteComment;