export interface CurrentCourse {
  title: string;
  currentWeek: string;
  totalWeeks: string;
  weeksRemaining: string;
}

export interface Progress {
  modulesCompleted: number;
  totalModules: number;
  completionPercentage: number;
  averageWeeklyStudy: number;
  quizPassRate: number;
  certificateProgress: number;
}

export interface NextLiveSession {
  title: string;
  instructor: string;
  scheduledAt: string;
  platform: string;
}

export interface RecentActivity {
  type: string;
  description: string;
}

export interface WeeklyProgress {
  week: number;
  module: number;
}

export interface DashboardModule {
  moduleNumber: number;
  title: string;
  status: "completed" | "in_progress" | "locked";
  lessonCompleted: number;
  totalLessons: number;
}

export interface DashboardData {
  user: { fullname: string; currentCourse: CurrentCourse };
  progress: Progress;
  nextLiveSession: NextLiveSession;
  recentActivities: RecentActivity[];
  weeklyProgressChart: WeeklyProgress[];
  modules: DashboardModule[];
}
