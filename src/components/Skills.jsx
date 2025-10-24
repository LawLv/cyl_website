import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SimpleSplitText';

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
    <section id="skills" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <SplitTextComponent
            text="Skills & Expertise"
            className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6"
            delay={500}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <SplitTextComponent
            text="Extensive experience across multiple technical domains, from frontend to backend, development to deployment."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            delay={1000}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
        </div>

        {/* Compact Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-100 p-6">
              <h3 className="text-xl font-bold text-cyan-500 mb-6 text-center">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out group-hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills & Awards Combined */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Additional Skills */}
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-bold text-cyan-500 mb-6 text-center">Additional Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {additionalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-3 bg-white rounded hover:shadow-md transition-all duration-200 cursor-pointer group"
                >
                  <div className="text-xl mr-3 group-hover:scale-110 transition-transform duration-200">
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Awards & Achievements */}
          <div className="bg-gray-100 p-6">
            <h3 className="text-xl font-bold text-cyan-500 mb-6 text-center">Awards & Achievements</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">🏆</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Mathematical Modeling</h4>
                  <p className="text-gray-600 text-xs">Third Prize, Guangdong Province, 2023</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">💻</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Programming Contest</h4>
                  <p className="text-gray-600 text-xs">Third Class Honor, SUSTech, 2022</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">🎓</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Freshman Scholarship</h4>
                  <p className="text-gray-600 text-xs">Excellent Award, SUSTech, 2020</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">🧠</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Mental Olympics</h4>
                  <p className="text-gray-600 text-xs">First Prize, 2018</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">🔬</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Physics Competition</h4>
                  <p className="text-gray-600 text-xs">First Prize, Jiading District, 2018</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 p-3 bg-white rounded hover:shadow-md transition-all duration-200">
                <div className="text-2xl">📊</div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">Mathematics Competition</h4>
                  <p className="text-gray-600 text-xs">Third Prize, Putuo District, 2017</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
