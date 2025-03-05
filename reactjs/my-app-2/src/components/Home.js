import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p><Link to="/mobile/all">Fetch All Mobiles</Link></p>
      <p><Link to="/mobile/add">Add Mobiles</Link></p>
      <p><Link to="/mobileForm">Mobile Form</Link></p>
      <p><Link to="/mobile/details">Mobile Deatils</Link></p>
    </div>
  );
}

export default Home;