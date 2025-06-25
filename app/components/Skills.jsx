import React, { useState } from "react";

const Skills = ({ skills }) => {
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

  // Ensure skills is always an array
  const skillsArray = Array.isArray(skills) ? skills : [];
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsArray 
    : skillsArray.filter(skill => skill.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 lg:px-8 xl:px-[8%]">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          {/* <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with. I'm constantly learning and adding new skills to my repertoire.
          </p> */}
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2  font-medium transition-colors duration-300 cursor-pointer ${
                activeCategory === category.id
                  ? ' text-black underline underline-offset-8'
                  : ' text-gray-400 dark:text-gray-300  hover:underline hover:underline-offset-8 hover:text-black hover:transition-all duration-300'
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
              className=" p-2 cursor-pointer hover:scale-105 transition-all duration-300 "
            >
              <div className="text-center">
                {/* Skill Icon */}
                <div 
                  className=" mx-auto mb-4 rounded-full flex items-center justify-center text-2xl"
                >
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
                {/* <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2 mb-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${skill.proficiency}%`,
                      backgroundColor: skill.color,
                    }}
                  ></div>
                </div> */}

                {/* Percentage */}
                {/* <span className="text-sm text-gray-600 dark:text-gray-400">
                  {skill.proficiency}%
                </span> */}
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No skills found in this category. Add some skills through the admin panel!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills; 