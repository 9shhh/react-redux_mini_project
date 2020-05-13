/* container component
   한가지 컴포넌트만 포함 하지 않아도 됨. (다양한 컴포넌트를 포함 가능)
   비즈니스 로직을 처리해도 됨. */

import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";

function mapReduxDispatchToReactProps(dispatch){ // 인자로 dispatch를 받음
    return {
        onClick: (size)=>{
            dispatch({type:'INCREMENT',size:size})
        }
    }
}

export default connect(null, mapReduxDispatchToReactProps)(AddNumber);

// 기존 react + redux code
// import React, { Component } from "react";
// import store from "../store";

// export default class extends Component{
//     render(){
//         return <AddNumber onClick={(size)=>{
//             store.dispatch({type:'INCREMENT', size:size});
//         }}></AddNumber>
//     }
// }



