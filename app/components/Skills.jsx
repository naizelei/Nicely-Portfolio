import React, { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'devops', name: 'DevOps' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];

  // Static skills data - Edit this array to add/remove skills
  const skills = [
    {
      _id: '1',
      name: 'React',
      category: 'frontend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      proficiency: 90,
      color: '#61DAFB'
    },
    {
      _id: '2',
      name: 'Next.js',
      category: 'frontend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      proficiency: 85,
      color: '#000000'
    },
    {
      _id: '3',
      name: 'JavaScript',
      category: 'frontend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      proficiency: 95,
      color: '#F7DF1E'
    },
    {
      _id: '4',
      name: 'TypeScript',
      category: 'frontend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      proficiency: 80,
      color: '#3178C6'
    },
    {
      _id: '5',
      name: 'Node.js',
      category: 'backend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      proficiency: 85,
      color: '#339933'
    },
    {
      _id: '6',
      name: 'Python',
      category: 'backend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      proficiency: 90,
      color: '#3776AB'
    },
    {
      _id: '7',
      name: 'MongoDB',
      category: 'database',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      proficiency: 80,
      color: '#47A248'
    },
    {
      _id: '8',
      name: 'PostgreSQL',
      category: 'database',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      proficiency: 75,
      color: '#336791'
    },
    {
      _id: '9',
      name: 'Docker',
      category: 'devops',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      proficiency: 70,
      color: '#2496ED'
    },
    {
      _id: '10',
      name: 'Git',
      category: 'devops',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      proficiency: 85,
      color: '#F05032'
    },
    {
      _id: '11',
      name: 'Tailwind CSS',
      category: 'frontend',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
      proficiency: 90,
      color: '#06B6D4'
    },
    {
      _id: '12',
      name: 'Figma',
      category: 'design',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
      proficiency: 75,
      color: '#F24E1E'
    }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8 xl:px-[8%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I'm constantly learning and adding new skills to my repertoire.
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

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill._id}
              className="p-2 cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                {/* Skill Icon */}
                <div className="mx-auto mb-4 rounded-full flex items-center justify-center text-2xl">
                  {skill.iconUrl ? (
                    <img src={skill.iconUrl} alt={skill.name} className="rounded-lg w-20 h-20 object-contain" />
                  ) : skill.icon ? (
                    <span>{skill.icon}</span>
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  )}
                </div>

                {/* Skill Name */}
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
                  {skill.name}
                </h3>

                {/* Proficiency Bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div>

                {/* Percentage */}
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.proficiency}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No skills found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills; 