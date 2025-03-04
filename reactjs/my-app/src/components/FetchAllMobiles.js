import React from "react";
import axios from "axios";

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
                        <p>{mobile.mobileId} {mobile.mobileName} {mobile.price} {mobile.mfd}</p>
                        </div>)
                }
            </div>
        );
    }
}

export default FetchAllMobiles;
