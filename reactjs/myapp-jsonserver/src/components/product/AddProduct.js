import { Field, Form, Formik } from 'formik';
import { AddProducts } from '../service/ProductService';

function AddProduct() {
    return (
        <div className="container mt-4">
            <h3 className="text-primary">Add Product</h3>
            <Formik
                initialValues={{
                    id: '',
                    name: '',
                    price: '',
                    mfd: ''
                }}
                onSubmit={(values) => {
                    AddProducts(values).then(resp => alert("Product Saved"));
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
                            <input type="submit" className="btn btn-primary mt-3" value="Submit" />
                        </Form>
                }
            </Formik>
        </div>
    )
}

export default AddProduct;