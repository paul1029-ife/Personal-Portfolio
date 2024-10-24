import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Technology {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
  github: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Technology;
}

const projects: Technology[] = [
  {
    id: 1,
    title: "Movie Search App",
    description:
      "An app for searching for movies, finding info about them(including reviews from other users) and saving them to watch later",
    image: "https://i.pinimg.com/736x/13/e6/53/13e653c06466b7a0a9f44a69f622eb2f.jpg",
    technologies: ["React", "Tailwind", "Kinde"],
    link: "https://example.com/aje",
    github: "https://github.com/yourusername/aje",
    featured: true
  },
  {
    id: 2,
    title: "BeYou Learning Platform",
    description:
      "A platform to streamline the learning process, offering a structured path for skill development and progress tracking, with community engagement.",
    image: "https://i.pinimg.com/564x/1d/a8/56/1da856511208cf0699d81d3c64288eb2.jpg",
    technologies: ["React", "TypeScript", "Tailwind", "Node.js"],
    link: "https://example.com/beyou",
    github: "https://github.com/yourusername/beyou",
    featured: true
  },
  {
    id: 3,
    title: "ShopIt E-commerce",
    description:
      "A customizable e-commerce platform built with React and Tailwind CSS, allowing users to browse products and manage their carts easily.",
    image: "https://i.pinimg.com/564x/e0/54/23/e05423b378c26b902701ceb3806a7974.jpg",
    technologies: ["React", "Tailwind", "Firebase"],
    link: "https://example.com/shopit",
    github: "https://github.com/yourusername/shopit"
  },
  {
    id: 4,
    title: "Todo App",
    description:
      "A simple and intuitive task management app with local storage, featuring add, delete, and edit functionalities.",
    image: "https://i.pinimg.com/564x/81/6b/b6/816bb6446e40ba69726e8f20c3b13098.jpg",
    technologies: ["React", "TypeScript", "LocalStorage"],
    link: "https://example.com/todo",
    github: "https://github.com/yourusername/todo"
  }
];

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
            Featured
          </span>
        </div>
      )}
      
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
        
        <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
          >
            <Eye className="w-5 h-5 text-gray-900" />
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/90 p-3 rounded-full hover:bg-white transition-colors"
          >
            <Github className="w-5 h-5 text-gray-900" />
          </a>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600"
          >
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectsPage: React.FC = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing my journey through code. Here are some of my favorite projects that demonstrate my skills and passion for web development.
          </p>
        </div>

        {featuredProjects.length > 0 && (
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredProjects.map(project => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;