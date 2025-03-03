import React from 'react';

class ChildClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>Child Class Component</h4>
        <p>Name: {this.props.fname} {this.props.lname}</p> 
      </div>
    );
  }
}

export default ChildClass;