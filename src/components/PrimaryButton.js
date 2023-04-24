import React from 'react'
import './PrimaryButton.css'

function PrimaryButton({disabled,children,onClick,style,otherStyle,type}) {
  return (
    <div style={style} className="outer-button-container">
      <button type={type} disabled={disabled} onClick={onClick} style={otherStyle}>{children}</button>
    </div>
  )
}

export default PrimaryButton
