import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditMobile() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [mobileId, setMobileId] = useState('');
    const [mname, setMname] = useState('');
    const [mprice, setMprice] = useState('');
    const [mfd, setMfd] = useState('');
    const [mcompany, setMcompany] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8081/mobiles/${id}`)
            .then(resp => {
                setMobileId(resp.data.mobileId);
                setMname(resp.data.mobileName);
                setMprice(resp.data.price);
                setMfd(resp.data.mfd);
                setMcompany(resp.data.companyName);
            });
    }, [id]);

    const handleSubmit = () => {
        const payload = {
            mobileId: mobileId,
            mobileName: mname,
            price: mprice,
            mfd: mfd,
            companyName: mcompany
        };

        axios.put("http://localhost:8081/mobiles/", payload)
            .then(resp => {
                alert("Mobile updated with id: " + resp.data.mobileId);
                navigate(-1);
            });
    };

    return (
        <div className="container mt-4">
            <h3 className="text-primary">Edit Mobile</h3>
            <div className="form-group">
                <label className="form-label">Mobile ID</label>
                <input type="text" className="form-control" value={mobileId} disabled />
            </div>
            <div className="form-group">
                <label className="form-label">Mobile Name</label>
                <input type="text" className="form-control" value={mname} onChange={(e) => setMname(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Price</label>
                <input type="text" className="form-control" value={mprice} onChange={(e) => setMprice(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Manufacture Date (MFD)</label>
                <input type="date" className="form-control" value={mfd} onChange={(e) => setMfd(e.target.value)} />
            </div>
            <div className="form-group">
                <label className="form-label">Company Name</label>
                <input type="text" className="form-control" value={mcompany} onChange={(e) => setMcompany(e.target.value)} />
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
                <button type="button" className="btn btn-danger" onClick={() => navigate(-1)}>Back</button>
            </div>
        </div>
    );
}

export default EditMobile;
