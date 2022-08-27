import React ,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";

function Transaction({transaction}) {
const {deleteTransaction} = useContext(GlobalContext);

    const sign = transaction.amount <0 ? '-' : '+';

    const handleDelete = () =>{
     deleteTransaction(transaction.id);
    }
  return (
    <div>
         <li className={transaction.amount < 0 ?"minus" : 'plus'}>
        {transaction.text}  Cash <span>{sign}${Math.abs(transaction.amount)}</span>
        <button
        onClick={handleDelete}
        className="delete-btn">x</button>
        </li> 
    </div>
  )
}

export default Transaction