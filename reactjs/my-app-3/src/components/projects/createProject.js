import { useState, useEffect } from "react";
import { addProject, updateProject, fetchNextProjectId } from "../services/projectservice";

function CreateProject({ selectedProject, clearSelection, refreshProjects }) {
    const [formValues, setFormValues] = useState({
        id: '',
        projectName: '',
        projectDesc: '',
        goalAmount: '',
        amountRaised: ''
    });

    useEffect(() => {
        if (selectedProject) {
            setFormValues(selectedProject);
        } else {
            resetForm(); 
        }
    }, [selectedProject]);
    const resetForm = () => {
        setFormValues({
            id: '',
            projectName: '',
            projectDesc: '',
            goalAmount: '',
            amountRaised: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedProject) {
            updateProject(formValues.id, formValues).then(() => {
                alert("Project updated successfully!");
                clearSelection(); 
                refreshProjects(); 
            });
        } else {
            fetchNextProjectId().then(nextId => {
                const newProject = { ...formValues, id: nextId, goalAmount: parseFloat(formValues.goalAmount), amountRaised: parseFloat(formValues.amountRaised) };
                addProject(newProject).then(() => {
                    alert("Project Created!");
                    resetForm();
                    refreshProjects();
                });
            });
        }
    };

    return (
        <div>
            <h3>{selectedProject ? "Edit Project" : "Add Project"}</h3>
            <form onSubmit={handleSubmit}>
                <label>Project Name</label>
                <input
                    type="text"
                    value={formValues.projectName}
                    onChange={(e) => setFormValues({ ...formValues, projectName: e.target.value })}
                />

                <label>Project Description</label>
                <textarea
                    value={formValues.projectDesc}
                    onChange={(e) => setFormValues({ ...formValues, projectDesc: e.target.value })}
                />

                <label>Goal Amount</label>
                <input
                    type="number"
                    value={formValues.goalAmount}
                    onChange={(e) => setFormValues({ ...formValues, goalAmount: e.target.value })}
                />

                <label>Amount Raised</label>
                <input
                    type="number"
                    value={formValues.amountRaised}
                    onChange={(e) => setFormValues({ ...formValues, amountRaised: e.target.value })}
                />

                <button type="submit">{selectedProject ? "Update Project" : "Create Project"}</button>
                {selectedProject && <button type="button" onClick={clearSelection}>Cancel</button>}
            </form>
        </div>
    );
}

export default CreateProject;
