

import React, { Component } from 'react'
import {PropsWithChildren} from 'react';

// type ChildProps = {
//   // nonexistent?: string,  // Optional due to ?
//   children: React.ReactNode,
// }


// If we had props besides children, we could define the normal props within
// ChildProps, and instead extend Child as
//      Component<PropsWithChildren<ChildProps>> {...}

// export default class Child extends Component<PropsWithChildren<ChildProps>> {
export default class Child extends Component<PropsWithChildren> {
  name: string = 'Child';
  render() {
    return (
      <div className="component">
        <p className="component__name">{this.name}</p>
        {/* {this.props.nonexistent ? this.props.nonexistent : ''} */}
        {this.props.children}
      </div>
    )
  }
}
