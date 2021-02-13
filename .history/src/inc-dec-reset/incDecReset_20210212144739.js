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

    useReducer(reducer, InitialState)
    return (
        <div>

            <button>Increment</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    );
};

export default IncDecReset;
