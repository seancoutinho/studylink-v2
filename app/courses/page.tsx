import { Metadata } from 'next';
import CourseSearch from '@/components/CourseSearch';

export const metadata: Metadata = {
  title: 'Courses | StudyLinkEU',
  description: 'Explore courses available at top universities in Germany, Poland, and the Netherlands.',
};

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Explore Courses</h1>
      <p className="mb-8">
        Discover a wide range of courses available at leading universities in Germany, Poland, and the Netherlands. 
        Use our search tool to find the perfect program for your academic and career goals.
      </p>
      <CourseSearch />
    </div>
  );
}