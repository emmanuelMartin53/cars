import { Component } from 'react'
import Car from './Cars'

class Mycars extends Component {

  noCopy = () => {
    alert("Merci de ne pas copier le texte")
  }

  addStyle = (event) => {
    console.log(event.target)
    if (event.target.classList.contains("styled")) {
      event.target.classList.remove('styled')
    } else {
      event.target.classList.add('styled')
    }
  }



  render() {
    return (
      <div>
        <h1 onMouseOver={this.addStyle}>{this.props.title}</h1>

        <p onCopy={this.noCopy}>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          <Car color="red">Ford</Car>
          <Car>Mercedes</Car>
          <Car color="green"></Car>
      </div>

    )
  }
}

export default Mycars
