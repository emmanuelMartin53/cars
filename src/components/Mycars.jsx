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

    const [citroen, peugeot, BMW] = this.state.voitures;



    return (
      <div>
        <h1 >{this.props.title}</h1>

        <button onClick={this.addTenYears}> + 10 ans</button>

          <Car
             name={citroen.name}
             color={citroen.color}
             year={citroen.year}
          />

          <Car
            name={peugeot.name}
            color={peugeot.color}
            year={peugeot.year}

          />

          <Car
            name={BMW.name}
            color={BMW.color}
            year={BMW.year}
          />



          {

            // this.state.voitures.map((voiture, index) => {
            //   return (
            //     <div key={index} >
            //       <Car name={voiture.name} key={index} color={voiture.color} year={year - voiture.year + " ans" } />
            //     </div>
            //   )
            // })
          }
      </div>

    )
  }
}

export default Mycars;
