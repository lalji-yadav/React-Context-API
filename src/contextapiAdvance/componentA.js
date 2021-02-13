import React from 'react';
import ComponentB from "./componentB";

export const Mycontext = React.createContext()
export const Ourcontext = React.createContext()

const ComponentA = () => {
    return (
        <div>
            <Mycontext.Provider value={'Lalji Yadav Kamasin'}>
                <Ourcontext.Provider value={'Inner text Example'}>
                  <ComponentB />
                </Ourcontext.Provider>    
            </Mycontext.Provider>
            
        </div>
    );
};

export default ComponentA;
