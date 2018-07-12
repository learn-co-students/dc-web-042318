import React from 'react'
import Tier3 from './Tier3'

const Tier2 = (props) => (
  <div className="tier2" onClick={props.handleClick} style={{backgroundColor: props.color, color: props.color}}>
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
    <Tier3 handleClick={props.handleChildClick} color={props.childColor} />
  </div>
)

export default Tier2
