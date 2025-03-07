import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/post/all"className="btn btn-primary">Post Services</Link><br/><br/><br/>
            <Link to="/comment/all" className="btn btn-info">Comment Services</Link> <br/><br/><br/>
            <Link to="/product/all" className="btn btn-secondary">Product Services</Link>
        </div>
    );
}

export default Home;
