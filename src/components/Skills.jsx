import useScrollAnimation from '../hooks/useScrollAnimation';

const Skills = () => {
  const [ref, isVisible] = useScrollAnimation();
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, color: 'bg-gray-600' },
        { name: 'Java', level: 85, color: 'bg-gray-700' },
        { name: 'JavaScript', level: 80, color: 'bg-gray-500' },
        { name: 'C', level: 75, color: 'bg-gray-800' },
        { name: 'SQL', level: 85, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React', level: 85, color: 'bg-gray-600' },
        { name: 'Vue.js', level: 80, color: 'bg-gray-700' },
        { name: 'HTML/CSS', level: 90, color: 'bg-gray-500' },
        { name: 'WeChat Mini Program', level: 75, color: 'bg-gray-800' },
        { name: 'Web Development', level: 85, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'PyTorch', level: 85, color: 'bg-gray-600' },
        { name: 'Reinforcement Learning', level: 80, color: 'bg-gray-700' },
        { name: 'Deep Learning', level: 80, color: 'bg-gray-500' },
        { name: 'Machine Learning', level: 85, color: 'bg-gray-800' },
        { name: 'Computer Vision', level: 75, color: 'bg-gray-600' }
      ]
    },
    {
      title: 'Cloud & Tools',
      skills: [
        { name: 'AWS', level: 80, color: 'bg-gray-600' },
        { name: 'Docker', level: 75, color: 'bg-gray-700' },
        { name: 'Git', level: 90, color: 'bg-gray-500' },
        { name: 'Spring Boot', level: 80, color: 'bg-gray-800' },
        { name: 'Cloud Computing', level: 75, color: 'bg-gray-600' }
      ]
    }
  ];

  const additionalSkills = [
    { name: 'Natural Language Processing', icon: '🤖' },
    { name: 'Genetic Algorithms', icon: '🧬' },
    { name: 'Robotics', icon: '🤖' },
    { name: 'FinTech', icon: '💰' },
    { name: 'Team Collaboration', icon: '👥' },
    { name: 'Project Management', icon: '📋' },
    { name: 'Cross-cultural Communication', icon: '🌍' },
    { name: 'Continuous Learning', icon: '📚' }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">Skills & Expertise</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Extensive experience across multiple technical domains, from frontend to backend, development to deployment.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="space-y-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6 hover-lift">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`h-2.5 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {additionalSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 hover:shadow-md transition-all duration-200 cursor-pointer group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200">
                  {skill.icon}
                </div>
                <span className="text-sm font-medium text-gray-700 text-center">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications or Achievements */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Awards & Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">🏆</div>
              <h4 className="font-semibold text-gray-900 mb-2">Mathematical Modeling</h4>
              <p className="text-gray-600 text-sm">Third Prize, Guangdong Province, National College Student Mathematical Contest in Modeling, 2023</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">💻</div>
              <h4 className="font-semibold text-gray-900 mb-2">Programming Contest</h4>
              <p className="text-gray-600 text-sm">Third Class Honor, 4th SUSTech Programming Contest, 2022</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">🎓</div>
              <h4 className="font-semibold text-gray-900 mb-2">Freshman Scholarship</h4>
              <p className="text-gray-600 text-sm">Excellent Award, Freshman Scholarship of SUSTech, 2020</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">🧠</div>
              <h4 className="font-semibold text-gray-900 mb-2">Mental Olympics</h4>
              <p className="text-gray-600 text-sm">First Prize, Mental Olympics Challenge, 2018</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">🔬</div>
              <h4 className="font-semibold text-gray-900 mb-2">Physics Competition</h4>
              <p className="text-gray-600 text-sm">First Prize, Jiading District, Shanghai Physics Competition for Senior One Students, 2018</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg hover-lift transition-all duration-200">
              <div className="text-3xl mb-4">📊</div>
              <h4 className="font-semibold text-gray-900 mb-2">Mathematics Competition</h4>
              <p className="text-gray-600 text-sm">Third Prize, "Xinzhi" Cup Mathematical Competition for Middle School Students of Putuo District, 2017</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
