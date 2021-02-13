import React from 'react';
import { Mycontext, Ourcontext } from './componentA'


const ComponentC = () => {
    return (
        <div>
            <Mycontext.Consumer>
                {
                    value=> {
                        return (<Ourcontext>
                            {
                                val=>{
                                    return (<h1>{val}</h1>)
                                }
                            }
                        </Ourcontext>)
                    }
                }
            </Mycontext.Consumer>
        </div>
    );
};

export default ComponentC;
