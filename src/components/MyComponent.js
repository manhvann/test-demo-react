// Class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "ManhMe",
    address: "HaNoi",
    age: 21,
  };

  //JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
      </div>
    );
  }
}

export default MyComponent;
