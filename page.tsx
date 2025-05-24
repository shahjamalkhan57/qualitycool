import HeroSection from '@/components/hero-section';
import FeaturedServices from '@/components/featured-services';
import WhyChooseUs from '@/components/why-choose-us';
import CalendlySection from '@/components/calendly-section';
import BlogPreview from '@/components/blog-preview';
import CtaSection from '@/components/cta-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <WhyChooseUs />
      <CalendlySection />
      <BlogPreview />
      <CtaSection />
    </>
  );
}