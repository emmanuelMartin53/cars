import { Component } from "react";
import Cars from './Cars'

class Mycars extends Component {
 render () {
  return (
    <div>
      <h1>Mes voitures</h1>
      <Cars model="Citroen" color="black"/>
    </div>
  )
 }
}

export default Mycars;
