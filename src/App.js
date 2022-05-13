// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Flat from './components/flat'
import { Button } from './components/button'

const dark = 'rgb(35, 32, 44)';
const white = 'rgb(255, 255, 255)';
const green = 'rgb(0, 175, 55)'

console.log("hello")

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      color: white,
      fontColor: dark
    };
    this.changeColor = this.changeColor.bind(this)
  }

  componentDidMount() {
    const url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json";
    fetch(url)
      .then(response => response.json())
      .then((data) => {
        console.log(data[0])
        this.setState({
          flats: data
        });
      })
  }

  changeColor() {
    const newColor = this.state.color === white ? dark : white
    const newFontColor = this.state.fontColor === dark ? white : dark
    this.setState({
      color: newColor,
      fontColor: newFontColor
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main" style={{background: this.state.color}}>
          <Button text="dark mode" onClick={this.changeColor} />
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat fl={flat} fontColor={this.state.fontColor}/>
            })}
          </div>
        </div>
        <div className="carte">
        </div>
      </div>
    );
  }
}
