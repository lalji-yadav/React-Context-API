import React, {useReducer} from 'react';

const initialState = 0;
const reducer=(state, action)=> {

    switch(action) {
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

const IncDecReset = () => {
   const [count, dispatch] = useReducer(reducer, initialState)
   const [countTwo, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3> Count Value- {count}</h3>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>

            <h3> Count Value Two - {countTwo}</h3>
            <button onClick={()=>dispatch('Increment')}>Increment</button>
            <button onClick={()=>dispatch('Decrement')}>Decrement</button>
            <button onClick={()=>dispatch('Reset')}>Reset</button>
        </div>
    );
};

export default IncDecReset;
