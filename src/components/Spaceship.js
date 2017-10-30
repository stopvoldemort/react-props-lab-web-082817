// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    let colorElements = this.props.colors.map((color) => {
      return <li>{color}</li>
    })
    debugger

    return (
      <div>
        <h1>{this.props.name}</h1>
         <h3>{this.props.speed}</h3>
         <h3>{this.props.hasRockets}</h3>
         <ul>{colorElements}</ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  colors: ['black', 'red'],
  speed: "slow",
  hasRockets: false
};


export default Spaceship;
