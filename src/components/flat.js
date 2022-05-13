import React from 'react';
import './flat.css'

const black = "rgb(35, 32, 44)"
const white = "rgb(255, 255, 255)"

export class Flat extends React.Component {

  render() {
    const title = this.props.fl.name + " - " + this.props.fl.price
    const style = { backgroundImage: `url('${this.props.fl.imageUrl}')`}

    return (
      <div className="flat">
        <div className="flat-picture" style={style}>

        </div>
        <div className="flat-title" style={{ color: this.props.fontColor}}> {title} </div>
      </div>
    )
  }
}
