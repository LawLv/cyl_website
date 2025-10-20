import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="relative pt-32 pb-16 min-h-screen flex items-center bg-gray-800"
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
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              Truth is a<br />
              <span className="text-cyan-400">variable.</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-white font-light">
              enjoy CREATE & SHARE
            </h2>
          </div>

          {/* Three Column Content Blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Sharing Block */}
            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">Sharing</h3>
              <p className="text-gray-800 leading-relaxed">
                Passionate about sharing knowledge and experiences in Software Engineering, 
                Data Science, and Distributed Systems. Currently pursuing MSc at KTH Royal 
                Institute of Technology in Stockholm.
              </p>
            </div>

            {/* Creation Block */}
            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">Creation</h3>
              <p className="text-gray-800 leading-relaxed">
                Experienced in Python, Java, and AI/ML technologies with a focus on 
                applying machine learning to solve real-world problems. Building innovative 
                solutions for distributed systems.
              </p>
            </div>

            {/* Imagine Block */}
            <div className="bg-gray-100 p-8">
              <h3 className="text-2xl font-bold text-cyan-500 mb-4">Imagine</h3>
              <p className="text-gray-800 leading-relaxed">
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
          <div className="bg-gray-100 p-12 mt-8">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">一个技术控。</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              专注于分布式系统、数据科学和人工智能领域的研究与开发。在KTH皇家理工学院攻读软件工程硕士学位，
              致力于将机器学习技术应用于解决现实世界的问题。
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              拥有丰富的Python、Java开发经验，参与过多个AI/ML项目，包括强化学习在金融投资组合管理中的应用、
              基于AWS的群组任务分配管理平台等。目前正在研究分布式SQL数据库和进化算法优化。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-800 text-white px-8 py-4 text-lg font-medium hover:bg-gray-700 transition-colors duration-200"
              >
                Contact Me
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-800 text-gray-800 px-8 py-4 text-lg font-medium hover:bg-gray-800 hover:text-white transition-all duration-200"
              >
                View Experience
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
