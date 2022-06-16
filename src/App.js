import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // var subtotal = price +casePrice;
  // const [subtotal,setSubtotal] = useState(0);
  const unitPrice = 500;
  const caseUnitPrice = 60;
  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(0);
  const [caseAmount,setCaseAmount] = useState(1);
  const [casePrice, setCasePrice] = useState(0);
  function handleClick() {
    setAmount(amount + 1);
  }
  function handleDecrese() {
    if (amount > 1) {
      setAmount(amount - 1);
    }
  }
  function handleCase() {
    setCaseAmount(caseAmount+1);
  }
  function caseDecrese(){
    if (caseAmount > 1) {
      setCaseAmount(caseAmount-1);
    }
   
  }

  useEffect(() => {
    setPrice(amount * unitPrice);
    setCasePrice(caseAmount*caseUnitPrice)
  }, [amount,caseAmount]);

  return (
    <div className="grid grid-rows-3 gap-2 ">
      <div class="grid grid-cols-5 gap-2">
        <h>iphone pro max</h>
        <button onClick={handleDecrese}>-1</button>
        <h>{amount}</h>
        <button onClick={handleClick}>+1</button>
        <h>{price}</h>
      </div>
      <div class="grid grid-cols-5 gap-2">
        <h>iphone case</h>
        <button onClick={caseDecrese}>-1</button>
        <h>{caseAmount}</h>
        <button onClick={handleCase}>+1</button>
        <h>{casePrice}</h>
      </div>
    <h>Subtotal: {price+casePrice}</h>
    </div>
  );
}

export default App;
