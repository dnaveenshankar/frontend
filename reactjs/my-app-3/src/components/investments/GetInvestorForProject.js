import { useState, useEffect } from "react";
import { fetchInvestmentsByProjectId } from "../services/investmentsservice";

function GetInvestorsForProject({ projectId }) {
    const [investors, setInvestors] = useState([]);

    useEffect(() => {
        fetchInvestmentsByProjectId(projectId).then(response => {
            setInvestors(response.data);
        });
    }, [projectId]);

    return (
        <div>
            <h3>Investors</h3>
            {investors.length === 0 ? (
                <p>No investors found for this project</p>
            ) : (
                investors.map((investor) => (
                    <p key={String(investor.id)}>
                        {investor.investorName} invested ₹{parseFloat(investor.amountPaid).toFixed(2)}
                    </p>
                ))
            )}
        </div>
    );
}

export default GetInvestorsForProject;
