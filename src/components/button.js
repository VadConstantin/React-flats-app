import React from 'react';
import './button.css';

export class Button extends React.Component {

  render() {
    return (
      <div>
      <button className="home-button" onClick={this.props.IClick}> {this.props.text}</button>
      <h5>{this.props.surname}</h5>
      </div>
    )
  }
};
