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
                console.log(resp);
                this.setState({
                    mobiles: resp.data  
                })
            });
    }

    render(){
        return(
            <div>
                <h2>Fetch All Mobiles</h2>
                {
                    this.state.mobiles.map(mobile => <div>
                        <p>{mobile.mobileId} {mobile.mobileName} {mobile.price} {mobile.mfd} 
                        <Link to={`/mobile/details/${mobile.mobileId}`}>View</Link>&nbsp;&nbsp;
                        <Link to ={`/mobile/update/${mobile.mobileId}`}>Edit</Link>&nbsp;&nbsp;
                        <Link to ={`/mobile/delete/${mobile.mobileId}`}>Delete</Link>&nbsp;&nbsp;</p>
                        </div>)
                }
                <Link to="/"><button>Back to Home</button></Link>
            </div>
        );
    }
}

export default FetchAllMobiles;
