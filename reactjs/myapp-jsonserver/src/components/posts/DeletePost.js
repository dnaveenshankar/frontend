import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchPostById, deletePost } from "../service/PostService";

function DeletePost() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [post, setPost] = useState({});

    useEffect(() => {
        fetchPostById(id)
            .then(resp => setPost(resp.data))
    }, [id]);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            deletePost(id)
                .then(() => {
                    alert("Post deleted successfully!");
                    navigate(-1);
                })
        }
    };

    return (
        <div>
            <h3>Delete Post</h3>

            <div>
                <p><strong>ID:</strong> {post.id}</p>
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Views:</strong> {post.views}</p>

                <button onClick={handleDelete}>Delete</button>
                <button onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default DeletePost;
