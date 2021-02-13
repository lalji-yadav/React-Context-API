import React, {useReducer} from 'react';

const initialState = {
    firstValue: 0
    // secondValue: 0
}
const reducer=(state, action)=> {

    switch(action.type) {
        case 'Increment':
            return {firstValue: state.firstValue + action.value}
        case 'Decrement': 
            return {firstValue: state.firstValue - action.value};
        case 'Increment2':
            return {firstValue: state.firstValue + action.value}
        case 'Decrement2': 
            return {firstValue: state.firstValue - action.value};
        case 'Reset':
            return initialState
        default:
            return state      
    }
}

const Complex = () => {
   const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h3> Count Value- {count.firstValue}</h3>
            <button onClick={()=>dispatch({type: 'Increment', value: 1})}>Increment</button>
            <button onClick={()=>dispatch({type: 'Decrement', value: 1})}>Decrement</button>

            <button onClick={()=>dispatch({type: 'Increment2', value: 10})}>Increment 10</button>
            <button onClick={()=>dispatch({type: 'Decrement2', value: 10})}>Decrement 10</button>
            <button onClick={()=>dispatch({type: 'Reset'})}>Reset</button>
           
        </div>
    );
};

export default Complex;
