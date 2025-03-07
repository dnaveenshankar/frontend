import { useContext } from "react";
import ComponentA from "./ComponentA";
import { myContext } from "../App";

function ComponentC(props){
    const loggedInUser = useContext(myContext);

    return(
        <div>

            <h1>Component C</h1>
            
            <p>Hello, {loggedInUser.name}</p>
            <p>Role : {loggedInUser.role}</p>

            {/* <p>Hello, {props.userObj.name}</p>
            <p>Role : {props.userObj.role}</p> */}

        </div>
    )

}

export default ComponentC;