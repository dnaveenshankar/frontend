import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class FetchAllMobiles extends React.Component { 
    constructor() {
        super();
        this.state = {
            mobiles: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:8081/mobiles/all')
            .then(resp => {
                this.setState({
                    mobiles: resp.data  
                });
            })
    }

    render(){
        return(
            <div>
                <h2 style={{ textAlign: "center"}}>All Mobiles</h2>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th>Mobile ID</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Manufactured Date</th>
                            <th colSpan={3}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.mobiles.map(mobile => (
                            <tr>
                                <td>{mobile.mobileId}</td>
                                <td>{mobile.mobileName}</td>
                                <td>{mobile.price}</td>
                                <td>{mobile.mfd}</td>
                                <td><Link to={`/mobile/details/${mobile.mobileId}`} className="btn btn-primary">View</Link></td>
                                <td><Link to={`/mobile/update/${mobile.mobileId}`}className="btn btn-warning"> Edit</Link></td>
                                <td><Link to={`/mobile/delete/${mobile.mobileId}`}className="btn btn-danger"> Delete</Link></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <br/>
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        );
    }
}

export default FetchAllMobiles;
