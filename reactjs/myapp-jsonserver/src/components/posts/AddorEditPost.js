import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { addPost, fetchPostById, updatePost, deletePost } from '../service/PostService';

function AddOrEditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
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

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            deletePost(id).then(() => {
                alert("Post Deleted Successfully!");
                navigate(-1);
            });
        }
    };

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
                        <div className="mt-3">
                            <input type="submit" className="btn btn-primary me-2" value={id ? "Update Post" : "Add Post"} />
                            {id && <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Post</button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddOrEditPost;
