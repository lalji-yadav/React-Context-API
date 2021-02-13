import React from 'react';
import C from "./C";

const A = (props) => {
    console.log(props)
    return (
        <div>
             <h3> Components A </h3>
              <p>{props.name}</p>
             <C nam={this.props.name} />
        </div>
    );
};

export default A;
