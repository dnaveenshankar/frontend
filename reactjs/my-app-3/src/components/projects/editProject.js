import { Field, Form, Formik } from "formik";
import { updateProject } from "../services/projectservice";

function EditProject({ project, onUpdated }) {
    return (
        <div>
            <h3>Edit Project</h3>
            <Formik
                initialValues={{
                    projectName: project.projectName || "",
                    projectDesc: project.projectDesc || "",
                    goalAmount: project.goalAmount ? String(project.goalAmount) : "0",
                    amountRaised: project.amountRaised ? String(project.amountRaised) : "0"
                }}
                onSubmit={(values) => {
                    const updatedProject = {
                        id: project.id,
                        projectName: values.projectName,
                        projectDesc: values.projectDesc,
                        goalAmount: parseFloat(values.goalAmount),
                        amountRaised: parseFloat(values.amountRaised) 
                    };

                    updateProject(project.id, updatedProject).then(() => {
                        alert("Project updated successfully!");
                        onUpdated();
                    });
                }}
            >
                {
                    ({ values }) => (
                        <Form>
                            <label>Project Name:</label>
                            <Field name="projectName" type="text" />

                            <label>Project Description:</label>
                            <Field name="projectDesc" as="textarea" />

                            <label>Goal Amount:</label>
                            <Field name="goalAmount" type="number" />

                            <label>Amount Raised:</label>
                            <Field name="amountRaised" type="number" />

                            <input type="submit" value="Update Project" />
                        </Form>
                    )
                }
            </Formik>
        </div>
    );
}

export default EditProject;
