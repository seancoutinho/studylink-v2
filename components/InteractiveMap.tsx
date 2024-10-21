"use client";

import { useState } from 'react';
import { MapPin } from 'lucide-react';

const universities = [
  { id: 1, name: "Technical University of Munich", country: "Germany", lat: 48.1496, lng: 11.5678 },
  { id: 2, name: "Warsaw School of Economics", country: "Poland", lat: 52.2088, lng: 21.0084 },
  { id: 3, name: "University of Amsterdam", country: "Netherlands", lat: 52.3559, lng: 4.9554 },
  { id: 4, name: "RWTH Aachen University", country: "Germany", lat: 50.7784, lng: 6.0609 },
  { id: 5, name: "Jagiellonian University", country: "Poland", lat: 50.0619, lng: 19.9332 },
  { id: 6, name: "Delft University of Technology", country: "Netherlands", lat: 51.9989, lng: 4.3731 },
];

const InteractiveMap = () => {
  const [selectedUniversity, setSelectedUniversity] = useState(null);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partner Universities</h2>
        <div className="relative w-full h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          {/* Replace this div with an actual map component (e.g., Google Maps, Mapbox) */}
          <div className="absolute inset-0 bg-blue-100">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${(uni.lng + 180) * (100 / 360)}%`, top: `${(90 - uni.lat) * (100 / 180)}%` }}
                onMouseEnter={() => setSelectedUniversity(uni)}
                onMouseLeave={() => setSelectedUniversity(null)}
              >
                <MapPin className="text-primary" />
              </div>
            ))}
          </div>
          {selectedUniversity && (
            <div className="absolute bottom-4 left-4 bg-white p-4 rounded shadow-md">
              <h3 className="font-bold">{selectedUniversity.name}</h3>
              <p>{selectedUniversity.country}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;