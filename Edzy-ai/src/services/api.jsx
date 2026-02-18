export async function fetchCourses() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "React Basics", lessons: 12, progress: 70 },
        { id: 2, name: "JavaScript Pro", lessons: 18, progress: 45 },
        { id: 3, name: "DSA Practice", lessons: 30, progress: 20 },
      ]);
    }, 800);
  });
}
