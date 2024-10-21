import { Metadata } from 'next';
import Blog from '@/components/Blog';

export const metadata: Metadata = {
  title: 'Blog | StudyLinkEU',
  description: 'Read the latest articles and tips about studying in Europe for international students.',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">StudyLinkEU Blog</h1>
      <p className="mb-8">
        Stay informed with the latest news, tips, and insights about studying in Europe. 
        Our blog covers everything from application processes to student life in Germany, Poland, and the Netherlands.
      </p>
      <Blog />
    </div>
  );
}