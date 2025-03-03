import React from 'react';
import ChildClass from './ChildClass';

class ParentClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Rohit",
      lastName: "Sharma"
    };
  }

  render() {
    return (
      <div>
        <h3>Parent Class Component</h3>
        <ChildClass fname={this.state.firstName} lname={this.state.lastName} />
      </div>
    );
  }
}

export default ParentClass;