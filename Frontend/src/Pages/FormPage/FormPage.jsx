import React, { useState } from "react";
import Results from './Results';

function FormPage(props) {
    const [ results, setResults ] = useState([]);
    function onSearch() { 
        setResults()
    }
    return (
      <div>
        <Results trails={results} />
      </div>
    );
}

export default FormPage;