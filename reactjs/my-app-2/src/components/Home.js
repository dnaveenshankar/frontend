import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="text-center text-dark">Home Page</h1>

      <Link to="/GetAllMobiles" className="btn btn-primary m-2">Get All Mobiles</Link>


      {/* <div className="mt-4">
        <h2 className="text-center">Mobile Controllers</h2>
        <div className="d-flex flex-column align-items-center">
          <Link to="/mobile/all" className="btn btn-primary m-2">Fetch All Mobiles</Link>
          <Link to="/mobile/add" className="btn btn-success m-2">Add Mobiles</Link>
          <Link to="/mobile/details" className="btn btn-info m-2">Mobile Details</Link>
        </div>
      </div>

      <hr className="my-4" />

      <div>
        <h2 className="text-center">Customer Controllers</h2>
        <div className="d-flex flex-column align-items-center">
          <Link to="/customer/add" className="btn btn-warning m-2">Add Customer</Link>
          <Link to="/customer/all" className="btn btn-danger m-2">View all Customers</Link>
        </div> 
      </div>*/}
    </div>
  );
}

export default Home;
