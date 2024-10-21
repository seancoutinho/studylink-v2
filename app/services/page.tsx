import { Metadata } from 'next';
import Services from '@/components/Services';

export const metadata: Metadata = {
  title: 'Our Services | StudyLinkEU',
  description: 'Explore the comprehensive services offered by StudyLinkEU to support your study abroad journey.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Our Services</h1>
      <p className="mb-8">
        At StudyLinkEU, we offer a wide range of services to support your journey from application to graduation. 
        Our comprehensive approach ensures that you have all the assistance you need at every step of your study abroad experience.
      </p>
      <Services />
    </div>
  );
}