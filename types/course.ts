export default interface Course {
  course: string;
  modules: number;
  quizzes: number;
  avgScore: string;
  completion: string;
  totalQuestions: number;
  mode: "Published" | "Archived" | "Draft";
}
