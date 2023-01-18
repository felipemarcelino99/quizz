import React from 'react'
import { useContext } from 'react';
import { QuizContext } from '../../context/quiz/quiz';
import Options from '../Options';

import './Questions.css'

const index = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestion = quizState.questions[quizState.currentQuestion];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER", 
      payload: {answer: currentQuestion.answer, option},
    });
  };

  return (
    <div id='question'>
      <p>Pergunta de {quizState.currentQuestion + 1} a {quizState.questions.length}</p>
      <h2>{currentQuestion.question}</h2>
      <div id="option-container">
          {currentQuestion.options.map((option) => (
            <Options 
              option={option}
              key={option}
              answer={currentQuestion.answer}
              selectOption = {()=>onSelectOption(option)}
            />
          ))}
      </div>
      {quizState.answerSelected && (
          <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})}>Continuar</button>
      )}
    </div>
  )
}

export default index