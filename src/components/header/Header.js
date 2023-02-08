import React from 'react'
import "./Header.css"
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return <>
    <div className="headers">
        <div className="headers_right">
          <div className="box-right">
            <div className="title">
              <h1>به سوی آینده ای روشن تر</h1>
              <h2>برای زندگی بهتر</h2>
              <h3>مدرن تر</h3>
            </div>
            <div className="disc">
              <p>لورم ایپسوم متن ساختگی با تولید سادگی </p>
            </div>
            <div className="btn">
              <button className="btn1"><a>چگونه کار میکند</a></button>
              <button className="btn2"><a>چگونه شروع کنیم</a></button>
            </div>
          </div>
        </div>
        <div className="headers_left">
          <div className="img-box">
            <img src="./img/mb.jpg" className="img1"/>
            <img src="./img/mb2.jpg" className="img2"/>
          </div>
        </div>
    </div>
    <div className="mouse-box">
        <BsMouse className="mouse"/>
    </div>
    
  </>
}

export default Header