import { Component } from 'react'
import Mycars from './components/Mycars';
import './App.css'



class App extends Component {

  state = {
    title: `Mon catalogue de voitures`,
  }

  changeTitle = (event) => {
    console.log(event.target)
    this.setState({
      title: `Mon nouveau catalogue de voitures`
    })
  }

  changeParam = (title) => {
    this.setState({
      title: title // title
    })

  }

  changeViaBind = (param) => {
    this.setState({
      title: param
    })
  }

  changeViaInput = (event) => {
    // console.log(event.target)
    this.setState({
      title: event.target.value
    })
  }

  render () {
    return (
      <div className="App">
        <Mycars  title={this.state.title}/>

        <button onClick={this.changeTitle}>Changer le nom en dur</button>
        <button onClick={ () => this.changeParam(`Mon nouveau super catalogue de voitures`)}>Changer le parametre</button>
        <button onClick={this.changeViaBind.bind(this, 'Titre via bind')}>Changer le parametre via bind</button>
        <input type='text'onChange={this.changeViaInput} value={this.state.title}/>
      </div>
    );
  }
}

export default App
