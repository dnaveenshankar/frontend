function Header() {

    const firstName = "Raj";
    const lastName = "Kumar";
  
    return (
      <div>
        <h2>My Heading</h2>
        <b>Welcome {firstName} {lastName}</b>
        <hr />
      </div>
    );
  }
  
  export default Header;