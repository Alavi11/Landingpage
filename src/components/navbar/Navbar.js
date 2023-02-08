import React, { useState } from 'react'
import "./Navbar.css"

import {BsFillEmojiSunglassesFill } from "react-icons/bs";
import { AiFillFire ,AiOutlineMenu } from "react-icons/ai";
import { FiX } from "react-icons/fi";

const Navbar = () => {

  const [showmenu,setShowmenu] = useState(false)

  const showhidemenu = () =>{
      setShowmenu(!showmenu)
  }

  return <>
        <div className="navbar">
          <div  className= {showmenu ? "menu mobile-show" : "menu mobile-hide" } >
            <ul>
              <li><a>خانه</a></li>
              <li><a>دانلود</a></li>
              <li><a>تماس با ما</a></li>
              <li><a>درباره ما</a></li>
            </ul>
          </div>
          {
            showmenu ? <FiX className="cros" onClick={showhidemenu}/>   :<AiOutlineMenu className="hambergermenu" onClick={showhidemenu}/>
          }
          <div className="logo">
            <p>M</p>
            <AiFillFire style={{"color":"red" , "fontSize":"40px","marginBottom":"9px"}}/>
            <BsFillEmojiSunglassesFill style={{"marginLeft":"6px","color":"yellow" , "fontSize":"40px","marginBottom":"10px"}}/>
            <p>B</p>
          </div>
        </div>
  </>
}

export default Navbar;