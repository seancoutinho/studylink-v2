import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: 1,
    title: "5 Tips for a Successful Visa Application",
    excerpt: "Navigate the visa application process with confidence using these expert tips.",
    date: "2023-05-15",
    category: "Visa",
  },
  {
    id: 2,
    title: "Top Universities in Germany for International Students",
    excerpt: "Discover the best German universities welcoming students from around the world.",
    date: "2023-05-10",
    category: "Universities",
  },
  {
    id: 3,
    title: "Living in the Netherlands: A Student's Guide",
    excerpt: "Everything you need to know about student life in the Netherlands.",
    date: "2023-05-05",
    category: "Student Life",
  },
];

const Blog = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
        >
          Latest from Our Blog
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-primary/10 overflow-hidden group">
                <CardHeader className="bg-primary/5 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardTitle className="text-2xl font-semibold text-primary mb-2 relative z-10">{post.title}</CardTitle>
                  <CardDescription className="flex items-center text-sm text-muted-foreground relative z-10">
                    <Calendar className="w-4 h-4 mr-1" /> {post.date}
                    <span className="mx-2">|</span>
                    <Tag className="w-4 h-4 mr-1" /> {post.category}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 flex-grow flex flex-col justify-between">
                  <p className="text-muted-foreground mb-6">{post.excerpt}</p>
                  <Button variant="outline" asChild className="w-full group">
                    <Link href={`/blog/${post.id}`} className="flex items-center justify-center">
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 transform hover:scale-105">
            <Link href="/blog" className="text-lg py-6 px-8 rounded-full">
              View All Posts <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 mask-fade-out"></div>
    </section>
  );
};

export default Blog;