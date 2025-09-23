import { Component } from "react";

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


const Cars = ({model, color }) => {
  return (
    <div>
      <h3>Marque: {model} </h3>
      <p> Couleur: {color} </p>
    </div>
  )
}

export default Cars;
