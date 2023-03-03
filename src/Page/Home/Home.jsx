import React, { useState,useEffect } from "react";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Card from "../../Component/Card/Card";
import style from "./Home.module.css";
import CustomButton from "../../Atom/CustomButton/CustomButton";
function Home() {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [data, setData] = useState([]);

useEffect(()=>{
  let localData= JSON.parse(localStorage.getItem("userlist"))||[]
  setData(localData)
},[data])

function handleOrder(x){
  if(data.id===x){
    setShow1(!show)
    data.status("ready")
    setData([...data])
    localStorage.setItem(JSON.stringify([...data]))
    
  }

}
  return (
    <div>
 <div className={style.header}>
{data.map((x)=>{return(
  <div key={x.id} className={style.orders}>

<h2>{x.id}</h2>
<h2>{x.status}</h2>
<h2>{x.orderdetails}</h2>
<h2>{x.pickLocation}</h2>
<h2>{x.dropLocation}</h2>

<CustomButton text={show1 ? 'Ready' : "pending"}  onClick={()=>handleOrder(x.id)} />

  </div>
)})}
 </div>
      {show ? (
        <div className={style.card}>
      
          <Card />
        </div>
      ) : null}
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => setShow(!show)}
        className={style.floaticon}
      >
        <AddIcon />
      </Fab>
    </div>
  );
}

export default Home;
