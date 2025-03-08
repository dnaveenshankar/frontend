import { useRef } from "react";

function RegistrationForm(){

    const fname = useRef();
    const lname = useRef();
    const email = useRef();
    const mobile = useRef();

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert("Form Submitted");
        console.log(fname.current.value);
        console.log(lname.current.value);
        console.log(email.current.value);
        console.log(mobile.current.value);
    }

    return(
        <div>
            <form onClick={handleSubmit} >    
                <div>
                    <h3>Registration Form</h3>
                    <div>
                        <label>First Name</label>
                        <input type="text" name="fname" ref={fname}/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name="lname" ref={lname}/>
                    </div>
                    <div>
                        <label>Email </label>
                        <input type="email" name="mobile" ref={mobile}/>
                    </div>
                    <div>
                        <label>Mobile</label>
                        <input type="number" name="email" ref={email}/>
                    </div>
                    <div>
                        <input type = "button" value="Register"/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegistrationForm;