import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CourseSearch from '@/components/CourseSearch';
import InteractiveMap from '@/components/InteractiveMap';
import Testimonials from '@/components/Testimonials';
import Blog from '@/components/Blog';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Services />
      <CourseSearch />
      <InteractiveMap />
      <Testimonials />
      <Blog />
    </div>
  );
}