import React from 'react'

function CustomInput(props) {
  return (
    <div>
      <input  placeholder={props.placeholder}
      value={props.value} 
      onChange={props.onChange}
      className={props.className}
      />
    </div>
  )
}

export default CustomInput
