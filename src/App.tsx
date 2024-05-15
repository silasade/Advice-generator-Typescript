import React, { useEffect, useState } from 'react';
import Advice from './components/Advice';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

type Advice={
  slip: {id:number, advice:string}
}
function App() {
  const [advice, setAdvice]=useState<Advice>()
  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data: Advice = await response.json();
      setAdvice(data);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  console.log(advice)
  return (
    <div className="my-grid">
      <Advice handleclick={fetchAdvice} id={advice?.slip.id} advice={advice?.slip.advice}/>
    </div>
  );
}

export default App;
