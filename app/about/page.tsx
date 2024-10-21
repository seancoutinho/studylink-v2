import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | StudyLinkEU',
  description: 'Learn about StudyLinkEU and our mission to help African and Asian students study in Europe.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">About StudyLinkEU</h1>
      <p className="mb-4">
        StudyLinkEU is dedicated to helping African and Asian students achieve their dreams of studying in Europe. 
        We provide comprehensive support and guidance for students looking to study in Germany, Poland, and the Netherlands.
      </p>
      <p className="mb-4">
        Our team of experienced education consultants and international student advisors work tirelessly to ensure 
        that every student we assist has the best possible chance of success in their academic journey abroad.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
      <p>
        To bridge the gap between ambitious students from Africa and Asia and world-class European education, 
        fostering cultural exchange and global understanding while helping students achieve their academic and career goals.
      </p>
    </div>
  );
}