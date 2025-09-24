import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {



  state = {
    voitures: [
      { name: "Citroen", color: "black", year: 2010 },
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


  render() {
    const year = new Date().getFullYear()
    return (
      <div>
        <h1 >{this.props.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

          {/* <Car color={this.state.voitures[0].color} year={year - this.state.voitures[0].year + " ans"}>{this.state.voitures[0].name}</Car>
          <Car color={this.state.voitures[1].color} year={year - this.state.voitures[1].year + " ans"}>{this.state.voitures[1].name}</Car>
          <Car color={this.state.voitures[2].color} year={year - this.state.voitures[2].year + " ans"}>{this.state.voitures[2].name}</Car> */}

          {
            this.state.voitures.map((voiture, index) => {
              return (
                <Car name={voiture.name} key={index} color={voiture.color} year={year - voiture.year + " ans" } />
              )
            })
          }
      </div>

    )
  }
}

export default Mycars;
