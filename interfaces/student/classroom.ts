export interface ClassroomLesson {
  id: string;
  title: string;
  duration: "string";
  isCompleted: boolean;
}

export interface ClassroomCourseResource {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "ppt" | "link";
}

export interface ClassroomTutor {
  name: string;
  title: string;
  bio: string;
}

export interface ClassroomModule {
  id: string;
  title: string;
  estimatedTime: "string";
  status: "completed";
  lessons: ClassroomLesson[];
  resources: ClassroomCourseResource[];
  tutor: ClassroomTutor;
}

export interface ClassroomCourseModule {
  moduleNumber: number;
  id: string;
  title: string;
  estimatedTime: "string";
  status: "completed";
  lessons: ClassroomLesson[];
}

export interface ClassroomCourseOverview {
  title: string;
  description: string;
  tutor: { profileImage: string } & ClassroomTutor;
}

export interface ClassroomResource extends ClassroomCourseResource {
  link: string | null;
}

export interface ClassroomNote {
  content: string;
  moduleTitle: string;
  lessonTitle: string;
}

export interface ClassroomCourseNote extends ClassroomNote {
  id: string;
  createdAt: string;
}

export interface ClassroomQuestion {
  id: string;
  question: string;
  orderIndex: number;
  options: string[];
}

export interface ClassroomQuiz {
  id: string;
  totalQuestions: string;
  questions: ClassroomQuestion[];
}

export interface ClassroomAnswer {
  questionId: string;
  answer: string;
}

export interface ClassroomChangedAnswer extends ClassroomAnswer {
  answerCorrect: boolean;
}

export interface ClassroomQuizResult {
  score: number;
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  isPassed: boolean;
  message: string;
}

export interface ClassroomQuestionReview {
  questionId: string;
  question: string;
  options: string[];
  correctAnswer: string;
  userAnswer: string;
  isCorrect: boolean;
}

export interface ClassroomQuizReview {
  quizId: string;
  items: ClassroomQuestionReview[];
}
