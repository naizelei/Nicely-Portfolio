import React, { useState } from "react";
import Image from "next/image";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];

  // Static projects data - Edit this array to add/remove projects
  const projects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      shortDescription: 'A full-stack e-commerce platform built with Next.js, featuring user authentication, product management, and payment integration.',
      longDescription: 'This project demonstrates my skills in building scalable web applications with modern technologies. It includes features like user authentication, product catalog, shopping cart, order management, and payment processing.',
      technologies: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/work-1.png',
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/yourusername/ecommerce-platform',
      category: 'web',
      featured: true
    },
    {
      _id: '2',
      title: 'Task Management App',
      shortDescription: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      longDescription: 'Built with React and Firebase, this app allows teams to manage projects efficiently with features like real-time collaboration, task assignments, progress tracking, and notifications.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Framer Motion'],
      image: '/work-2.png',
      liveUrl: 'https://task-app-demo.com',
      githubUrl: 'https://github.com/yourusername/task-management-app',
      category: 'web',
      featured: false
    },
    {
      _id: '3',
      title: 'Weather Dashboard',
      shortDescription: 'A beautiful weather dashboard that displays current weather conditions and forecasts for multiple locations with interactive maps.',
      longDescription: 'This project showcases my ability to work with external APIs and create responsive, user-friendly interfaces. It includes features like location search, weather alerts, and customizable widgets.',
      technologies: ['JavaScript', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: '/work-3.png',
      liveUrl: 'https://weather-dashboard-demo.com',
      githubUrl: 'https://github.com/yourusername/weather-dashboard',
      category: 'web',
      featured: false
    },
    {
      _id: '4',
      title: 'Portfolio Website',
      shortDescription: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode and smooth animations.',
      longDescription: 'This is the website you\'re currently viewing! It demonstrates my skills in modern web development, responsive design, and creating engaging user experiences.',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      image: '/work-4.png',
      liveUrl: 'https://your-portfolio.com',
      githubUrl: 'https://github.com/yourusername/portfolio',
      category: 'web',
      featured: true
    },
    {
      _id: '5',
      title: 'Mobile Fitness App',
      shortDescription: 'A React Native fitness tracking app with workout plans, progress tracking, and social features for motivation.',
      longDescription: 'This mobile app helps users track their fitness journey with features like workout logging, progress charts, goal setting, and social sharing capabilities.',
      technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
      image: '/work-1.png',
      liveUrl: null,
      githubUrl: 'https://github.com/yourusername/fitness-app',
      category: 'mobile',
      featured: false
    },
    {
      _id: '6',
      title: 'UI/UX Design System',
      shortDescription: 'A comprehensive design system with reusable components, documentation, and design guidelines for consistent user experiences.',
      longDescription: 'This design system includes a component library, style guide, and documentation to ensure consistency across all products and improve development efficiency.',
      technologies: ['Figma', 'Storybook', 'Design Tokens', 'CSS Variables'],
      image: '/work-2.png',
      liveUrl: 'https://design-system-docs.com',
      githubUrl: 'https://github.com/yourusername/design-system',
      category: 'design',
      featured: false
    }
  ];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8 xl:px-[8%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
             <button
             key={category.id}
             onClick={() => setActiveCategory(category.id)}
             className={`px-6 py-2 font-medium transition-colors duration-300 cursor-pointer ${
               activeCategory === category.id
                 ? 'text-black underline underline-offset-8'
                 : 'text-gray-400 dark:text-gray-300 hover:underline hover:underline-offset-8 hover:text-black hover:transition-all duration-300'
             }`}
           >
             {category.name}
           </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-[#E6A0FF] dark:bg-[#D661FF]-900 text-gray-600 dark:text-blue-200 px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-[#D661FF] hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 text-center py-2 px-4 rounded-lg font-medium transition-colors duration-300"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects; 