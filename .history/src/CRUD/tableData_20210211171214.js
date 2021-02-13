import React, { useState } from 'react';

const TableData = () => {

    const [data, setData] = useState({
        arr: [{id:"1", name:"Lal", mob:'8726650277'},
        {id:"2", name:"Lal", mob:'8726650277'},
        {id:"3", name:"Lal", mob:'8726650277'},
        {id:"4", name:"Lal", mob:'8726650277'}
      ],
      nam: "lalgggggggggggggg"
    })

    console.log(data.arr)
    return (
        <div>
            {
                data.arr.map((item)=>             
              
                   <li key={item.id}>
                      <h4> {item.name} </h4> 
                      <h4> {item.mob} </h4> 
                   </li>
                    
                )
            }
        </div>
    );
};

export default TableData;
