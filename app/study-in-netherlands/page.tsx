import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Study in the Netherlands | StudyLinkEU',
  description: 'Discover opportunities to study in the Netherlands with StudyLinkEU. Learn about top universities, courses, and student life in the Netherlands.',
};

export default function StudyInNetherlandsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Study in the Netherlands</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="mb-4">
            The Netherlands is a popular destination for international students, known for its high-quality education, innovative teaching methods, and diverse, welcoming culture. With its strong economy, excellent infrastructure, and high standard of living, the Netherlands offers an ideal environment for academic and personal growth.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Study in the Netherlands?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>World-class education with many English-taught programs</li>
            <li>Innovative and interactive teaching methods</li>
            <li>Strong links between universities and industries</li>
            <li>Multicultural environment and international atmosphere</li>
            <li>High quality of life and excellent student facilities</li>
          </ul>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1558551649-e44c8f992010?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Dutch university campus"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Top Universities in the Netherlands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {['University of Amsterdam', 'Delft University of Technology', 'Utrecht University'].map((uni, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{uni}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Renowned for research excellence and innovative programs.</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Student Life in the Netherlands</h2>
      <p className="mb-4">
        Studying in the Netherlands offers a unique and enriching experience. Dutch cities are known for their vibrant student life, with numerous cultural events, festivals, and recreational activities. The country's compact size and excellent public transportation make it easy to explore different cities and even neighboring countries.
      </p>
      <p>
        At StudyLinkEU, we're dedicated to helping you make the most of your study abroad experience in the Netherlands. From choosing the right university and program to assisting with visa applications and finding accommodation, we provide comprehensive support to ensure your success and comfort throughout your academic journey.
      </p>
    </div>
  );
}