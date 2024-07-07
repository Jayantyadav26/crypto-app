import React, {useContext} from 'react'
import './navbar.css'
import { CoinContext } from "../../context/CoinContext";
import { Link } from "react-router-dom"
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event)=>{
      switch (event.target.value) {
        case "usd":{
          setCurrency({name: "usd", symbol:"$"});
          break;
        }  
        case "inr":{
          setCurrency({name: "inr", symbol:"₹"});
          break;
        }
        case "eur":{
          setCurrency({name: "eur", symbol:"€"});
          break;
        }
        default:{
          setCurrency({name: "inr", symbol: "$"});
          break;
        }  
      }
  }

  return (
    <div className='navbar'>
      <Link to={'/'}><h1>CryptoTracker</h1></Link>
      <ul>
       <Link to={'/'}><li>Home</li></Link> 
        <li>Feature</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
            <option value="usd">USD</option>
            <option value="inr">INR</option>
            <option value="eur">EUR</option>
        </select>
        <button>Sign up</button>
      </div>
    </div>
  )
}

export default Navbar
