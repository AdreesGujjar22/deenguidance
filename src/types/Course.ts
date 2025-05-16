
export interface CourseCardProps {
  id?: string;
  image: string;
  tutorName: string;
  tutorRole: string;
  courseTitle: string;
  price: string;
  isFree: boolean;
  duration: string;
  enrollCount: string;
  onEnrollClick?: (courseTitle: string) => void;
}