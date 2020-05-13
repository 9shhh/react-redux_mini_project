/* container component
   한가지 컴포넌트만 포함 하지 않아도 됨. (다양한 컴포넌트를 포함 가능)
   비즈니스 로직을 처리해도 됨. */

import React, { Component } from "react";
import AddNumber from "../components/AddNumber";
import store from "../store";

export default class extends Component{
    render(){
        return <AddNumber onClick={(size)=>{
            store.dispatch({type:'INCREMENT', size:size});
        }}></AddNumber>
    }
}



