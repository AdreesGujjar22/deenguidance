import PageSEO from "@/components/pageseo/PageSEO";
import ContactSection from "@/components/sections/ContactSection";

export default function ContactForm() {
  return (
    <>
      <PageSEO
        title="Contact Us — Deen Guidance"
        description="Get in touch with Deen Guidance for inquiries, support, or to schedule your free demo Quran class. We're here to help you on your learning journey."
        canonicalUrl="https://www.deenguidance.com/contact"
        openGraph={{
          url: 'https://www.deenguidance.com/contact',
          type: 'website',
          title: 'Contact Us — Deen Guidance',
          description: 'Reach out to Deen Guidance for questions, course info, or support. Quick response via email or WhatsApp.',
          image: '/images/web-favicon.png',
          siteName: 'Deen Guidance',
        }}
        twitter={{
          cardType: 'summary_large_image',
          siteHandle: '@DeenGuidance',
          creatorHandle: '@DeenGuidance',
          title: 'Contact Us — Deen Guidance',
          description: 'Need help or info? Contact the Deen Guidance team for fast support and free Quran learning consultations.',
          image: '/images/web-favicon.png',
        }}
        additionalMetaTags={[
          { name: 'author', content: 'Deen Guidance Team' },
          { name: 'robots', content: 'index,follow' },
          { name: 'keywords', content: 'Contact Deen Guidance, Quran support, Islamic classes, Help, Online Quran classes' },
        ]}
      />
      <ContactSection />
    </>
  )
}