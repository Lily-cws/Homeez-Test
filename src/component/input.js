import React, {useState} from 'react';
import './input.css';
import { useHistory } from "react-router-dom";

function Input() {

  const [tableInfo, setTableInfo] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [characterCount, setCharacterCount] = useState(0);

  const history = useHistory()
  //redirect to show list of information
  function handleClick(){
    history.push("/all-list");
  }
  
  function handleChange(event) {
    setTableInfo(event.target.value);
    setSuccess(false)
    setError(false)
    setCharacterCount(event.target.value.length)
  }

  function handleFocus() {
    if (success){
      setSuccess(false)
    }
    if (error){
      setError(false)
    }
  }

  //
  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true) ;
    setSuccess(false);
    setError(false)
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
      if(response.status === 200){
        setSuccess(true);
      } else{
        setError(true)
      }
      
      setIsSubmitted(false) ;
      setTableInfo('');
    } catch (error) {
      console.error(error.message);
      setIsSubmitted(false) ;
      setSuccess(false);
      setError(true);
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
        {success ? <p>Quotation is submitted</p> : error ? <p>Quotation is not submitted</p> : <p></p>}
          <textarea type="text" placeholder="Enter the information here" value={tableInfo} onChange={handleChange} onFocus={handleFocus} disabled={isSubmitted} maxLength="255"></textarea>
          <p>{characterCount}/255</p>          
          <button disabled={isSubmitted || tableInfo === ""}>Submit</button>
      </form>

    </section>
    </div>
  );
}

export default Input;