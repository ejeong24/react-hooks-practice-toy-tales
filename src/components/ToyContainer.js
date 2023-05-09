import React, { useState, useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer() {
const [ toys, setToys ] = useState([])

  //want toys to update when fetch has been fulfilled
useEffect(() => {
  fetch('http://localhost:3001/toys')
  .then (response => response.json())
  .then (data => setToys(data))
}, []) 
  //need empty dependecy array so it only runs on mount
  //otherwise, it fetches infinitely

  return (
    <div id="toy-collection">{ /*insert here*/}</div>
  );
}

export default ToyContainer;
