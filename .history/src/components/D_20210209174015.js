import React from 'react';

const D = () => {

    static contextType = ThemeContext;
    return (
        <div>
            <h3> Components D </h3>
            <Button theme={context} />;
        </div>
    );
};

export default D;
