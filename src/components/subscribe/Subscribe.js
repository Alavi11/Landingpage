import React from 'react'
import "./Subscribe.css"

import { BsTwitter ,BsGoogle ,BsInstagram } from "react-icons/bs";
import { TfiFacebook } from "react-icons/tfi";

const Subscribe = () => {
  return <>
    <div className="subscribe">
        <h1 style={{color:"white"}}>حالا مشترک شوید!</h1>
        <div className="sign-in-box">
            <button>مشترک شدن</button>
            <input placeholder="...ایمیل خو را وارد کنید"></input>
        </div>
        <div className="app-box">
            <div className="app-box-link">
                <a><BsTwitter/></a>
                <a><BsGoogle/></a>
                <a><TfiFacebook/></a>
                <a><BsInstagram/></a>
            </div>
        </div>
    </div>
  </>
}

export default Subscribe;