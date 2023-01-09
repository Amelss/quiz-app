import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Questions from './Questions';
export default function QuizCard() {

    const [questionData, setQuestionData] = useState([]);
    const [index, setIndex] = useState(0)

    const getQuestions = async () => {
      await axios
        .get(
          `https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple`
        )
        .then((res) => res.data)
        .then((data) => {
          setQuestionData(data.results);
          console.log(data.results);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    useEffect(() => {
      getQuestions();
    }, []);

    const handleQuestion = (e) => {
      getQuestions();
      console.log("api called");
    };

    

    return (questionData.length > 0 ? (
        <div>
     
          <Questions data={questionData[index]} />

    </div>
  ) : "Loading..."
  
  );
}
