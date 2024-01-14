import React from 'react'

const Toggle = ({onPressChange,pressed, children,disabled}) => {
  return (
    <button type="button" onClick={onPressChange} disabled={disabled} className={pressed? "is-active" : ""}>{children}</button>
  )
}

export default Toggle