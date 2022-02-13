import React from 'react'
import ReactDom from 'react-dom'

function FirstComponent(){
  return <h2>This is my first component</h2>
}

ReactDom.render(<FirstComponent/>,document.getElementById("root"))
