import React from "react";
import ReactDom from "react-dom";
//import css
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function FirstComponent() {
  return <h2>This is my first component</h2>;
}

// nested component example

function NestedComponent() {
  //this is adding two components inside div
  return (
    <div>
      <MyName />
      <Message />
    </div>
  );
}

const MyName = () => <h3>Utkarsh Mishra</h3>;
const Message = () => <h3> this is example of nested component</h3>; //inline css example in JSX

function BookStore() {
  return (
    <section>
      <Book />
      <Book />
      <Book />
      <Btn />
    </section>
  );
}
const Btn = () => <button className="btn btn-success">this is button</button>;

const Book = () => (
  <div>
    <Image />
    <Title />
    <Author />
  </div>
);
const Image = () => (
  <div>
    <img src="https://images-na.ssl-images-amazon.com/images/I/51TSW+AnklL._SY344_BO1,204,203,200_.jpg" />
  </div>
);
const Title = () => (
  <div>
    <h2>Grow your baby, not your weight</h2>
  </div>
);
const Author = () => (
  <div>
    <h3 style={{ color: "#617d98", marginTop: "1rem" }}>Durga Shakti Nagpal</h3>
  </div>
);
ReactDom.render(<BookStore />, document.getElementById("root"));
