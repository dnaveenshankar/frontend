import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchAllPosts } from "../service/PostService";

function FetchAllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts().then(resp => setPosts(resp.data));
    }, []);

    return (
        <div>
            <Link to="/post/add">Add New Post</Link>
            <h3>All Posts</h3>
            <div>
                {
                    posts.map(post => (
                        <div key={post.id}>
                            <p>{post.id} {post.title}
                            <Link to={`/post/view/${post.id}`}> View</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchAllPosts;
