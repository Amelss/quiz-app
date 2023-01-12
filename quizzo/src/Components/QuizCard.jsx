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
          const questionData = data.results.map((question) => ({
            ...question,
            answers: [question.correct_answer, ...question.incorrect_answers].sort(() => Math.random() - 0.5)
          }))
          setQuestionData(questionData);
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
    };

    

    return (questionData.length > 0 ? (
        <div>
     
          <Questions data={questionData[index]} handleQuestion={handleQuestion} />
          
    </div>
  ) : "Loading..."
  
  );
}
