import ComponentC from "./ComponenetC";

function ComponentB(props){

    return(
        <div>

            <h1>Component B</h1>

            <ComponentC/>
            {/* <ComponentC userObj = {props.myUser}/> */}
        </div>
    )

}

export default ComponentB;