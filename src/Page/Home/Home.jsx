import React,{useState} from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Card from '../../Component/Card/Card';
import style from "./Home.module.css"
function Home() {
  const[show,setShow]=useState(true)
  return (
    <div>

   



{show ? <Card />: null}
        <Fab color="primary" aria-label="add" onClick={()=>setShow(!show)} className={style.floaticon}>
  <AddIcon />
</Fab>
    </div>
  )
}

export default Home
