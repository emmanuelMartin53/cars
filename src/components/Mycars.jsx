import { Component } from "react";
import Car from './Cars'

class Mycars extends Component {
 render () {
  // console.log(this)
  return (
    <div>
      <h1>{this.props.title}</h1>
      <Car children="Citroen" color="Noir"/>
      <Car children="Peugeot"/>
      <Car children="Toyota" color="Blanc"/>
    </div>
  )
 }
}

export default Mycars;
