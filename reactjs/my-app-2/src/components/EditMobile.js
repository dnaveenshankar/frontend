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
        axios.get('http://localhost:8081/mobiles/' + id)
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
        }

        axios.put("http://localhost:8081/mobiles/", payload).then(resp => {
            alert("Mobile updated with id: " + resp.data.mobileId);
            // navigate('/mobile/all');
            navigate(-1);
        }
        );
    };


    return (
        <div>
            <h3>Mobile Form</h3>
            <div>
                <label>Id</label>
                <input type="text" name="mid" value={mobileId}
                onChange={(event) => setMobileId(event.target.value)} disabled/>
            </div>
            <div>
                <label>Name</label>
                <input type="text" name="mname" value={mname}
                    onChange={(event) => setMname(event.target.value)} />
            </div>
            <div>
                <label>Price</label>
                <input type="text" name="mprice" value={mprice}
                    onChange={(event) => setMprice(event.target.value)} />
            </div>
            <div>
                <label>MFD</label>
                <input type="date" name="mfd" value={mfd}
                    onChange={(event) => setMfd(event.target.value)} />
            </div>
            <div>
                <label>Company Name</label>
                <input type="text" name="mcompany" value={mcompany}
                    onChange={(event) => setMcompany(event.target.value)} />
            </div>

            <input type="submit" onClick={handleSubmit} />
        </div>
    );
}

export default EditMobile;
