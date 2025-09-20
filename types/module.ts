export default interface QuizModule {
  module: number;
  topic: string;
  quizQuestions: number;
  timeLimit: number | null;
  attemptsAllowed: number;
  gradingType: "Auto" | "Manual";
  mode: "Active" | "Draft";
}
