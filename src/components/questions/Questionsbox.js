import React,{ useState } from 'react'
import { AiOutlineMinus } from "react-icons/ai";
import {BsPlus } from "react-icons/bs";

const Questionsbox = ({id,title , ans}) => {

    const [showeans,setShoweans] = useState(false);

    return <>
        <div className="question-box">
            <div className="question-box-title">
                <h2>{title}</h2>
                <div className="borderplus" onClick={()=>setShoweans(!showeans)}>
                    {
                        showeans ? <AiOutlineMinus color="red"/> : <BsPlus/>
                    }
                
                </div>
            </div>
            {
                showeans && <p>{ans}</p>
            }
        </div>
</>
}

export default Questionsbox 