import React from 'react'
import ReactDom from 'react-dom'

function FirstComponent(){
  return <h2>This is my first component</h2>
}


// nested component example

function NestedComponent(){   //this is adding two components inside div
  return (<div>
          <MyName/>
          <Message/>
          </div>)
}

const MyName=()=> <h3>Utkarsh Mishra</h3>
const Message=()=> <h3> this is example of nested component</h3>
ReactDom.render(<section><FirstComponent/><NestedComponent/></section>,document.getElementById("root"))
