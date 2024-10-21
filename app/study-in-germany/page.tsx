import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Study in Germany | StudyLinkEU',
  description: 'Discover opportunities to study in Germany with StudyLinkEU. Learn about top universities, courses, and student life in Germany.',
};

export default function StudyInGermanyPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Study in Germany</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="mb-4">
            Germany is one of the most popular destinations for international students, offering world-class education, diverse culture, and exciting career opportunities. With its strong economy, rich history, and high quality of life, Germany provides an excellent environment for academic and personal growth.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Study in Germany?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>High-quality education at affordable costs</li>
            <li>Numerous English-taught programs</li>
            <li>Strong focus on research and innovation</li>
            <li>Excellent job prospects after graduation</li>
            <li>Rich cultural experiences and central European location</li>
          </ul>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="German university campus"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Top Universities in Germany</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {['Technical University of Munich', 'Ludwig Maximilian University of Munich', 'Heidelberg University'].map((uni, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{uni}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Renowned for excellence in research and teaching.</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Student Life in Germany</h2>
      <p className="mb-4">
        Student life in Germany offers a perfect blend of academic rigor and cultural experiences. You'll have the opportunity to engage in various extracurricular activities, explore beautiful cities, and make friends from all over the world. German universities often have strong student unions that organize events and provide support services.
      </p>
      <p>
        With StudyLinkEU, you'll receive comprehensive support to make your dream of studying in Germany a reality. From choosing the right university and program to assisting with your visa application and finding accommodation, we're here to guide you every step of the way.
      </p>
    </div>
  );
}