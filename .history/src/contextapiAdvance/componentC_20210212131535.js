import React from 'react';
import { Mycontext, Ourcontext } from './componentA'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> {
                        (<Ourcontext.Consumer>
                            {
                                val=>{
                                    (<h1> {value} {val}</h1>)
                                }
                            }
                        </Ourcontext.Consumer>)
                    }
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
