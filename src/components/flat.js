import React from 'react';
import './flat.css'

const black = "rgb(35, 32, 44)";
const white = "rgb(255, 255, 255)";


const Flat = props => {
  const { fl, fontColor } = props;
  const style = { backgroundImage: `url('${fl.imageUrl}')` }
  const title = fl.name + " - " + fl.price + "€"

  return (
  <div className="flat">
    <div className="flat-picture" style={style}>

    </div>
    <div className="flat-title" style={{ color: fontColor }}> {title} </div>
  </div>
)
}
export default Flat ;
