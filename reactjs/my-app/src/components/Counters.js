import React from 'react';

class Counters extends React.Component {
  constructor() {
    super();
    this.state = {
        counter: 0
    }

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
//   increment (){
//     this.setState({
//         counter : this.state.counter+1
//     });
//   }

//   decrement(){
//     this.setState({
//         counter : this.state.counter-1
//     });
//   }

  increment = () => {
    this.setState({
        counter : this.state.counter+1
    });
  }

  decrement = () =>{
    this.setState({
        counter : this.state.counter-1
    });
  }

  render() {
    return (
      <div>
        <h3>Counter : {this.state.counter}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <hr/>
      </div>
    );
  }
}

export default Counters;