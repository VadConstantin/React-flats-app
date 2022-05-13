import React from 'react';
import './flat.css'

export class Flat extends React.Component {
  render() {
    const title = this.props.fl.name + " - " + this.props.fl.price

    const style = {
      backgroundImage: `url('${this.props.fl.imageUrl}')`,


    }

    return (
      <div className="flat">
        <div className="flat-picture" style={style}>

        </div>
        <div className="flat-title"> {title} </div>
      </div>
    )
  }
}
