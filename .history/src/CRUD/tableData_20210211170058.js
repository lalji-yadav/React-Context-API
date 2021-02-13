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

    console.log(data.arr)
    return (
        <div>
            {
                data.map(item=>
                    <ul>
                        <li>{item.name}</li>
                    </ul>
                )
            }
        </div>
    );
};

export default TableData;
