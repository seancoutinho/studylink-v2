import { Metadata } from 'next';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: 'Study in Poland | StudyLinkEU',
  description: 'Explore opportunities to study in Poland with StudyLinkEU. Learn about top universities, courses, and student life in Poland.',
};

export default function StudyInPolandPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Study in Poland</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <p className="mb-4">
            Poland is an increasingly popular destination for international students, offering high-quality education at affordable prices. With its rich history, vibrant culture, and rapidly growing economy, Poland provides a unique and rewarding study abroad experience.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Why Study in Poland?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>High-quality education at lower costs compared to Western Europe</li>
            <li>Growing number of English-taught programs</li>
            <li>Rich cultural heritage and beautiful landscapes</li>
            <li>Strategic location in the heart of Europe</li>
            <li>Welcoming atmosphere for international students</li>
          </ul>
        </div>
        <div>
          <Image
            src="https://images.unsplash.com/photo-1607427293702-036933bbf746?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
            alt="Polish university campus"
            width={800}
            height={600}
            className="rounded-lg"
          />
        </div>
      </div>
      <h2 className="text-2xl font-semibold mb-4">Top Universities in Poland</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {['University of Warsaw', 'Jagiellonian University', 'Warsaw University of Technology'].map((uni, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{uni}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Known for academic excellence and research opportunities.</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-4">Student Life in Poland</h2>
      <p className="mb-4">
        Studying in Poland offers a unique blend of historical charm and modern amenities. Polish cities are known for their student-friendly atmosphere, with plenty of cultural events, festivals, and outdoor activities. The cost of living is relatively low, allowing students to enjoy a high quality of life on a budget.
      </p>
      <p>
        At StudyLinkEU, we're committed to helping you make the most of your study abroad experience in Poland. From selecting the right university and program to assisting with visa applications and finding accommodation, we provide comprehensive support throughout your journey.
      </p>
    </div>
  );
}