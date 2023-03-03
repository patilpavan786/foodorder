import React from 'react'

function CustomButton(props) {
  return (
    <div>
  <button onClick={props.onClick} className={props.className} disabled={props.disabled}
  >{props.text}</button >
    </div>
  )
}

export default CustomButton
