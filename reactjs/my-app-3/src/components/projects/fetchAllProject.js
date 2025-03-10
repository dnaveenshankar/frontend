import { useState, useEffect } from "react";
import { fetchAllProjects, deleteProject } from "../services/projectservice";
import GetInvestorsForProject from "../investments/GetInvestorForProject";
import CreateProject from "./createProject"; 

function FetchAllProjects() {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [investorProjectId, setInvestorProjectId] = useState(null);

    useEffect(() => {
        loadProjects();
    }, []);

    const loadProjects = () => {
        fetchAllProjects().then(response => setProjects(response.data));
    };

    const handleEdit = (project) => {
        setSelectedProject(project);
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this project?")) {
            deleteProject(id).then(() => {
                setProjects(projects.filter((p) => p.id !== id));
            });
        }
    };

    return (
        <div>
            <h2>Project List</h2>
            <CreateProject 
                selectedProject={selectedProject} 
                clearSelection={() => setSelectedProject(null)} 
                refreshProjects={loadProjects} 
            />
            <hr/>

            {projects.length === 0 ? (
                <p>No projects available</p>
            ) : (
                projects.map((project) => (
                    <div key={String(project.id)}>
                        <p><strong>Name:</strong> {project.projectName}</p>
                        <p><strong>Description:</strong> {project.projectDesc}</p>
                        <p><strong>Goal Amount:</strong> {project.goalAmount}</p>
                        <p><strong>Amount Raised:</strong> {project.amountRaised}</p>

                        <button onClick={() => handleEdit(project)}>Edit</button>
                        <button onClick={() => handleDelete(project.id)}>Delete</button>
                        <button onClick={() => setInvestorProjectId(investorProjectId === project.id ? null : project.id)}>
                            Get All Investors
                        </button>
                        {investorProjectId === project.id && <GetInvestorsForProject projectId={project.id} />}
                        <hr />
                    </div>
                ))
            )}
        </div>
    );
}

export default FetchAllProjects;
