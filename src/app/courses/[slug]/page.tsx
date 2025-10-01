import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import CourseDetailPage from '@/components/courses/CourseDetailPage';
import courseData from '@/data/Course';

interface CoursePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all courses
export async function generateStaticParams() {
  return courseData.map((course) => ({
    slug: course.id,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const course = courseData.find((c) => c.id === params.slug);

  if (!course) {
    return {
      title: 'Course Not Found | Deen Guidance',
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://deenguidance.com';
  const courseUrl = `${siteUrl}/courses/${params.slug}`;

  return {
    title: `${course.courseTitle} Course | Deen Guidance`,
    description: `Learn ${course.courseTitle} with ${course.tutorName}, ${course.tutorRole}. ${course.duration} comprehensive course. ${course.isFree ? 'Free enrollment available' : `Price: ${course.price}`}. Join ${course.enrollCount} students.`,
    keywords: [
      course.courseTitle,
      'Islamic education',
      'online course',
      course.tutorName,
      'Deen Guidance',
      course.isFree ? 'free course' : 'paid course',
    ],
    authors: [{ name: course.tutorName }],
    openGraph: {
      title: `${course.courseTitle} Course | Deen Guidance`,
      description: `Learn ${course.courseTitle} with ${course.tutorName}. ${course.duration} course with ${course.enrollCount} students.`,
      url: courseUrl,
      siteName: 'Deen Guidance',
      images: [
        {
          url: `${siteUrl}${course.image}`,
          width: 1200,
          height: 630,
          alt: `${course.courseTitle} Course`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${course.courseTitle} Course | Deen Guidance`,
      description: `Learn ${course.courseTitle} with ${course.tutorName}. ${course.duration} course.`,
      images: [`${siteUrl}${course.image}`],
    },
    alternates: {
      canonical: courseUrl,
    },
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  const course = courseData.find((c) => c.id === params.slug);

  if (!course) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.courseTitle,
    description: `Learn ${course.courseTitle} with ${course.tutorName}, ${course.tutorRole}. ${course.duration} comprehensive course.`,
    provider: {
      '@type': 'Organization',
      name: 'Deen Guidance',
      sameAs: process.env.NEXT_PUBLIC_SITE_URL || 'https://deenguidance.com',
    },
    instructor: {
      '@type': 'Person',
      name: course.tutorName,
      jobTitle: course.tutorRole,
    },
    image: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://deenguidance.com'}${course.image}`,
    offers: {
      '@type': 'Offer',
      price: course.isFree ? '0' : course.price.replace('$', ''),
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'online',
      duration: course.duration,
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: course.enrollCount.split(' ')[0],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CourseDetailPage course={course} />
    </>
  );
}
