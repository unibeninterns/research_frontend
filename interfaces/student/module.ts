export default interface QuizModule {
  module: number;
  topic: string;
  quizQuestions: number;
  timeLimit: number | null;
  attemptsAllowed: number;
  gradingType: "Auto" | "Manual";
  mode: "Active" | "Draft" | "Archived";
}
export interface AdminResourceModule {
    topic: string;
    subModules: {
      topic: string;
      len: number;
      date: string;
      type: string;
      detail: string;
    }[];
    locked: boolean;
  }