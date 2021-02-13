import React from 'react';
import ComponentB from "./componentB";

export const Mycontext = React.createContext()
export const Ourcontext = React.createContext()

const ComponentA = () => {
    return (
        <div>
            <ComponentB />
        </div>
    );
};

export default ComponentA;
