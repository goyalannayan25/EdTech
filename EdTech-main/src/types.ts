export interface Course {
  id: string;
  title: string;
  progress: number;
  totalLessons: number;
  completedLessons: number;
  image: string;
}

export interface Student {
  id: string;
  name: string;
  score: number;
  avatar: string;
}

export interface CalendarEvent {
  title: string;
  date: string;
  type: 'class' | 'assignment' | 'quiz';
}