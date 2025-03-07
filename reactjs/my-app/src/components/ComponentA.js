import ComponentB from "./ComponentB";

function ComponentA(props){

    return(
        <div>

            <h1>Component A</h1>

            <ComponentB/>
            {/* <ComponentB myUser = {props.user}/> */}
        </div>
    )

}

export default ComponentA;