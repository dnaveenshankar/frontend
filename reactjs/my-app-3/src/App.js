import './App.css';
import FetchAllProjects from './components/projects/fetchAllProject';
import CreateInvestment from './components/investments/CreateInvestment';
import SearchInvestor from './components/investments/SearchInvestor';

function App() {
  return (
    <div className="App">
        <h1 style={{ textAlign: "center" }}>Crowdfunding Dashboard</h1>
        <FetchAllProjects /><hr/>
        <CreateInvestment/>
        <SearchInvestor/>
    </div>
  );
}

export default App;
