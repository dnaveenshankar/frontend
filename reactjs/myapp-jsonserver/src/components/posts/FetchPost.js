import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPostById } from "../service/PostService";

function FetchPost() {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        fetchPostById(id).then(resp => setPost(resp.data));
    }, [id]);

    return (
        <div>
            <h3>Post Details</h3>
            <div>
                {post !== null && (
                    <div>
                        <h2>Post Details</h2>
                        <p>Id: {post.id}</p>
                        <p>Title: {post.title}</p>
                        <p>Views: {post.views}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default FetchPost;
