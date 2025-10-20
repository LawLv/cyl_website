import useScrollAnimation from '../hooks/useScrollAnimation';

const Experience = () => {
  const [ref, isVisible] = useScrollAnimation();
  const experiences = [
    {
      type: 'education',
      title: 'Master of Science in Software Engineering of Distributed Systems',
      organization: 'KTH Royal Institute of Technology',
      period: '2024 - Present',
      description: 'Currently pursuing MSc in Software Engineering of Distributed Systems with focus on Distributed Systems, Data Science, and AI/ML technologies. Current GPA: 4.3/5.',
      skills: ['Distributed Systems', 'Data Science', 'Software Engineering', 'Machine Learning']
    },
    {
      type: 'education',
      title: 'Bachelor of Engineering in Computer Science and Technology',
      organization: 'Southern University of Science and Technology (SUSTech)',
      period: '2020 - 2023',
      description: 'Major in Computer Science and Technology, Average Score: 82.28/100. Participated in multiple international summer programs and AI research projects.',
      skills: ['Data Structures', 'Algorithms', 'Software Engineering', 'Artificial Intelligence']
    },
    {
      type: 'education',
      title: 'NUS Summer Workshop',
      organization: 'National University of Singapore',
      period: 'July 2023',
      description: 'Focused on cloud computing and AWS services, including intelligent chatbots and big data analysis. Participated in team project to design, develop and deploy functional website on cloud platform.',
      skills: ['AWS', 'Cloud Computing', 'Big Data', 'Intelligent Chatbots']
    },
    {
      type: 'education',
      title: 'Data Science Summer School',
      organization: 'Imperial College London',
      period: 'August 2022',
      description: 'Online summer school in Data Science, Grade: 86%, A-Distinction. Attended lectures and seminars on AI, Machine Learning, Neural Networks and Deep Learning. Completed two AI projects on Computer Vision and Natural Language Processing.',
      skills: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'Natural Language Processing']
    },
    {
      type: 'education',
      title: 'Sustainability Education Program',
      organization: 'Georgia Tech Summer Program',
      period: 'July 2022',
      description: 'Atlanta Summer Program focusing on sustainability education.',
      skills: ['Sustainability', 'Cross-cultural Communication', 'Project Management']
    },
    {
      type: 'project',
      title: 'Deep Reinforcement Learning for Financial Portfolio Management',
      organization: 'Research Project',
      period: 'Feb 2023 - Present',
      description: 'Introduced Reinforcement Learning to cryptocurrency investment market for portfolio decision making. Trained convolutional neural network to make portfolio decisions with expectations of higher yields, lower retracements and higher Sharpe ratios.',
      skills: ['Reinforcement Learning', 'Deep Learning', 'FinTech', 'PyTorch', 'Portfolio Optimization'],
      link: 'https://github.com/LawLv/Portfolio_new'
    },
    {
      type: 'project',
      title: 'Group Task Assignment Management Platform Based on AWS',
      organization: 'NUS Summer Project',
      period: 'July 2023',
      description: 'Designed and developed basic web pages including information display and dialog windows. Connected front-end and back-end data, deployed on cloud platform. Integrated AWS intelligent chatbot for system big data access.',
      skills: ['AWS', 'Web Development', 'Full-stack Integration', 'Intelligent Chatbots', 'Cloud Deployment'],
      link: 'https://github.com/LawLv/Progress_Guard_Front'
    },
    {
      type: 'project',
      title: 'Illuminating Search Spaces by Mapping Elites (PGA-MAP-Elites)',
      organization: 'Research Project',
      period: 'September 2022',
      description: 'Introduced Reinforcement Learning to Quality-Diversity search algorithms to solve robot morphology problems. Implemented policy gradient and crossover genetic algorithms with noise in QDgym environment.',
      skills: ['Reinforcement Learning', 'Genetic Algorithms', 'Robotics', 'Quality-Diversity Algorithms', 'Python'],
      link: 'https://github.com/tsukii7/Quality-diversity-with-reinforcement-learning'
    },
    {
      type: 'project',
      title: 'Hotel Booking System',
      organization: 'Object-oriented Design and Analysis Course Project',
      period: 'November 2022',
      description: 'Led 4 teammates to build hotel booking system with user and management interfaces. Used Vue 2 and Spring Boot for frontend design, self-studied Vue.js and solved technical challenges.',
      skills: ['Vue.js', 'Spring Boot', 'Frontend Development', 'Team Collaboration', 'System Design'],
      link: 'https://github.com/sheepaa/hotel_new'
    },
    {
      type: 'project',
      title: 'Parallel exploration strategy based on NCS',
      organization: 'Undergraduate Thesis',
      period: '2024',
      description: 'Cooperative-Coevolutionary Negatively Correlated Natural Evolution Strategy (CC-NCNES) for high-dimensional optimization. Enhanced scalability of NCNES algorithms within the CC framework, achieving stronger performance.',
      skills: ['Evolutionary Algorithms', 'Optimization', 'Python', 'Mathematical Modeling', 'Research'],
      link: 'https://github.com/LawLv/Cooperative-Coevolutionary-Negatively-Correlated-Natural-Evolution-Strategy'
    },
    {
      type: 'project',
      title: 'Distributed SQL Database',
      organization: 'ID2203 Project',
      period: 'February 2025',
      description: 'Built a distributed SQL database with strong consistency and high availability using OmniPaxos. Tested Docker-based deployment to evaluate reliability-performance trade-offs.',
      skills: ['Rust', 'Docker', 'OmniPaxos', 'SQLx', 'Distributed Systems'],
      link: 'https://github.com/LawLv/omnipaxos-kv'
    },
    {
      type: 'project',
      title: 'Reversi Game',
      organization: 'Artificial Intelligence Course Project',
      period: 'October 2022',
      description: 'Responsible for UI design, game logic and rules design, and code writing. Added extra game features such as undo move and setting remaining game state.',
      skills: ['Game Development', 'UI Design', 'Algorithm Design', 'Artificial Intelligence', 'Java']
    },
    {
      type: 'work',
      title: 'Software Development and Data Processing',
      organization: 'Shanghai Yiye Information Technology Co.',
      period: 'Jan - Feb 2023',
      description: 'Participated in software development and data processing work, gaining practical work experience.',
      skills: ['Software Development', 'Data Processing', 'Industry Internship']
    }
  ];

  const getTypeIcon = (type) => {
    switch (type) {
      case 'education':
        return (
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
            </svg>
          </div>
        );
      case 'work':
        return (
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
            </svg>
          </div>
        );
      case 'project':
        return (
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'education':
        return 'border-blue-200 bg-blue-50';
      case 'work':
        return 'border-green-200 bg-green-50';
      case 'project':
        return 'border-purple-200 bg-purple-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section id="experience" className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">Experience & Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My educational background, work experience, and project portfolio showcasing my growth in software development and AI/ML.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className={`ml-0 md:ml-20 p-8 bg-white border-l-8 ${getTypeColor(exp.type)} hover:shadow-xl transition-all duration-300`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {getTypeIcon(exp.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                        <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                      </div>
                      <p className="text-blue-600 font-medium mb-3">{exp.organization}</p>
                      <p className="text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
                      
                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* GitHub link for projects */}
                      {exp.link && (
                        <div className="mt-4">
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200"
                          >
                            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            View on GitHub
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to know more?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Contact me for full resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;
