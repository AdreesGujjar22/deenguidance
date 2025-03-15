import { StaticImageData } from 'next/image'; 

export interface CourseCardProps {
  id?: string;
  image: StaticImageData;
  tutorName: string;
  tutorRole: string;
  courseTitle: string;
  price: string;
  isFree: boolean;
  duration: string;
  enrollCount: string;
  onEnrollClick?: (courseTitle: string) => void;
}