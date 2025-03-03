import Child from "../Child";

function Parent() {
  let firstName = "John";
  let lastname = "Doe";
  
  return (
    <div>
      <h1>Parent Component</h1>
      <Child firstName={firstName} lastname={lastname} />
    </div>
  );
}

export default Parent;
