function Child(props) {
  return (
    <div>
      <h1>Child Component</h1>
      <p>First Name: {props.firstName} {props.lastname}</p>
    </div>
  );
}

export default Child;
