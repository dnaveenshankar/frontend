import { Field, Form, Formik } from 'formik';
import { addPost } from '../service/PostService';

function AddPost() {
    return (
        <div className="container mt-4">
            <h3 className="text-primary">Add Post</h3>
            <Formik
                initialValues={{
                    id: '',
                    title: '',
                    views: ''
                }}
                onSubmit={(values) => {
                    addPost(values).then(resp => alert("Post Saved"));
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
                                <label className="form-label">Title</label>
                                <Field name="title" type="text" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Views</label>
                                <Field name="views" type="number" className="form-control" />
                            </div>
                            <input type="submit" className="btn btn-primary mt-3" value="Submit" />
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default AddPost;
