import { BrowserRouter, Routes, Route } from "react-router-dom";
import Courses from "./pages/courses";
import Quiz from "./pages/Quiz";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}
