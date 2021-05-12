import React, {useState, useEffect} from 'react';
import './list.css';
import { useHistory } from "react-router-dom";

function List() {

    const history = useHistory()
    function handleClick(){
     history.push("/");
   }

   const [getInfo, setInfo] = useState([])

   const getAllInfo = async()=>{
       try {
        const response = await fetch("http://13.229.141.110:8080/getallinformation") 
        const jsonData = await response.json();
        
        console.log(jsonData);
        setInfo(jsonData);


       } catch (error) {
           console.error(error.message)
       }
   }

   useEffect(()=>{
       getAllInfo();
   },[]);

    return (
      <div className="wrapContainer">
        <section className="listContainer">     
                <button className="topright" onClick={handleClick}>Quotation Table</button>
        </section>

        <section className="tableContainer">
            <h1 >Quotation List</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Information</th>
                    </tr>
                </thead>
                <tbody>
                    {getInfo.map(info=>(
                    <tr>
                        <td>{info.x_id}</td>
                        <td>{info.x_tableinfo}</td>
                    </tr>
                    ))}

                </tbody>
            </table>
        </section>
      </div>
    );
  }
  
  export default List;