import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import mob1 from '../assets/mobile1.jpg';

function GetAllMobiles() {

    const [mobiles, setMobiles] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/mobiles/all').then(resp => setMobiles(resp.data));
    }, [])


    return (
        <div>
            <div className='row'>
                {
                    mobiles.map(mobiles =>
                        <div className='col-sm-2 col-md-4'>
                            <div className='card' style={{ width: "300px" }}>
                                <div className='card-body'>
                                    <img src={mob1} className="card-image-top" alt='Mobile' />
                                    <h3 className='card-title' style={{ textAlign: 'center' }}>{mobiles.mobileName}</h3>
                                    <h5 className='card-text' style={{ textAlign: 'center' }}><span>&#8377;</span>{mobiles.price}</h5>
                                    <Link to={`/mobile/details/${mobiles.mobileId}`} className="stretched-link"></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default GetAllMobiles;