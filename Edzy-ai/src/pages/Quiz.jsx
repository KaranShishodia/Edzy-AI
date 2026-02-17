import { useState } from "react";
import QuizCard from "../components/QuizCard";

export default function Quiz() {
  const quiz = {
    question: "Which hook is used for side effects in React?",
    options: ["useRef", "useEffect", "useMemo", "useState"],
    correct: "useEffect",
  };

  const [result, setResult] = useState(null);

  function handleAnswer(ans) {
    setResult(ans === quiz.correct ? "Correct" : "Wrong");
  }

  return (
    <div className="max-w-xl mx-auto">
      <QuizCard {...quiz} onAnswer={handleAnswer} />
      {result && <div className="mt-4 font-semibold">Result: {result}</div>}
    </div>
  );
}
