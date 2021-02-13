import React from 'react';
import { Mycontext } from './componentA'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> (<h3>{value}</h3>)
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
