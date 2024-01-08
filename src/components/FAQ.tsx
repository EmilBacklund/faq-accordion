import { QuestionsAndAnswers } from "./QuestionsAndAnswers";
import { useState } from "react";

const FAQ = () => {
  const initialOpenState = QuestionsAndAnswers.questions.map((_, index) => index === 0);
  const [openState, setOpenState] = useState(initialOpenState);

  const toggleFAQ = (index) => {
    setOpenState((prevState) => prevState.map((state, i) => (i === index ? !state : state)));
  };

  return (
    <div className="sm:px-10 sm:pt-10 px-6 pt-6 bg-white z-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl max-w-[600px] w-[calc(100%-48px)]">
      <div className="flex items-center gap-6 mb-2">
        <img className="w-10 h-10" src="/images/icon-star.svg" alt="" />
        <h1 className="text-[32px] sm:text-[56px] font-bold text-darkPurple sm:leading-[66px]">
          FAQs
        </h1>
      </div>
      <ul>
        {QuestionsAndAnswers.questions.map((question, index) => {
          return (
            <li className="" key={index}>
              <button
                onClick={() => {
                  toggleFAQ(index);
                }}
                className="flex justify-between items-center w-full py-6 group gap-6"
              >
                <h2 className="font-semibold sm:text-lg text-darkPurple text-left duration-150 group-hover:text-pink">
                  {question.question}
                </h2>
                {!openState[index] && <img src="/images/icon-plus.svg" alt="" />}
                {openState[index] && <img src="/images/icon-minus.svg" alt="" />}
              </button>
              <p
                className={`text-palePurple transition-all duration-300 overflow-hidden text-sm sm:text-base ${
                  openState[index] ? "max-h-[300px] sm:pb-6 pb-5 " : "max-h-0 pb-0"
                }`}
              >
                {question.answer}
              </p>
              <div className="w-full h-px bg-lightPink"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FAQ;
