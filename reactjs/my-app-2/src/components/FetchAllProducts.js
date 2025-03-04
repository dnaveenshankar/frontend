import { useEffect, useState } from 'react';
import axios from 'axios';

function FetchAllProducts(){

    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
            axios.get('http://localhost:8081/mobiles/all').then(resp => setMobiles(resp.data));
    })


    return(
        <div>
            <h1>All Mobiles</h1>

            {
                mobiles.map( mobile => <div>
                    <p>{mobile.mobileId} {mobile.mobileName} {mobile.price} {mobile.mfd}</p>
                </div>)
            }
        </div>
    )
}

export default FetchAllProducts;