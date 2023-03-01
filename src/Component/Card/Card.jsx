import React, { useState,useEffect } from "react";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import style from "./Card.module.css";
import CustomInput from "../../Atom/CustomInput/CustomInput";
import CustomButton from "../../Atom/CustomButton/CustomButton";
import { nanoid } from "nanoid";
function Card() {
  let localData= JSON.parse(localStorage.getItem("userlist"))||[]
  const [id, setId] = useState("");

  const [mobile, setMobile] = useState("");
  const [orderdetails, setOrderDetails] = useState("");
  const [pickLocation, setPickLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [userData, setUserData] = useState([]);
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const [show4, setShow4] = useState(false);
  const [show5, setShow5] = useState(false);
  const [show6, setShow6] = useState(true);
  const [show7, setShow7] = useState(false);


function handlerefresh(){
  setShow(false);
  setShow1(false);
  setShow2(false);
  setShow3(false);
  setShow4(false);
  setShow5(false);
  setShow6(true);
  setShow7(false);
 
}

  function handleorderStatus() {
    setShow(true);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
  }
  function placeyourorder() {
    setShow(false);
    setShow1(true);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(false);
  }
  function knowyourstatus() {
      
      let localData = JSON.parse(localStorage.getItem("userlist"));
      let newData = localData.filter((x)=> x.id.includes(id) )
      setUserData(newData)
      console.log(newData)
    setShow6(false)
    setShow7(true)
  }

  function handleNext1() {
    setShow(false);
    setShow1(false);
    setShow2(true);
    setShow3(false);
    setShow4(false);
    setShow5(false);
  }
  function handleNext2() {
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(true);
    setShow4(false);
    setShow5(false);
  }
  function handleNext3() {
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(true);
    setShow5(false);
  }
  function handlesubmiteform() {

if ( 
mobile.length===0 &&
pickLocation.length===0 &&
dropLocation.length===0 &&
orderdetails.length===0 ) return;

    // console.log(dropLocation)
    
    let data = {
      id: nanoid(6),
      status:"pending",
      mobile,
      pickLocation,
      dropLocation,
      orderdetails,
    };
    
 


    let olddata = localStorage.getItem("userlist");
    if (olddata == null) {
      olddata = [];
      olddata.unshift(data);
      localStorage.setItem("userlist", JSON.stringify(olddata));
    } else {
      let oldArr = JSON.parse(olddata);
      oldArr.unshift(data);
      localStorage.setItem("userlist", JSON.stringify(oldArr));
    }
    setMobile("")
    setPickLocation("")
    setDropLocation("")
    setOrderDetails("")
    setShow(false);
    setShow1(false);
    setShow2(false);
    setShow3(false);
    setShow4(false);
    setShow5(true);
  
  }

  return (
    <div className={style.main}>
      <div className={style.header}>
        <ChildCareIcon style={{ fontSize: "70px" }}  onClick={handlerefresh}/>
        <div className={style.txt}>
          <h2>EverdayMeal</h2>
          <h4>Ask your doubts Here :</h4>
        </div>
      </div>
      <div className={style.innercontainer1}></div>
     {show6 ? <div className={style.innercontainer2}>
        <p>welcome to our food court </p>
        <h3 onClick={handleorderStatus}>know your order status</h3>
        <h3 onClick={placeyourorder}>place your order</h3>
      </div> : <> </>}

{show7 ?<>  <h4>thanks for order :-</h4>
    <h4>{`your order status is :- ${userData[0].status}`}</h4></> : <></>}

      <div className={style.innercontainer3}>
        {show ? (
          <div className={style.showinput}>
            <CustomInput
              placeholder="id"
              value={id}
              className={style.input}
              onChange={(e) => setId(e.target.value)}
            />
            <CustomButton
              onClick={knowyourstatus}
              text="Submite"
              className={style.btn}
            />
          </div>
        ) : (
          <></>
        )}
        {show1 ? (
          <div className={style.showinput}>
            <CustomInput
              placeholder="mobile no"
              value={mobile}
              className={style.input}
              onChange={(e) => setMobile(e.target.value)}
            />
            <CustomButton
              onClick={handleNext1}
              text="next"
              className={style.btn}
            />
          </div>
        ) : (
          <></>
        )}

        {show2 ? (
          <div className={style.showinput}>
            <CustomInput
              placeholder="orderdetails"
              value={orderdetails}
              className={style.input}
              onChange={(e) => setOrderDetails(e.target.value)}
            />
            <CustomButton
              onClick={handleNext2}
              text="next"
              className={style.btn}
            />
          </div>
        ) : (
          <></>
        )}

        {show3 ? (
          <div className={style.showinput}>
            <CustomInput
              placeholder="pick-up Location/Address"
              value={pickLocation}
              className={style.input}
              onChange={(e) => setPickLocation(e.target.value)}
            />
            <CustomButton
              onClick={handleNext3}
              text="next"
              className={style.btn}
            />
          </div>
        ) : (
          <></>
        )}

        {show4 ? (
          <div className={style.showinput}>
            <CustomInput
              placeholder="Drop Location/Address"
              value={dropLocation}
              className={style.input}
              onChange={(e) => setDropLocation(e.target.value)}
            />
            <CustomButton
              onClick={handlesubmiteform}
              text="Submite"
              className={style.btn}
            />
          </div>
        ) : (
          <></>
        )}
 { show5 ? <>  <h4>thanks for order :-</h4>
    <h4>{`your order id is :- ${localData[0].id}`}</h4></> :<></>}

      </div>
    </div>
  );
}

export default Card;
