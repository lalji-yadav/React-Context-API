import React from 'react';
import { Mycontext } from './componentA'
import { Ourcontext } from './componentC'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> (<Ourcontext.Consumer>
                        value=>(<h5>{value}</h5>)
                    </Ourcontext.Consumer>)
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
