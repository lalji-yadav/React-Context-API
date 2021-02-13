import React from 'react';
import { Mycontext } from './componentA'
import { Ourcontext } from './componentC'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> (<)
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
