import React, {Component} from 'react';
import DisplayNumber from '../components/DisplayNumber';
import store from "../store";

export default class extends Component{
    constructor(props){
        super(props);
    
        this.state = {number : store.getState().number};
    
        store.subscribe(()=>{
          this.setState({number:store.getState().number});
        });
      }

    render(){
        return <DisplayNumber number={this.state.number}></DisplayNumber>;
    }
}