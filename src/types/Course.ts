import { StaticImageData } from 'next/image'; 

export interface CourseCardProps {
    image: StaticImageData;
    tutorName: string;
    tutorRole: string;
    courseTitle: string;
    price: string;
    isFree: boolean;
    duration: string;
    enrollCount: string;
  }
  