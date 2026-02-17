import ProgressBar from "./ProgressBar";

export default function CourseCard({ name, lessons, progress }) {
  return (
    <div className="border p-4 rounded-lg shadow-sm">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{lessons} lessons</p>
      <div className="mt-3">
        <ProgressBar percent={progress} />
      </div>
    </div>
  );
}
