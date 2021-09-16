import React, { Component } from "react";
import "./App.css";

let a = "";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { massive: ["dklkdf1"] };
    this.handleClick = this.handleClick.bind(this);
    this.handleValue = this.handleValue.bind(this);
  }

  handleValue = (event) => {
    this.setState(({ massive }) => {
      const newValue = event.target.value;
      // return {massive: [...massive,newValue]} ;
      console.log("on change ", newValue);

      a = newValue;
      //console.log("on change a ", a)
      return a;
    });
  };

  handleClick = () => {
    this.setState((massive) => {
      const res = a;
      console.log("on button", res);

      return { massive: [...massive, res] };
    });
  };

  /* 
press() {

  var className =(this.state.class==="off") ? "on": "off"; 
  this.setState({class:className});
    
*/

  render() {
    return (
      <>
        <ul>
          {this.state.massive.map((item, index) => (
            <li key={index.toString()}>
              {item} <button>Сделать зачеркнутым </button>
            </li>
          ))}
        </ul>
        <input onChange={this.handleValue} />
        <br />
        <button onClick={this.handleClick}>Добавить элемент </button>
        <br />
        <button>Удалить последний элемент </button>
      </>
    );
  }
}
export default App;
