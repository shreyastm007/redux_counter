import React, { Component } from 'react'
import {connect} from "react-redux"
import {
    INCREMENT_COUNTER, 
    DECREMENT_COUNTER, 
    RESET_COUNTER
} from "../actiontypes";

class Counter extends Component {
  render() {
    const increment =() => {
        this.props.dispatch({type: INCREMENT_COUNTER});
    };

    const decrement =() => {
        this.props.dispatch({type: DECREMENT_COUNTER});
    };

    const reset =() => {
        this.props.dispatch({type: RESET_COUNTER});
    };
console.log(this.props);


    return (

      <div>
      <h1> Counter = {this.props.count}</h1>
<button onClick={increment}> Increment </button>
<button onClick={decrement}> Decrement </button>
<button onClick={reset}> Reset </button>
      </div>
    );
  }
}
const mapStateToProps =(state) => ({count:state.counterApp.counter});
export default connect(mapStateToProps)(Counter);
