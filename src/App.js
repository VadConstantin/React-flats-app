// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { Flat } from './components/flat'
import { Button } from './components/button'

const green = '#39D1B4';
const yellow = '#FFD712';

console.log("hello")

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      color: green
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
    const newColor = this.state.color == green ? yellow : green
    this.setState({color: newColor})
  }

  render() {
    return (
      <div className="app">
        <div className="main" style={{background: this.state.color}}>
          <Button text="change color" onClick={this.changeColor} />
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat fl={flat} />
            })}
          </div>
        </div>
        <div className="carte">
        </div>
      </div>
    );
  }
}
