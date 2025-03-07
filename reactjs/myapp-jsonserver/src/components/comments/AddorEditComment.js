import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addComment, fetchCommentById, updateComment } from '../service/CommentService';

function AddOrEditComment() {
    const { id } = useParams();
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
                        });
                    } else {
                        addComment(values).then(() => {
                            alert("Comment Added Successfully!");
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
                        <input type="submit" className="btn btn-primary mt-3" value={id ? "Update Comment" : "Add Comment"} />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddOrEditComment;