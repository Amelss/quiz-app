import React from "react";
import Header from "./Header";


export default function Questions({data:{question, correct_answer,incorrect_answers}}) {


    
    return (
      <div className=" bg-backgroundPurple h-screen">
        <Header />
        <div className="bg-white rounded-3xl w-96 md:w-[800px] mx-auto pb-20 pt-3  ">
          <div className="bg-colorPink bg-opacity-40 w-72 md:w-96 mx-auto rounded-lg my-20">
            <h1 className="text-center p-10">{question}</h1>
          </div>

          <div className="text-center">
            <button className="border-2 border-backgroundPurple rounded-lg p-3 w-56 mb-3 font-bold ">
              {correct_answer}
            </button>
            <br />
            <button className="border-2 border-backgroundPurple rounded-lg p-3 w-56 mb-3 font-bold">
              {incorrect_answers[0]}
            </button>
            <br />
            <button className="border-2 border-backgroundPurple rounded-lg p-3 w-56 mb-3 font-bold">
              {incorrect_answers[1]}
            </button>
            <br />
            <button className="border-2 border-backgroundPurple rounded-lg p-3 w-56 mb-3 font-bold">
              {incorrect_answers[2]}
            </button>
          </div>
        </div>
      </div>
    );
}
