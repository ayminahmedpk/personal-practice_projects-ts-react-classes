// The Child class will actually have to be defined inside a React.forwardRef
// function call, which will pass the props and ref to the class.
// Then, the function call should return this a live JSX element of the class.

// We put the result of this function call in a constant, and export that.

// Note that React.Component doesn't have 'ref'. React.forwardRef is basically
// how we are receiving the ref, making it available to the class and the JSX
// component, and then returning the live element with the working ref.

import React, { Component } from 'react'

type ChildProps = {
  text: string
}


const ChildWithRef = React.forwardRef<HTMLInputElement, ChildProps>((props, ref) => {
  
  // class Child extends Component { // Had there been no prop
  class Child extends Component<ChildProps> {
    name = 'Child';
  
    render() {
      return (
        <div className="component">
          <p className="component__name">{this.name}</p>
          <input ref={ref} type="text" />
          <p>Additional prop received: {this.props.text}</p> {/* For demo */}
        </div>
      )
    }
  }

  return <Child text={props.text}/>;
  // return <Child/>; // Had there been no prop
});

export default ChildWithRef;