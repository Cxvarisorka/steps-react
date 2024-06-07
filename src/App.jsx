import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

const App = () => {
  const [step, setStep] = useState(0);

  const handleNextClick = () => {
    if(step >= messages.length - 1){
      setStep(0)
    }
    else{
      setStep(curValue => curValue + 1)
    }
  }

  const handlePreviousClick = () => {
    if(step <= 0){
      setStep(messages.length - 1)
    }
    else{
      setStep(curValue => curValue - 1)
    }
  }

  return (
    <div className="steps">
      <div className="numbers">
        {
          messages.map((_, index) => {
            return (
              <div className={`${index === step ? 'active' : ''}`} key={index}>{index + 1}</div>
            )
          })
        }
      </div>

      <p className="message">
        Step {step + 1}: {messages[step]}
      </p>

      <div className="buttons">
        <button onClick={handlePreviousClick}>Previous</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  )
}

export default App
