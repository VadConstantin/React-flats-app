import React from 'react';

export class Button extends React.Component {

  render() {
    return (
      <button className="home-button" onClick={this.props.IClick}> {this.props.text}</button>
    )
  }
};
