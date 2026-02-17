export default function StatCard({ title, value, icon }) {
  return (
    <div className="p-4 rounded-xl shadow bg-white">
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-bold mt-2">{value}</div>
      <div className="mt-2 text-gray-400">{icon}</div>
    </div>
  );
}
