import React from 'react'
import "./Feacher.css"
import { BsFillBookmarkStarFill ,BsHexagon } from "react-icons/bs";
import { FaAccessibleIcon ,FaUserFriends,FaConnectdevelop  } from "react-icons/fa";
import { CiDatabase } from "react-icons/ci";

const featureslist = [
    {
        icone:<FaAccessibleIcon/>,
        title:"برای شما طراحی شده",
        disc:"با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اس"
    },
    {
        icone:<CiDatabase/>,
        title:"تاریخچه خود را نگاه دارید",
        disc:"با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اس"
    },
    {
        icone:<FaUserFriends/>,
        title:"در ارتباط باشید",
        disc:"با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اس"
    },
    {
        icone:<FaConnectdevelop/>,
        title:"کنترل را به دست گرفتن",
        disc:"با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک اس"
    }
]

const Feature = () => {
  return <>
    <div className="features">
        <div className="features-title">
            <BsFillBookmarkStarFill size={30} color={"orangeRed"}/>
            <h1>ویژگی های اصلی</h1>
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>
        </div>
        <div className="features-body">
            <div className="features-body-right">
                <img src="./img/mb.jpg"/>
            </div>
            <div className="features-body-left">
                {
                    featureslist.map(item=>{
                        return <>
                            <div className="features-body-left-box">
                                <div className="logo-box">
                                    <BsHexagon className="hexagon"/>
                                    <div className="iner-icone">{item.icone}</div>
                                </div>
                                <div className="disc-box">
                                    <h2>{item.title}</h2>
                                    <p style={{fontSize:"12px",marginTop:"5px"}}>{item.disc}</p>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>

    </div>
  </>
}

export default Feature