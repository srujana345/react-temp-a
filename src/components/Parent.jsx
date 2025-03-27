import React from 'react'

export default function Parent(props) {
  return (
    <div style={{backgroundColor:'pink'}}>{props.children}</div>
  )
}
