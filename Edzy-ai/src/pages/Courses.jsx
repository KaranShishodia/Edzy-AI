import { useEffect, useState } from "react";
import { fetchCourses } from "../services/api";
import CourseCard from "../components/CourseCard";

export default function Courses() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCourses().then(setData);
  }, []);

  return (
    <div className="grid gap-4">
      {data.map((c) => (
        <CourseCard key={c.id} {...c} />
      ))}
    </div>
  );
}
