import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addComment, fetchCommentById, updateComment, deleteComment } from '../service/CommentService';

function AddOrEditComment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        id: '',
        postId: '',
        text: ''
    });

    useEffect(() => {
        if (id) {
            fetchCommentById(id).then(resp => setInitialValues(resp.data));
        }
    }, [id]);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this comment?")) {
            deleteComment(id).then(() => {
                alert("Comment Deleted Successfully!");
                navigate(-1);
            });
        }
    };

    return (
        <div className="container mt-4">
            <h3>{id ? 'Edit Comment' : 'Add Comment'}</h3>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => {
                    if (id) {
                        updateComment(id, values).then(() => {
                            alert("Comment Updated Successfully!");
                            navigate(-1);
                        });
                    } else {
                        addComment(values).then(() => {
                            alert("Comment Added Successfully!");
                            navigate(-1);
                        });
                    }
                }}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label className="form-label">Comment ID</label>
                            <Field name="id" type="text" className="form-control" disabled={!!id} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Post ID</label>
                            <Field name="postId" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Comment</label>
                            <Field name="text" type="text" className="form-control" />
                        </div>
                        <div className="mt-3">
                            <input type="submit" className="btn btn-primary me-2" value={id ? "Update Comment" : "Add Comment"} />
                            {id && <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Comment</button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddOrEditComment;
