"use client";

import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  { id: 1, name: "Computer Science", university: "Technical University of Munich", country: "Germany" },
  { id: 2, name: "Business Administration", university: "Warsaw School of Economics", country: "Poland" },
  { id: 3, name: "Environmental Sciences", university: "University of Amsterdam", country: "Netherlands" },
  { id: 4, name: "Mechanical Engineering", university: "RWTH Aachen University", country: "Germany" },
  { id: 5, name: "International Relations", university: "Jagiellonian University", country: "Poland" },
  { id: 6, name: "Artificial Intelligence", university: "Delft University of Technology", country: "Netherlands" },
];

const CourseSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = () => {
    const filtered = courses.filter(course => 
      (course.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
       course.university.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (selectedCountry === 'all' || selectedCountry === '' || course.country === selectedCountry)
    );
    setFilteredCourses(filtered);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-secondary to-background relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary"
        >
          Find Your Perfect Course
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search courses or universities"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-lg rounded-full shadow-lg focus:ring-2 focus:ring-primary transition-all duration-300"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
          <Select value={selectedCountry} onValueChange={setSelectedCountry}>
            <SelectTrigger className="w-full md:w-[200px] py-6 text-lg rounded-full shadow-lg focus:ring-2 focus:ring-primary transition-all duration-300">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Countries</SelectItem>
              <SelectItem value="Germany">Germany</SelectItem>
              <SelectItem value="Poland">Poland</SelectItem>
              <SelectItem value="Netherlands">Netherlands</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleSearch} size="lg" className="py-6 px-8 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-primary text-primary-foreground hover:bg-primary/90">
            Search
          </Button>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/50 backdrop-blur-sm border border-primary/10 group">
                <CardHeader className="bg-primary/10 p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <CardTitle className="flex items-center text-2xl font-semibold text-primary z-10 relative">
                    <GraduationCap className="w-6 h-6 mr-2" />
                    {course.name}
                  </CardTitle>
                  <CardDescription className="text-lg z-10 relative">{course.university}</CardDescription>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-base text-muted-foreground mb-4">Country: {course.country}</p>
                  <Button variant="outline" className="w-full transition-colors duration-300 hover:bg-primary hover:text-primary-foreground group">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
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

export default CourseSearch;