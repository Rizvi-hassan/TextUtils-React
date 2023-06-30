import React from 'react'

export default function Alert(props) {
  let capitalise = (str) => {
    let newStr = str.toUpperCase()
    return newStr.charAt(0) + newStr.toLowerCase().slice(1);
  }
  return (
    props.alert &&
    <div className="container">
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalise(props.alert.type)}</strong>: {props.alert.msg}
        {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    </div>
  )
}

