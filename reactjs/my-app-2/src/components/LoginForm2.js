import React from "react";
import {Field, Formik, Form, ErrorMessage} from 'formik'; 

function LoginForm2(){

    return(
        <div>
            <h1>Lgin Form Using Formik</h1>
            <Formik
                initialValues={{uname: '', upwd: ''}}
                onSubmit={(values) => {

                    if(values.upwd === 'admin'){
                        alert("Welcome "+ values.uname+ "!");
                    }
                    else{
                        alert("Wrong Password, Try Again !!!")
                    }

                    }
                }
                validate={values =>{
                    const errors ={};

                    if(!values.uname){
                        errors.uname = "Username is required";
                    }
                    if(!values.upwd){
                        errors.upwd = "Password is required";
                    }

                    return errors;
                }}
                >
                    {
                        (Formik) => 

                            <Form>
                        <div className="form-group">
                            <label className="form-label">Username</label>
                            <Field name ="uname" type="text" className="form-control"/>
                            <ErrorMessage name="uname" component="div" className="errorMsg"/>
                        </div>
                        <div className="form-group">
                            <label className="form-label ">Password</label>
                            <Field name="upwd" type="password" className="form-control"/>
                            <ErrorMessage name="upwd" component="div" className="errorMsg"/>
                        </div>
                        <button type ="submit" className="btn btn-info" disabled = {!(Formik.isValid && Formik.dirty)}>Login</button>
                    </Form>
                    }
                    

            </Formik>

        </div>
    )
}

export default LoginForm2;