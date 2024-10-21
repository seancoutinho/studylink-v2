"use client";

import { useParams } from 'next/navigation';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for a Successful Visa Application",
    content: `
      <p>Applying for a student visa can be a daunting process, but with the right preparation, you can increase your chances of success. Here are five essential tips to help you navigate the visa application process:</p>
      <ol>
        <li><strong>Start early:</strong> Begin your visa application process as soon as you receive your university acceptance letter. This gives you ample time to gather all necessary documents and address any potential issues.</li>
        <li><strong>Double-check all documents:</strong> Ensure all your documents are complete, accurate, and meet the specific requirements of the embassy or consulate where you're applying.</li>
        <li><strong>Prepare for your interview:</strong> If an interview is required, practice common questions and be ready to clearly explain your study plans and intentions to return to your home country after completing your studies.</li>
        <li><strong>Demonstrate financial stability:</strong> Provide solid proof that you can cover your tuition fees and living expenses during your stay in the host country.</li>
        <li><strong>Be honest and consistent:</strong> Always provide truthful information in your application and during your interview. Consistency across all your documents and statements is key.</li>
      </ol>
      <p>Remember, each country has its own specific visa requirements, so always check the official embassy website for the most up-to-date information.</p>
    `,
    date: "2023-05-15",
    category: "Visa",
  },
  {
    id: 2,
    title: "Top Universities in Germany for International Students",
    content: `
      <p>Germany is home to some of the world's top-ranked universities and offers excellent opportunities for international students. Here are five top universities known for their welcoming environment for foreign students:</p>
      <ol>
        <li><strong>Technical University of Munich (TUM):</strong> Renowned for its engineering and natural sciences programs, TUM is consistently ranked as one of the best universities in Germany.</li>
        <li><strong>Ludwig Maximilian University of Munich (LMU):</strong> One of the oldest universities in Germany, LMU offers a wide range of programs and is particularly strong in the humanities and social sciences.</li>
        <li><strong>Heidelberg University:</strong> Germany's oldest university, Heidelberg is known for its research output and strong programs in natural sciences and medicine.</li>
        <li><strong>Humboldt University of Berlin:</strong> Located in the heart of Berlin, this university is known for its arts and humanities programs and vibrant student life.</li>
        <li><strong>RWTH Aachen University:</strong> Another top technical university, RWTH Aachen is particularly strong in engineering and technology fields.</li>
      </ol>
      <p>These universities offer numerous English-taught programs and have strong support systems for international students, making them excellent choices for your study abroad journey.</p>
    `,
    date: "2023-05-10",
    category: "Universities",
  },
  {
    id: 3,
    title: "Living in the Netherlands: A Student's Guide",
    content: `
      <p>The Netherlands is a popular destination for international students, known for its high-quality education, vibrant culture, and excellent quality of life. Here's what you need to know about living in the Netherlands as a student:</p>
      <h3>Accommodation</h3>
      <p>Student housing can be competitive, especially in major cities. Start your search early and consider options like university dormitories, private student housing, or shared apartments.</p>
      <h3>Transportation</h3>
      <p>Cycling is a popular and efficient way to get around in Dutch cities. Invest in a good bike and familiarize yourself with local cycling rules. Public transportation is also excellent, with trains, trams, and buses connecting cities and towns.</p>
      <h3>Cost of Living</h3>
      <p>While not the cheapest country in Europe, the Netherlands offers a good quality of life. Budget around €800-€1,000 per month for living expenses, including accommodation, food, and entertainment.</p>
      <h3>Dutch Culture</h3>
      <p>The Dutch are known for their directness, which might take some getting used to. They also value punctuality, so always be on time for appointments and classes.</p>
      <h3>Language</h3>
      <p>While many programs are taught in English, learning some Dutch can greatly enhance your experience and help you integrate into local life.</p>
      <p>Remember, each city and university has its own unique atmosphere, so research your specific destination for more tailored advice.</p>
    `,
    date: "2023-05-05",
    category: "Student Life",
  },
];

export default function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id as string));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-sm text-muted-foreground mb-8">{post.date} | {post.category}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} className="prose max-w-none mb-8" />
      <Button asChild>
        <Link href="/blog">Back to Blog</Link>
      </Button>
    </div>
  );
}