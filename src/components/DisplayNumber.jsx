import React, {Component} from 'react';

export default class DisplayNumber extends Component{
    render(){
      return (
        <div>
          <h1>
            Add Number Root
          </h1>
          <input type="text" value="0" readOnly></input>
        </div>
      )
    }
  }