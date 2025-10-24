import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SplitText';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="relative pt-32 pb-16 min-h-screen flex items-center bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Main Hero Text - Large and Bold */}
          <div className="mb-16">
            <SplitTextComponent
              text="Truth is a"
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
              delay={200}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
            <SplitTextComponent
              text="variable."
              className="text-6xl sm:text-7xl lg:text-8xl font-bold text-cyan-400 mb-8 leading-tight-width"
              delay={800}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              textAlign="center"
            />
            <SplitTextComponent
              text="enjoy CREATE & SHARE"
              className="text-2xl sm:text-3xl text-white font-light"
              delay={1400}
              duration={0.6}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="center"
            />
          </div>

          {/* Three Column Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Sharing Block */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 border border-gray-700">
              <SplitTextComponent
                text="Sharing"
                className="text-2xl font-bold text-cyan-400 mb-4"
                delay={1800}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <p className="text-gray-200 leading-relaxed">
                Passionate about sharing knowledge and experiences in Software Engineering, 
                Data Science, and Distributed Systems. Currently pursuing MSc at KTH Royal 
                Institute of Technology in Stockholm.
              </p>
            </div>

            {/* Creation Block */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 border border-gray-700">
              <SplitTextComponent
                text="Creation"
                className="text-2xl font-bold text-cyan-400 mb-4"
                delay={2000}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <p className="text-gray-200 leading-relaxed">
                Experienced in Python, Java, and AI/ML technologies with a focus on 
                applying machine learning to solve real-world problems. Building innovative 
                solutions for distributed systems.
              </p>
            </div>

            {/* Imagine Block */}
            <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-8 border border-gray-700">
              <SplitTextComponent
                text="Imagine"
                className="text-2xl font-bold text-cyan-400 mb-4"
                delay={2200}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 30 }}
                to={{ opacity: 1, y: 0 }}
              />
              <p className="text-gray-200 leading-relaxed">
                Envisioning the future of technology through research and development. 
                Exploring the intersection of artificial intelligence, distributed systems, 
                and real-world applications.
              </p>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-800 py-8">
            <p className="text-white text-xl">
              @yilai: GitHub、LinkedIn、Email
            </p>
          </div>

          {/* Bottom Content Block */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm p-12 mt-8 border border-gray-700">
            <SplitTextComponent
              text="一个技术控。"
              className="text-3xl font-bold text-white mb-6"
              delay={2400}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
            />
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              专注于分布式系统、数据科学和人工智能领域的研究与开发。在KTH皇家理工学院攻读软件工程硕士学位，
              致力于将机器学习技术应用于解决现实世界的问题。
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              拥有丰富的Python、Java开发经验，参与过多个AI/ML项目，包括强化学习在金融投资组合管理中的应用、
              基于AWS的群组任务分配管理平台等。目前正在研究分布式SQL数据库和进化算法优化。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-cyan-500 text-white px-8 py-4 text-lg font-medium hover:bg-cyan-600 transition-colors duration-200"
              >
                Contact Me
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 text-lg font-medium hover:bg-cyan-400 hover:text-white transition-all duration-200"
              >
                View Experience
              </button>
              <button
                onClick={() => window.location.href = '/game'}
                className="bg-green-500 text-white px-8 py-4 text-lg font-medium hover:bg-green-600 transition-colors duration-200"
              >
                🎮 小游戏
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
