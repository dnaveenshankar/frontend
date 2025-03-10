import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { fetchAllProjects } from "../services/projectservice";
import { addInvestment } from "../services/investmentsservice";

function CreateInvestment() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchAllProjects().then(response => setProjects(response.data));
    }, []);

    return (
        <div>
            <h3>Add Investment</h3>
            <Formik
                initialValues={{
                    projectId: "",
                    investorName: "",
                    amountPaid: ""
                }}
                onSubmit={(values) => {
                    const payload = {
                        investorName: values.investorName,
                        amountPaid: parseFloat(values.amountPaid)
                    };

                    addInvestment(payload).then(() => alert("Investment added successfully!"));
                }}
            >
                {() => (
                    <Form>
                        <label>Project:</label>
                        <Field as="select" name="projectId">
                            <option value="">Select Project</option>
                            {projects.map(project => (
                                <option key={project.id} value={project.id}>
                                    {project.projectName}
                                </option>
                            ))}
                        </Field>

                        <label>Investor Name:</label>
                        <Field name="investorName" type="text" />

                        <label>Amount:</label>
                        <Field name="amountPaid" type="number" step="0.01" />

                        <input type="submit" value="Add Investment" />
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default CreateInvestment;
