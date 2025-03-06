import React from "react";
import { Field, Formik, Form, ErrorMessage } from "formik"; 
import * as Yup from 'yup';

const RegistrationForm2 = () => { 
    return(
        <div>
            <h2>Registration Form</h2>
            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    mobile: "",
                }}
                onSubmit={(values) => {
                    alert("For Submitted by "+ values.firstName+ " "+values.lastName+"!!!");
                }}

                validationSchema={Yup.object({
                    firstName : Yup.string().min(5,"Must be minimum 5 Letters")
                                            .required("First Name is required"),
                    lastName : Yup.string().required("Last Name is required"),
                    mobile : Yup.string().matches(/^[0-9]{10}$/, "Please enter valid mobile number").required("Mobile is required")
                })}
            >
                {
                (formik) => 
                    <Form>
                        <div className="form-group">
                            <label className="form-label">First Name</label>
                            <Field name="firstName" type="text" className="form-control"/>
                            <ErrorMessage name="firstName" component="div" className="errorMsg"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <Field name="lastName" type="text" className="form-control"/>
                            <ErrorMessage name="lastName" component="div" className="errorMsg"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <Field name="email" type="email" className="form-control"/>
                            <ErrorMessage name="email" component="div" className="errorMsg"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label">Mobile</label>
                            <Field name="mobile" type="text" className="form-control"/>
                            <ErrorMessage name="mobile" component="div" className="errorMsg"/>
                        </div>
                        <button type ="submit" className="btn btn-info" disabled = {!(Formik.isValid && formik.dirty)}>Register</button>
                    </Form>
                }
            </Formik>
        </div>
    )
}

export default RegistrationForm2;
