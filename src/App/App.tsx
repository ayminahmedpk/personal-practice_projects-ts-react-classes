import React from "react";

import Parent from "../Lessons/01-core-react-basics/03-children-outside-jsx/Parent";
// import Grandparent from "../Lessons/02-other-features/02-portals/02-portals-and-rerendering/Grandparent";

import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Parent/>
      </>
    )
  }
}