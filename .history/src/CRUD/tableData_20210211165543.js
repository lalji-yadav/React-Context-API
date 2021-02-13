import React, { useState } from 'react';

const TableData = () => {

    const [data, setData] = useState({
        arr: [{name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'}
      ]
    })

    console.log(data.arr.name)
    return (
        <div>
            
        </div>
    );
};

export default TableData;
