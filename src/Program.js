import React, { Component } from 'react';
import './program.css';

class Program extends Component {
    render() {
      return (
<div className = "Program"  style={{backgroundColor:this.props.color}}>
<h1 className= "Program-title"> {this.props.title} </h1>
<center className= "Program-content"> {this.props.content} </center>
<button className="Program-button"> Savoir Plus</button>
</div>
      )}
}
export default Program;