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
            <Link to="/comment/edit/">Add New Comment</Link>
            <h3>All Comments</h3>
            <div>
                {
                    comments.map(comment => (
                        <div>
                            <p>{comment.id} {comment.text}&nbsp;&nbsp;
                            <Link to={`/comment/view/${comment.id}`}>View</Link>&nbsp;&nbsp;
                            <Link to={`/comment/edit/${comment.id}`}>Edit</Link>&nbsp;&nbsp;
                            <Link to={`/comment/delete/${comment.id}`}>Delete</Link>
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default FetchAllComments;
