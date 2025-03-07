import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchAllComments } from "../service/CommentService";

function FetchAllComments() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchAllComments().then(resp => setComments(resp.data));
    }, []);

    return (
        <div>
            <Link to="/comment/add">Add New Comment</Link>
            <h3>All Comments</h3>
            <div>
                {
                    comments.map(comment => (
                        <div>
                            <p>{comment.id} {comment.text}
                            <Link to={`/comment/view/${comment.id}`}>View</Link></p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchAllComments;
