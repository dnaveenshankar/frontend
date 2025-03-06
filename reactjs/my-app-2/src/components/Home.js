import { Link } from 'react-router-dom'; 

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <h2>Mobile Controllers</h2>
      <p><Link to="/mobile/all">Fetch All Mobiles</Link></p>
      <p><Link to="/mobile/add">Add Mobiles</Link></p>
      <p><Link to="/mobileForm">Mobile Form</Link></p>
      <p><Link to="/mobile/details">Mobile Deatils</Link></p><hr/>
      <h2>Customer Controllers</h2>
      <p><Link to="/customer/add">Add Customer</Link></p>
      <p><Link to="/customer/all">View all Customers</Link></p>



    </div>
  );
}

export default Home;