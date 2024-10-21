import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Amina Kimani",
    country: "Kenya",
    university: "Technical University of Munich",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "StudyLinkEU made my dream of studying in Germany a reality. Their support throughout the process was invaluable.",
  },
  {
    id: 2,
    name: "Raj Patel",
    country: "India",
    university: "Warsaw School of Economics",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "I couldn't have navigated the complex visa process without StudyLinkEU's expert guidance. Now I'm thriving in Poland!",
  },
  {
    id: 3,
    name: "Zainab Ahmed",
    country: "Nigeria",
    university: "University of Amsterdam",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    quote: "From course selection to finding accommodation, StudyLinkEU was there every step of the way. I'm so grateful for their support.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
        >
          Student Success Stories
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-primary/10 overflow-hidden group">
                <CardHeader className="relative pb-0">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <CardTitle className="text-2xl font-semibold">{testimonial.name}</CardTitle>
                    <p className="text-sm opacity-80">{testimonial.country}</p>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between p-6 relative">
                  <div className="mb-4">
                    <Quote className="w-8 h-8 text-primary mb-2 absolute -top-4 -left-2 opacity-20" />
                    <p className="italic text-muted-foreground relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">{testimonial.university}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-grid-white/10 bg-grid-8 mask-fade-out"></div>
    </section>
  );
};

export default Testimonials;