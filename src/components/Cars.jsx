import { Component } from "react";
import Wrapper from "./Wrapper";

// class Cars extends Component {
//  render () {
//   return (
//     <div>
//       <h3>Marque: Citroen</h3>
//       <p> Couleur: Noire </p>
//     </div>
//   )
//  }
// }


const Car = ({children, color}) => {

  let colorInfo = "";

    if (color) {
      colorInfo = color
    } else {
      colorInfo = "Néant"
    }

    return children && (
      <Wrapper>
        <h2>Marque: {children}</h2>
        <p>Couleur: {colorInfo}</p>
      </Wrapper>

    )
}
export default Car;
