import { CourseCardProps } from "../types/Course";
import HeroImage from "../../public/images/HeroSectionImage.png";

const courseData: CourseCardProps[] = [
    {
        image: HeroImage,
        tutorName: "Habib Al Noor",
        tutorRole: "Arabic Scholar",
        courseTitle: "Quran Intermediate Course",
        price: "$16.00",
        isFree: true,
        duration: "10 Weeks",
        enrollCount: "50 Enrolled",
    },
    {
        image: HeroImage,
        tutorName: "Habib Al Noor",
        tutorRole: "Arabic Scholar",
        courseTitle: "Advanced Tajweed Course",
        price: "$20.00",
        isFree: false,
        duration: "12 Weeks",
        enrollCount: "75 Enrolled",
    },
];

export default courseData;
