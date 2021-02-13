import React from 'react';
import ComponentB from "./componentB";

export const Mycontext = React.createContext()
export const Ourcontext = React.createContext()

const ComponentA = () => {
    return (
        <div>
            <Mycontext.Provider>
                  <ComponentB />
            </Mycontext.Provider>
            
        </div>
    );
};

export default ComponentA;
