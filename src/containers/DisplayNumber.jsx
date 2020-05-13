import DisplayNumber from '../components/DisplayNumber';
import {connect} from 'react-redux';

function mapReduxStateToReactProps(state){ // 인자로 redux state 를 받음.
  return {
    number: state.number
  }
}

// function mapReduxDispatchToReactProps(){
//     return {

//     }
// }

export default connect(mapReduxStateToReactProps)(DisplayNumber);

// 기존 react + redux code
// import React, {Component} from 'react';
// import store from "../store";

// export default class extends Component{
//     constructor(props){
//         super(props);
    
//         this.state = {number : store.getState().number};
    
//         store.subscribe(()=>{
//           this.setState({number:store.getState().number});
//         });
//       }

//     render(){
//         return <DisplayNumber number={this.state.number}></DisplayNumber>;
//     }
// }