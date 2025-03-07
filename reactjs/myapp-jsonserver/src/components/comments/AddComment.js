import { Field, Form, Formik } from 'formik';
import { addComment } from '../service/CommentService';

function AddComment() {
    return (
        <div className="container mt-4">
            <h3 className="text-primary">Add Comment</h3>
            <Formik
                initialValues={{
                    id: '',
                    postId: '',
                    text: ''
                }}
                onSubmit={(values) => {
                    addComment(values).then(resp => alert("Comment Saved"));
                }}
            >
                {
                    (formik) =>
                        <Form>
                            <div className="form-group">
                                <label className="form-label">Id</label>
                                <Field name="id" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Post ID</label>
                                <Field name="postId" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Comment</label>
                                <Field name="text" type="text" className="form-control" />
                            </div>
                            <input type="submit" className="btn btn-primary mt-3" value="Submit" />
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default AddComment;
