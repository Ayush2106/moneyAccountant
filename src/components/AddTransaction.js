import React, { useState  , useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext);

    const [text , setText] = useState("");
    const[amount , setAmount] = useState("");

    const handletext =(e)=>{
        setText(e.target.value)
}
const handleamount = (e) =>{
    setAmount(e.target.value)
}
const onSubmit =(e) =>{
  e.preventDefault();

  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
  }
addTransaction(newTransaction);
  
}
  return (
    <div>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input 
          onChange={handletext}
          value = {text}
          type="text" placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input 
          onChange={handleamount}
          value={amount}
          type="number"  placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction