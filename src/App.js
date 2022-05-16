
import React from 'react';
import './App.css';
import { Flat } from './components/flat'
import { Button } from './components/button'
import  { Clock } from './components/clock'
import Counter from './components/counter'
import Questions from './components/questions'
import Pizza from './components/pizza'
import MyCart from './components/MyCart'


const dark = 'rgb(35, 32, 44)';
const white = 'rgb(255, 255, 255)';

console.log("hello")

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      color: white,
      fontColor: dark,
      buttonText: "Dark Mode"
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
    const newButtonText = this.state.buttonText === "Dark Mode" ? "Light Mode" : "Dark Mode"
    this.setState({
      color: newColor,
      fontColor: newFontColor,
      buttonText: newButtonText
    })
  }

  render() {
    return (
      <div className="app">
        <div className="main" style={{background: this.state.color}}>
          <Clock />
          <Counter />
          <Button text={this.state.buttonText} IClick={this.changeColor}/>
          <div className="search">
          </div>
          <div className="flats">
            {this.state.flats.map((flat) => {
              return <Flat flat={flat} fontColor={this.state.fontColor}/>
            })}
          </div>
          <div className='main' style={{background: this.state.color}}>
            <div style={{color: this.state.fontColor}}>
              Hello
            </div>
          </div>
        </div>
        <div className="carte">
          <Questions />
          <Pizza />
          < MyCart />

        </div>
      </div>
    );
  }
}
