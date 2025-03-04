import {useState} from 'react';

function LoginForm(){

    const[uname, setUname] = useState("");
    const[pwd, setPwd] = useState("");

    const handleUsername = (event) => {
        setUname(event.target.value);
        console.log(event.target.value);
    }
    const handlePassword = (event) => {
        setPwd(event.target.value);
        console.log(event.target.value);
    }

    const doLogin = () => {

        if(uname === "admin" && pwd === "admin"){
            alert("Welcome " +uname+ "!");}
        else{
            alert("Login Failed");
        }
    }


    return(
        <div>
            <div>
                <label>Username</label>
                <input type="text" name="uname" id="uname" value={uname} onChange={handleUsername}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="pwd" id="pwd" value={pwd} onChange={handlePassword}/>
            </div>
            <div>
                <button onClick={doLogin}>Login</button>
            </div>
        </div>
    )
}

export default LoginForm;