import React from 'react';
import { Mycontext, Ourcontext } from './componentA'


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
