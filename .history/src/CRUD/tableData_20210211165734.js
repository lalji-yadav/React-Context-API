import React, { useState } from 'react';

const TableData = () => {

    const [data, setData] = useState({
        arr: [{name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'},
        {name:"Lal", mob:'8726650277'}
      ],
      nam: "lalgggggggggggggg"
    })

    console.log(data.nam)
    return (
        <div>
            <p>{data.nam}</p>
            <p> lallllllllllllllllll </p>
        </div>
    );
};

export default TableData;
