import { useState } from "react";
import { addProject } from "../services/projectservice";

function CreateProject() {
    const [projectName, setProjectName] = useState('');
    const [projectDesc, setProjectDesc] = useState('');
    const [goalAmount, setGoalAmount] = useState('');
    const [amountRaised, setAmountRaised] = useState('');
    
    const handleSubmit = () => {
        const payload = {
            projectName: projectName,
            projectDesc: projectDesc,
            goalAmount: parseFloat(goalAmount),
            amountRaised: parseFloat(amountRaised)
        };

        addProject(payload)
            .then(resp => {
                alert("Project created with id: " + resp.data.id);
            })
    };

    return (
        <div>
            <h3>Create Project</h3>
            <div>
                <label>Project Name</label>
                <input type="text" value={projectName}
                    onChange={(event) => setProjectName(event.target.value)} />
            </div>
            <div>
                <label>Project Description</label>
                <textarea value={projectDesc}
                    onChange={(event) => setProjectDesc(event.target.value)} />
            </div>
            <div>
                <label>Goal Amount</label>
                <input type="number" value={goalAmount}
                    onChange={(event) => setGoalAmount(event.target.value)} />
            </div>
            <div>
                <label>Amount Raised</label>
                <input type="number" value={amountRaised}
                    onChange={(event) => setAmountRaised(event.target.value)} />
            </div>
            <div>
                <button type="submit" onClick={handleSubmit}>Create Project</button>
            </div>
        </div>
    );
}

export default CreateProject;
