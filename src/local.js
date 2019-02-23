import React, { Component } from 'react';
import './local.css';

class Local extends Component {
    render() {
      return (
<div className = "local" style={{width:"30%", margin:"3%"}}>
<img src={this.props.image} style={{width:"100%" , height:"70%"}}/> 
<center> {this.props.content} </center>
</div>
      )}
}
export default Local;