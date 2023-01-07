import Start from "./Components/Start";
import QuizCard from "./Components/QuizCard";
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <div className="font-varelaRound">
      <Routes>
       <Route path={"/"} element={<Start />} />
       <Route path={"quiz"} element={<QuizCard /> } />
      </Routes>
      
   
    </div>
  );
}

export default App;
