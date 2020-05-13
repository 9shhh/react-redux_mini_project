import {createStore} from 'redux';

export default createStore((state, action)=>{
    if(state === undefined){
        return {number:0};
    }

    if(action.type === 'INCREMENT'){
        // {...state} => Object.assign({},state)의 축약, 추가로 뒤에 다른 객체를 marge 할 수 있음.
        return {...state, number:state.number + action.size};
    }
    
    return state;
    
}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());