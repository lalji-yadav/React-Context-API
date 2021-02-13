import React, {useReducer} from 'react';

const initialState = {
    firstValue: 0
}
const reducer=(state, action)=> {

    switch(action.type) {
        case 'Increment':
            return state+1
        case 'Decrement': 
            return state -1;
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
            <h3> Count Value- {count}</h3>
            <button onClick={()=>dispatch(type: 'Increment')}>Increment</button>
            <button onClick={()=>dispatch(type: 'Decrement')}>Decrement</button>
            <button onClick={()=>dispatch(type: 'Reset')}>Reset</button>
        </div>
    );
};

export default Complex;
