import React from 'react';
import { Mycontext, Ourcontext } from './componentA'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> {
                        return (<h3>{value}</h3>)
                    }
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
