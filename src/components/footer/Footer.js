import React from 'react'
import "./Footer.css"
import {BsFillEmojiSunglassesFill } from "react-icons/bs";
import { AiFillFire } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { ImPhone } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { DiChrome } from "react-icons/di";

const Footer = () => {
  return <>
    <div className="footer">
        <div className="footer-box">
            <div className="usefull-link">
                <h2>لینک های مفید</h2>
                <ul>
                    <li><a>پشتیبانی</a></li>
                    <li><a>درباره ما</a></li>
                    <li><a>آموزش</a></li>
                    <li><a>هاستینگ</a></li>
                    <li><a>پیام رسان</a></li>
                </ul>
            </div>
            <div className="supports usefull-link">
                <h2>پشتیبانی</h2>
                <ul>
                    <li><a>پشتیبانی</a></li>
                    <li><a>درباره ما</a></li>
                    <li><a>آموزش</a></li>
                    <li><a>هاستینگ</a></li>
                    <li><a>پیام رسان</a></li>
                </ul>
            </div>
            <div className="contact-us usefull-link">
                <h2>ارتباط با ما</h2>
                <ul>
                    <li><a><CiLocationOn size={15} style={{marginLeft:"5px"}} />آدرس :‌قم خیابان اول</a></li>
                    <li><a><ImPhone size={15} style={{marginLeft:"5px"}}/>تلفن : 09934156323</a></li>
                    <li><a><HiOutlineMail size={15} style={{marginLeft:"5px"}}/>جیمیل : e.alavi1380@gmail.com</a></li>
                    <li><a><DiChrome size={15} style={{marginLeft:"5px"}}/>وب سایت : </a></li>
                </ul>
            </div>
            <div className="logo">
                <p>M</p>
                <AiFillFire style={{"color":"red" , "fontSize":"40px","marginBottom":"9px"}}/>
                <BsFillEmojiSunglassesFill style={{"marginLeft":"6px","color":"yellow" , "fontSize":"40px","marginBottom":"10px"}}/>
                <p>B</p>
            </div>
        </div>
    </div>
  </>
}

export default Footer