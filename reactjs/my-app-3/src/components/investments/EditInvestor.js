import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { updateInvestment } from "../services/investmentsservice";

function EditInvestor({ investment, onUpdated = () => {} }) {  
    const [initialValues, setInitialValues] = useState({
        investorName: "",
        amountPaid: "",
        projectId: ""
    });

    useEffect(() => {
        if (investment) {
            setInitialValues({
                investorName: investment.investorName || "",
                amountPaid: investment.amountPaid !== undefined ? String(investment.amountPaid) : "",
                projectId: investment.projectId !== undefined ? String(investment.projectId) : ""
            });
        }
    }, [investment]);

    return (
        <div>
            <h3>Edit Investment</h3>
            <Formik
                enableReinitialize={true}
                initialValues={initialValues}
                onSubmit={(values) => {
                    const updatedInvestment = {
                        id: investment.id,
                        investorName: values.investorName,
                        amountPaid: parseFloat(values.amountPaid).toFixed(2),  
                        projectId: values.projectId
                    };

                    updateInvestment(investment.id, updatedInvestment).then(() => {
                        alert("Investment updated successfully!");
                        onUpdated();  
                    });
                }}
            >
                {({ values, handleChange }) => ( 
                    <Form>
                        <label>Investor Name:</label>
                        <Field name="investorName" type="text" />

                        <label>Amount:</label>
                        <Field 
                            name="amountPaid" 
                            type="number" 
                            step="0.01" 
                            value={values.amountPaid}  
                            onChange={handleChange}  
                        />

                        <label>Project ID:</label>
                        <Field name="projectId" type="text" disabled />

                        <button type="submit">Update Investment</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default EditInvestor;
