import React, {useReducer} from 'react';

const InitialState = 0;
const reducer=()=> {

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
