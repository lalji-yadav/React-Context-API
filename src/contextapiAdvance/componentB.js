import React,{useContext} from 'react';
import ComponentC from "./componentC";
import { Mycontext, Ourcontext } from './componentA'


const ComponentB = () => {
    const Com = useContext(Mycontext)
    const Our = useContext(Ourcontext)
    return (
        <div>
            <ComponentC />

            {Com} ------- {Our}
        </div>
    );
};

export default ComponentB;
