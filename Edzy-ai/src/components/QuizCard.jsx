export default function QuizCard({ question, options, onAnswer }) {
  return (
    <div className="p-5 border rounded-xl shadow-sm">
      <h2 className="font-semibold mb-4">{question}</h2>

      <div className="grid gap-3">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onAnswer(opt)}
            className="border rounded-lg p-2 hover:bg-gray-100"
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  );
}
