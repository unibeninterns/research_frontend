import {
  ClassroomAnswer,
  ClassroomChangedAnswer,
  ClassroomCourseModule,
  ClassroomCourseNote,
  ClassroomCourseOverview,
  ClassroomModule,
  ClassroomNote,
  ClassroomQuiz,
  ClassroomQuizResult,
  ClassroomQuizReview,
  ClassroomResource,
} from "@/interfaces/student/classroom";
import axiosClient from "@/services/axios/axios";

export const getCourse = async (courseId: string) => {
  try {
    const response = await axiosClient.get(`/api/courses/${courseId}/modules`);
    return response.data as ClassroomCourseModule[];
  } catch (e) {
    console.log(e);
  }
};

export const getModule = async (moduleId: string) => {
  try {
    const response = await axiosClient.get(`/api/modules/${moduleId}`);
    return response.data as ClassroomModule;
  } catch (e) {
    console.log(e);
  }
};

export const getCourseOverview = async (courseId: string) => {
  try {
    const response = await axiosClient.get(`/api/courses/${courseId}/modules`);
    return response.data as ClassroomCourseOverview;
  } catch (e) {
    console.log(e);
  }
};

export const getCourseResources = async (courseId: string) => {
  try {
    const response = await axiosClient.get(
      `/api/courses/${courseId}/resources`,
    );
    return response.data as ClassroomResource[];
  } catch (e) {
    console.log(e);
  }
};

export const getNotes = async () => {
  try {
    const response = await axiosClient.get("/api/courses/notes");
    return response.data as ClassroomCourseNote[];
  } catch (e) {
    console.log(e);
  }
};

export const postNote = async (note: ClassroomNote) => {
  try {
    const response = await axiosClient.post("/api/courses/notes", note);
    return response.data as ClassroomCourseNote;
  } catch (e) {
    console.log(e);
  }
};

export const putNote = async (noteId: string, note: ClassroomNote) => {
  try {
    const response = await axiosClient.put(
      `/api/courses/notes/${noteId}`,
      note,
    );
    return response.data as ClassroomCourseNote;
  } catch (e) {
    console.log(e);
  }
};

export const deleteNote = async (noteId: string) => {
  try {
    const response = await axiosClient.delete(`/api/courses/notes/${noteId}`);
    return response.status;
  } catch (e) {
    console.log(e);
  }
};

export const getLessonQuiz = async (lessonId: string) => {
  try {
    const response = await axiosClient.get(
      `/api/courses/lessons/${lessonId}/quiz`,
    );
    return response.data as ClassroomQuiz;
  } catch (e) {
    console.log(e);
  }
};

export const getAttemptId = async (quizId: string) => {
  try {
    const response = await axiosClient.post("/api/quiz-attempts", { quizId });
    return response.data as { attemptId: string };
  } catch (e) {
    console.log(e);
  }
};

export const changeAnswer = async (
  attemptId: string,
  changedAnswerData: ClassroomChangedAnswer,
) => {
  try {
    const response = await axiosClient.put(
      `/api/quiz-attempts/${attemptId}/answer`,
      { ...changedAnswerData },
    );
    return response.data as { saved: boolean };
  } catch (e) {
    console.log(e);
  }
};

export const submitAnswers = async (
  attemptId: string,
  answers: ClassroomAnswer,
) => {
  try {
    const response = await axiosClient.put(
      `/api/quiz-attempts/${attemptId}/submit`,
      { answers },
    );
    return response.data as ClassroomQuizResult;
  } catch (e) {
    console.log(e);
  }
};

export const getQuizReviewData = async (attemptId: string) => {
  try {
    const response = await axiosClient.get(
      `/api/quiz-attempts/${attemptId}/review`,
    );
    return response.data as ClassroomQuizReview;
  } catch (e) {
    console.log(e);
  }
};
