import React from 'react';
import './clock.css'

export class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ date: new Date()})
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div className="clock">{this.state.date.toLocaleTimeString()}</div>
    )
  }

}
