import React from 'react'
import "./Questions.css"
import { BsJournals} from "react-icons/bs";
import Questionsbox from './Questionsbox';


const questionslist=[
    {
        id:1,
        question:"چرا از پیام رسان شما استفاده کنم ؟ ",
        ans:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
    },
    {
        id:2,
        question:"چجوری باید با اپلیکیشن شما کار کنم ؟",
        ans:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
    },
    {
        id:3,
        question:"آیا بازپرداخت دارید ؟",
        ans:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ"
    }
]

const Questions = () => {
    
  return <>
        <div className="questions">
            <BsJournals size={30} color={"orangeRed"}/>
            <h1>سوالات متداول</h1>
            <div  className="questions-title">
            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
            </div>
            <div className="questions-box">
                {
                    questionslist.map(item=><Questionsbox id={item.id} ans={item.ans} title={item.question} />)
                }
            </div>
        </div>
  </>
}

export default Questions