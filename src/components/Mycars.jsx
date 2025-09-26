import { Component, Fragment } from 'react'
import Car from './Cars'

class Mycars extends Component {



  state = {
    voitures: [
      { name: "Citroen", color: "black", year: 2024 },
      { name: "Peugeot", color: "red", year: 2016 },
      { name: "BMW", color: "blue", year: 2020 }
    ]
  }

  addTenYears = () => {
    const updatedState = this.state.voitures.map((voiture) => {
      return voiture.year -= 10
    })

    this.setState({
      year: updatedState
    })
  }

  getAge (year) {
    const now = new Date().getFullYear()
    const age = now - year

    // ans, an
    let frenchYearStr = "";
    if (age === 1) {
      frenchYearStr = "an";
    } else if (age > 1) {
      frenchYearStr = "ans";
    }
    return`${age} ${frenchYearStr}`
  }


  render() {

    // const [citroen, peugeot, BMW] = this.state.voitures; // destructuring

    return (
      <Fragment>
        <h1 >{this.props.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

        <table className="carsTable">
          <tr>
            <th>Marque</th>
            <th>Age</th>
            <th>Couleur</th>
          </tr>

          {
            this.state.voitures.map(({name, color, year}, index) => { // Destructuring sur object "voiture" placé en paramètre méthode .map()
              return (
                <Fragment key={index}>
                  <Car name={name} color={color} year={this.getAge(year)} />
                </Fragment>
              )
            })
          }
        </table>
      </Fragment>

    )
  }
}

export default Mycars;
