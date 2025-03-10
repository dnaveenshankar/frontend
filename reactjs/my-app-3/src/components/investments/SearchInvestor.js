import { useState } from "react";
import EditInvestor from "./EditInvestor";
import { deleteInvestment, searchInvestmentsByName } from "../services/investmentsservice";

function SearchInvestor() {
    const [searchName, setSearchName] = useState("");
    const [investments, setInvestments] = useState([]);
    const [editInvestorId, setEditInvestorId] = useState(null);

    const handleSearch = () => {
        searchInvestmentsByName(searchName).then(response => {
            console.log("Search Results:", response.data); 
            setInvestments(response.data);
            setEditInvestorId(null);
        });
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this investment?")) {
            deleteInvestment(id).then(() => {
                setInvestments(investments.filter(inv => inv.id !== id));
            });
        }
    };

    const handleEditClick = (id) => {
        setEditInvestorId(editInvestorId === id ? null : id);
    };

    return (
        <div>
            <h2>Search Investor</h2>
            <input
                type="text"
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                placeholder="Enter investor name"
            />
            <button onClick={handleSearch}>Search</button>

            <h3>Investment List</h3>
            {investments.length === 0 ? (
                <p>No investments found</p>
            ) : (
                investments.map((investment) => (
                    <div key={investment.id}>
                        <p>Amount: ₹{parseFloat(investment.amountPaid || 0).toFixed(2)}</p>
                        <p>Investor Name: {investment.investorName}</p>
                        <p>Project ID: {investment.projectId ?? "Not Assigned"}</p>
                        <button onClick={() => handleEditClick(investment.id)}>EDIT</button>
                        <button onClick={() => handleDelete(investment.id)}>DELETE</button>

                        {editInvestorId === investment.id && <EditInvestor investment={investment} />}
                    </div>
                ))
            )}
        </div>
    );
}

export default SearchInvestor;
