import React from 'react';
import './404.css';
import { useHistory } from "react-router-dom";

function PageNotFound() {

    const history = useHistory()
    function handleClick(){
    history.push("/");
   }
    return (
      <section className="container">     
            <h1 >404: Page Not Found</h1>
            <button onClick={handleClick}>Quotation Table</button>
      </section>
    );
  }
  
  export default PageNotFound;