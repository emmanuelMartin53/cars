import { Component } from "react";
import Car from './Cars'
import Wrapper from "./Wrapper";
import Myheader from "./Myheader";

class Mycars extends Component {

  state = {
    cars: [
      "Citroen",
      "Peugeot",
      "Toyoya"
    ]
  }

 render () {
  // console.log(this)
  const {title, color} = this.props
  console.log(color)

  return (
    <div>
      <Wrapper>
        <Myheader myColor={color}>
            {title}
         </Myheader>
      </Wrapper>
      <Car children={this.state.cars[0]} color="Noir"/>
      <Car children={this.state.cars[1]}/>
      <Car  children={this.state.cars[2]} color="Blanc"/>
    </div>
  )
 }
}

export default Mycars;
