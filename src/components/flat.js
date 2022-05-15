import React from 'react';
import './flat.css'

export const Flat = props => {
  const { flat, fontColor } = props;
  const style = { backgroundImage: `url('${flat.imageUrl}')` }
  const title = flat.name + " - " + flat.price + "€"

  return (
  <div className="flat">
    <div className="flat-picture" style={style}>

    </div>
    <div className="flat-title" style={{ color: fontColor }}> {title} </div>
  </div>
)
}
