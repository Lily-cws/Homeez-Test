import React, {useState} from 'react';
import './input.css';
import { useHistory } from "react-router-dom";

function Input() {

  const [tableInfo, setTableInfo] = useState("");

  const history = useHistory()
  
  function handleClick(){
    history.push("/all-list");
  }
  
  function handleChange(event) {
    setTableInfo(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      const body = {x_tableinfo: tableInfo};
      const response = await fetch("http://localhost:5000/updateinformation",{
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(body) // body data type must match "Content-Type" header
      });
      console.log(response.status);

    } catch (error) {
      console.error(error.message);
        
    }
  };

  return (
    <div>
    <section className="listContainer">     
    <button className="topright" onClick={handleClick}>Show all list</button>
    </section>
    
    <section className="inputContainer">
      <h1 >Quotation Table</h1>

      <form className="formContainer" onSubmit={handleSubmit}>
          {/* <p>Enter the information here:</p> */}
          <textarea type="text" placeholder="Enter the information here" value={tableInfo} onChange={handleChange}></textarea>          
          <button>Submit</button>
      </form>

    </section>
    </div>
  );
}

export default Input;