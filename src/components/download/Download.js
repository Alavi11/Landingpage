import React from 'react'
import "./Download.css"
import { DiApple,DiWindows,DiAndroid } from "react-icons/di";

const linklist = [
    {
        logo:<DiApple/>,
        disc:"آیفون"
    },
    {
        logo:<DiWindows/>,
        disc:"ویندوز"
    },
    {
        logo:<DiAndroid/>,
        disc:"اندروید"
    }
]


const Download = () => {
  return <>
        <div className="download">
            <div className="download-title">
                <p>دانلود اپلیکیشن</p>
            </div>
            <p className="download-disc">برنامه های ما برای دانلود در تمامی فروشگاه ها موجود است</p>
            <div className="download-links">
                {
                    linklist.map(item=>{
                        return <>
                            <button><div>{item.logo}</div><p>{item.disc}</p></button>
                        </>

                    })
                }
            </div>
        </div>
  
  </>
  
}

export default Download