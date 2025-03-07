import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { addPost, fetchPostById, updatePost } from '../service/PostService';

function AddOrEditPost() {
    const { id } = useParams();
    const [initialValues, setInitialValues] = useState({
        id: '',
        title: '',
        views: ''
    });

    useEffect(() => {
        if (id) {
            fetchPostById(id).then(resp => setInitialValues(resp.data));
        }
    }, [id]);

    return (
        <div className="container mt-4">
            <h3>{id ? 'Edit Post' : 'Add Post'}</h3>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => {
                    if (id) {
                        updatePost(id, values).then(() => {
                            alert("Post Updated Successfully!");
                        });
                    } else {
                        addPost(values).then(() => {
                            alert("Post Added Successfully!");
                        });
                    }
                }}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label className="form-label">Post ID</label>
                            <Field name="id" type="text" className="form-control" disabled={!!id} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Title</label>
                            <Field name="title" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Views</label>
                            <Field name="views" type="text" className="form-control" />
                        </div>
                        <input type="submit" className="btn btn-primary mt-3" value={id ? "Update Post" : "Add Post"} />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddOrEditPost;
