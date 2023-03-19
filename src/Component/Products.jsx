import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from './Navbar'
import "./Products.css"
const Products = ({detailingHandler}) => {
  const [state, setstate] = useState(true);
  const [caty, setcaty] = useState("electronics");
  const [data, setdata] = useState([]);
 
  useEffect(()=>{
  catyHandler(caty)
  console.log(caty);
  },[caty])

  async function catyHandler(ele){
    const res= await fetch(`https://fakestoreapi.com/products/category/${ele}`)
    const data=await res.json();
    setdata(data);
    setstate(!state)
    console.log(state);
  }

  return (
    <div>
      <Navbar/>
       <div className="container container1 bor">
        <div className="right right1 bor">
          <div className="caty" onClick={()=>setcaty("electronics")}>Electronics</div>
          <div className="caty" onClick={()=>setcaty("jewelery")}>Jewelery</div>
          <div className="caty" onClick={()=>setcaty("women's clothing")}>Women's Clothing</div>
          <div className="caty" onClick={()=>setcaty("men's clothing")}>Men's Clothing</div>
        </div>
        <div className="left1 bor">
          <div className="cardLink">
            {data.map((e,i)=>{

              return(
            <li key={i} onClick={()=>detailingHandler(e)}><Link to={"/Details"}>{e.title}</Link></li>)
            })}
            
          </div>
        </div>
       </div>
    </div>
  )
}

export default Products