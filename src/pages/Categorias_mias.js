import React, { useState } from "react";
import '../components/bootstrap.css'
// import MockData from '../MOCK_DATA.json'





function Categorias() {
	
  const [data, setdata] = useState(MockData)
  const [order, setorder] = useState("ASC")
  
  const sorting = (col)=>{
    if (order === "ASC"){
      const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...data].sort((a,b)=>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };
  const numerSorting = (col)=>{
    
    if (order === "ASC"){
      const sorted = [...data].sort((a,b)=>
        a[col] > b[col] ? 1 : 1
      );
      setdata(sorted);
      setorder("DSC");
    }
    if (order === "DSC"){
      const sorted = [...data].sort((a,b)=>
        a[col] < b[col] ? 1 : -1
      );
      setdata(sorted);
      setorder("ASC");
    }
  };

  
  return (
    <div className='categorias' >
      <form >
    <table class="table table-dark table-bordered">
        <thead>
            <tr> 
                <th scope="col" class="w-10 p-3 px-2 col-2" >ID 
            </th>

                <th scope="col" class="w-10 p-3 px-2 col-4" onClick={() => sorting("nombre") } > CATEGORIAS                  
            <button class="btn btn-light dropdown-toggle px-2 offset-md-1" data-sort="none"> <i class="fa fa-sort"> </i> </button>	
            </th>

                <th scope="col" class="w-10 p-3 px-2 col-4 " onClick={() => numerSorting("cantidad")} >CANTIDAD
            <button class="btn btn-light dropdown-toggle px-2 offset-md-1 "  data-sort="none"> <i class="fa fa-sort "> </i> </button>	
            </th>

            <th scope="col" class="w-10 p-3 px-2 col- " > Acciones
            
             </th>
            </tr>
        </thead>
        <tbody>

      {data.map((d)=>(

        <tr key={d.id} > 
        <th scope="row" class="px-1">{d.id}</th>
        <td>
          {d.nombre}
          <br />
          <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
        ></input>
        </td>
        <th scope="row">{d.cantidad}
        <br />
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
        ></input>        
        </th>
        <th scope="row"> 
          <button type="button" class="btn btn-warning px-2 offset-md-2 "> <i class="fa-solid fa-pen-to-square"></i> </button>
          <button type="button" class="btn btn-danger px-2 offset-md-2 "><i class="fa-solid fa-ban"></i></button>
        </th>
        </tr>

        

      ))}
        </tbody>
      </table> 
      </form>
        
</div>
  )
}

export default Categorias