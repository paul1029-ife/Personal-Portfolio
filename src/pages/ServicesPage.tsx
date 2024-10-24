import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  Code,
  Layout,
  Globe,
  Gauge,
  LucideIcon,
} from 'lucide-react';

interface ServiceSectionProps {
  title: string;
  description: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: LucideIcon;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  title,
  description,
  isOpen,
  onToggle,
  icon: Icon,
}) => (
  <div className="border-b border-gray-200 py-6 transition duration-300 ease-in-out hover:bg-gray-50">
    <div 
      className="flex justify-between items-center cursor-pointer transition duration-300 ease-in-out"
      onClick={onToggle}
    >
      <div className="flex items-center gap-4">
        <Icon className={`w-8 h-8 ${isOpen ? 'text-blue-500' : 'text-gray-600'} transition-colors duration-300`} />
        <h3 className="text-xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-500">
          {title}
        </h3>
      </div>
      {isOpen ? (
        <ChevronUp className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors duration-300" />
      ) : (
        <ChevronDown className="w-6 h-6 text-gray-600 hover:text-blue-500 transition-colors duration-300" />
      )}
    </div>

    {isOpen && (
      <div className="mt-4 pl-10 text-gray-600 space-y-4 border-l-4 border-blue-500 py-2">
        {description}
      </div>
    )}
  </div>
);

interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  description: React.ReactNode;
}

const ServicesPage: React.FC = () => {
  const [openSection, setOpenSection] = useState<string | null>('react');

  const services: Service[] = [
    {
      id: 'react',
      title: 'REACT DEVELOPMENT',
      icon: Code,
      description: (
        <>
          <p>Specialized in building modern web applications using React.js and its ecosystem:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Single Page Applications (SPA)</li>
            <li>Custom React hooks and components</li>
            <li>State management (Redux, Context API)</li>
            <li>API integration and data handling</li>
            <li>Performance optimization</li>
          </ul>
        </>
      ),
    },
    {
      id: 'frontend',
      title: 'WEB DEVELOPMENT',
      icon: Globe,
      description: (
        <>
          <p>Full-stack web development services with a focus on modern technologies:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Responsive website development</li>
            <li>Modern CSS frameworks (Tailwind, Bootstrap)</li>
            <li>JavaScript/TypeScript development</li>
            <li>Cross-browser compatibility</li>
            <li>Web accessibility implementation</li>
          </ul>
        </>
      ),
    },
    {
      id: 'ui',
      title: 'UI/UX IMPLEMENTATION',
      icon: Layout,
      description: (
        <>
          <p>Turning designs into pixel-perfect, responsive web interfaces:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Figma to React implementation</li>
            <li>Responsive design development</li>
            <li>Animation and interaction design</li>
            <li>Design system implementation</li>
            <li>Component library development</li>
          </ul>
        </>
      ),
    },
    {
      id: 'optimization',
      title: 'PERFORMANCE OPTIMIZATION',
      icon: Gauge,
      description: (
        <>
          <p>Improving web application performance and user experience:</p>
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>Code optimization and splitting</li>
            <li>Loading speed optimization</li>
            <li>SEO implementation</li>
            <li>Core Web Vitals optimization</li>
            <li>Performance monitoring setup</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 uppercase">My Specialties</h2>
          <p className="text-gray-500 text-lg">Delivering high-quality web development solutions</p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <ServiceSection
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              isOpen={openSection === service.id}
              onToggle={() => setOpenSection(openSection === service.id ? null : service.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
