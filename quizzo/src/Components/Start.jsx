import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Start() {

    const [questionData, setQuestionData] = useState([])
    
    const getQuestions = async () => {
        await axios.get(
          `https://opentdb.com/api.php?amount=15&category=9&difficulty=easy&type=multiple`
        )
            .then((res) => {
                setQuestionData(res.data);
            })
            .catch((err) => {
            console.log(err)
        })
    }

    useEffect(() => {
        getQuestions()
    }, [])

    const handleStart = (e) => {
        // e.preventDefault()
        getQuestions()
        console.log('api called')
    }


    return (
      
        


      <div className='bg-backgroundPurple h-screen'>
          <div className='grid place-items-center h-screen'>
              <div>
                   <div className='bg-white rounded-xl p-3 shadow-2xl border-b-4 border-colorPink'>
                        <img src="./assets/quiz-logo.png" alt="Quizzo Logo" className='w-16'/>
                  </div>
                  <h3 className='text-center text-xl mt-2 text-white tracking-wide'>Quizzo</h3>
                  <div className='text-center pt-6 '>
                     <Link to={'quiz'}><button onClick={handleStart} className='bg-colorPink text-white py-2 px-6 rounded-lg tracking-wide text-lg'>Start</button></Link> 
                  </div>
                  
              </div>
             
              
            
          </div>
         
          
    </div>
  )
}
