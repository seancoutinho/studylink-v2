import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plane, Book, FileText, Home, Users, Headphones } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Visa Application Support",
    description: "Expert guidance through the visa application process for Germany, Poland, and the Netherlands.",
    icon: FileText,
  },
  {
    title: "Course Selection",
    description: "Personalized assistance in choosing the right course and university based on your goals and qualifications.",
    icon: Book,
  },
  {
    title: "Travel Arrangements",
    description: "Help with booking flights and planning your journey to your chosen study destination.",
    icon: Plane,
  },
  {
    title: "Accommodation",
    description: "Support in finding suitable and affordable housing options near your university.",
    icon: Home,
  },
  {
    title: "Cultural Integration",
    description: "Programs and resources to help you adapt to European culture and make the most of your study abroad experience.",
    icon: Users,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for any queries or concerns during your stay in Europe.",
    icon: Headphones,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary"
        >
          Our Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-primary/10 group">
                <CardHeader className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardTitle className="flex items-center text-2xl font-semibold text-primary z-10 relative">
                    <service.icon className="w-8 h-8 mr-3 text-primary" />
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
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

export default Services;