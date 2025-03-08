import { Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FetchByIdProduct, AddProducts, updateProduct, deleteProduct } from '../service/ProductService';

function AddOrEditProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const [initialValues, setInitialValues] = useState({
        id: '',
        name: '',
        price: '',
        mfd: ''
    });

    useEffect(() => {
        if (id) {
            FetchByIdProduct(id).then(resp => setInitialValues(resp.data));
        }
    }, [id]);

    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            deleteProduct(id).then(() => {
                alert("Product Deleted Successfully!");
                navigate(-1);
            })
        }
    };

    return (
        <div className="container mt-4">
            <h3>{id ? 'Edit Product' : 'Add Product'}</h3>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                onSubmit={(values) => {
                    if (id) {
                        updateProduct(id, values).then(() => {
                            alert("Product Updated Successfully!");
                            navigate(-1);
                        });
                    } else {
                        AddProducts(values).then(() => {
                            alert("Product Added Successfully!");
                            navigate(-1);
                        });
                    }
                }}
            >
                {() => (
                    <Form>
                        <div className="form-group">
                            <label className="form-label">Product ID</label>
                            <Field name="id" type="text" className="form-control" disabled={!!id} />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Name</label>
                            <Field name="name" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">Price</label>
                            <Field name="price" type="text" className="form-control" />
                        </div>
                        <div className="form-group">
                            <label className="form-label">MFD</label>
                            <Field name="mfd" type="date" className="form-control" />
                        </div>
                        <div className="mt-3">
                            <input type="submit" className="btn btn-primary me-2" value={id ? "Update Product" : "Add Product"} />
                            {id && <button type="button" className="btn btn-danger" onClick={handleDelete}>Delete Product</button>}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default AddOrEditProduct;