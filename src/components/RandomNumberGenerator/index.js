import React, {Component} from 'react'
import './index.css'

class RandomNumberGenerater extends Component {
  state = {
    number: 0,
  }

  generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 101)
    this.setState({number: randomNumber})
  }

  render() {
    const {number} = this.state

    return (
      <div className="random-number-generator-container">
        <h1 className="heading">Random Number</h1>
        <p className="description">
          Generate a random number in the range of 0 to 100
        </p>
        <button className="generate-button" onClick={this.generateRandomNumber}>
          Generate
        </button>
        <p className="number-display">{number}</p>
      </div>
    )
  }
}

export default RandomNumberGenerater
