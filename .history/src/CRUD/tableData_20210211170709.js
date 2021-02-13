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
                data.map((item)=>
                    
                        <li key={item.id}>{item.name}</li>
                    
                )
            }
        </div>
    );
};

export default TableData;
