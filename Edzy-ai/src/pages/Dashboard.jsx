import { useEffect, useState } from "react";
import StatCard from "../components/StatCard";
import { fetchCourses } from "../services/api";

export default function Dashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses().then(setCourses);
  }, []);

  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-3 gap-4">
        <StatCard title="Courses" value={courses.length} />
        <StatCard title="Completed %" value="62%" />
        <StatCard title="Active Streak" value="12 days" />
      </div>
    </div>
  );
}
