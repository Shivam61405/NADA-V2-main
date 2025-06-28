// src/pages/InteractiveModulesPage.jsx
import React from 'react';

function InteractiveModulesPage() {
  const modules = [
    {
      title: 'Module 1: Understanding Anti-Doping',
      description: 'Explore the basics of anti-doping regulations and their importance in sports.',
      link: '/modules/module1',
    },
    {
      title: 'Module 2: Prohibited Substances',
      description: 'Learn about substances that are prohibited in sports and their effects.',
      link: '/modules/module2',
    },
    {
      title: 'Module 3: The Testing Process',
      description: 'Understand how doping tests are conducted and what athletes can expect.',
      link: '/modules/module3',
    },
    {
      title: 'Module 4: Athlete Rights and Responsibilities',
      description: 'Get informed about the rights and responsibilities of athletes regarding doping.',
      link: '/modules/module4',
    },
    {
      title: 'Module 5: Real-Life Case Studies',
      description: 'Examine real-life cases of doping violations and their implications.',
      link: '/modules/module5',
    },
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Interactive Modules</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modules.map((module, index) => (
          <div key={index} className="shadow-lg rounded overflow-hidden bg-white p-4">
            <h2 className="text-xl font-semibold">{module.title}</h2>
            <p className="mt-2">{module.description}</p>
            <a
              href={module.link}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200"
            >
              Start Module
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InteractiveModulesPage;
