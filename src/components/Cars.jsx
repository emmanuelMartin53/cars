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


const Car = ({children, color}) => {

  const colorInfo = color ? (<p> Couleur: {color} </p>) : (<p>Couleur: Néant</p>);

  if (children) {
    return (
      <div style={{backgroundColor: 'pink', width: "400px", padding: "10px", margin: "5px auto"}}>
        <h2>Marque: {children}</h2>
        {colorInfo}
      </div>
    )
  } else {
    return (
      <div style={{backgroundColor: 'pink', width: "400px", padding: "10px", margin: "5px auto"}}>
        <h2>Cette voiture n'existe pas!</h2>
      </div>
      )
  }

}

export default Car;
