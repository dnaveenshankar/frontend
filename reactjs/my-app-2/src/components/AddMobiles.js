import { useState } from 'react';
import axios from 'axios';

function AddMobiles() {
    const [mobile, setMobile] = useState({
        mobileName: "",
        price: "",
        mfd: "",
        companyName: ""
    });

    const handleChange = (event) => {
        setMobile({ ...mobile, [event.target.name]: event.target.value });
    };

    const AddMobiles = () => {
        axios.post('http://localhost:8081/mobiles/save', mobile).then(resp => {
            setMobile({ mobileName: "", price: "", mfd: "", companyName: "" });
        });
    };

    return (
        <div>
            <h2>Add a Mobile</h2>
            <div>
                <label>Mobile Name:</label>
                <input type="text" name="mobileName" value={mobile.mobileName} onChange={handleChange} required />
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={mobile.price} onChange={handleChange} required />
            </div>
            <div>
                <label>Manufacturing Date:</label>
                <input type="date" name="mfd" value={mobile.mfd} onChange={handleChange} required />
            </div>
            <div>
                <label>Company Name:</label>
                <input type="text" name="companyName" value={mobile.companyName} onChange={handleChange} required />
            </div>
            <button onClick={AddMobiles}>Add Mobile</button>
        </div>
    );
}

export default AddMobiles;