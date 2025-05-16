import CourseSection from '@/components/dashboard/Course';
import PageSEO from '@/components/pageseo/PageSEO';
import { Box } from '@mui/material';

export default function ContactForm() {
  return (
    <>
      <PageSEO
        title="Courses — Deen Guidance | Quran & Islamic Studies Online"
        description="Explore Quran and Islamic Studies courses online. From beginner Tajweed to advanced Tafsir, Hadith, and Arabic grammar — enroll in your ideal course today."
        canonicalUrl="https://www.deenguidance.com/courses"
        openGraph={{
          url: 'https://www.deenguidance.com/courses',
          type: 'website',
          title: 'Courses — Deen Guidance | Quran & Islamic Studies Online',
          description: 'Browse Deen Guidance’s full range of online Quran and Islamic studies courses. Flexible schedules, certified teachers, and personalized learning paths.',
          image: '/images/course/bg-course.jpg', // Replace with actual optimized OG image
          siteName: 'Deen Guidance',
        }}
        twitter={{
          cardType: 'summary_large_image',
          siteHandle: '@DeenGuidance',
          creatorHandle: '@DeenGuidance',
          title: 'Online Quran & Islamic Courses — Deen Guidance',
          description: 'Enroll in personalized, flexible online Quran and Islamic studies classes. Explore Tajweed, Tafsir, Hadith, Arabic, and more.',
          image: '/images/course/bg-course.jpg', // Replace with actual Twitter image
        }}
        additionalMetaTags={[
          { name: 'author', content: 'Deen Guidance Team' },
          { name: 'robots', content: 'index,follow' },
          { name: 'keywords', content: 'Quran courses, Islamic studies online, Tajweed, Arabic grammar, Tafsir classes, Deen Guidance courses' },
        ]}
      />
      <Box sx={{ mt: "20px" }}>
        <CourseSection />
      </Box>
    </>
  )
}