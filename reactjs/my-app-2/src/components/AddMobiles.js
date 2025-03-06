import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function MobileForm() {

    const [mname, setMname] = useState('');
    const [mprice, setMprice] = useState('');
    const [mfd, setMfd] = useState('');
    const [mcompany, setMcompany] = useState('');

    const Navigate = useNavigate();

    const handleSubmit = () => {

        const payload = {
            mobileName: mname,
            price: mprice,
            mfd: mfd,
            companyName: mcompany
        }

        axios.post("http://localhost:8081/mobiles/save", payload)
            .then(resp => {
                alert("Mobile saved with id: " + resp.data.mobileId);
                resetForm();
            }
            );
    }

    const resetForm = () => {
        setMname('');
        setMprice('');
        setMfd('');
        setMcompany('');
    }

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Mobile Form</h3>
            <form>
                <div className="form-group">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" name="mname" value={mname} onChange={(event) => setMname(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Price</label>
                    <input type="text" className="form-control" name="mprice" value={mprice} onChange={(event) => setMprice(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">MFD</label>
                    <input type="date" className="form-control" name="mfd" value={mfd} onChange={(event) => setMfd(event.target.value)} />
                </div>
                <div className="form-group">
                    <label className="form-label">Company Name</label>
                    <input type="text" className="form-control" name="mcompany" value={mcompany} onChange={(event) => setMcompany(event.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
                    <button type="button" className="btn btn-danger" onClick={() => Navigate(-1)}>Back</button>
                </div>
            </form>
        </div>
    )
}

export default MobileForm;