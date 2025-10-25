import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SplitText';
import TextType from './TextType';
import LogoLoop from './LogoLoop';
import StarBorder from './StarBorder';
import { 
  SiReact, 
  SiNextdotjs, 
  SiTypescript, 
  SiPython,
  SiCplusplus,
  SiRust,
  SiErlang,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiGit,
  SiDocker,
  SiLinux
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  // 基础技术logo配置
  const techLogos = [
    { node: <FaJava />, title: "Java", href: "https://www.java.com" },
    { node: <SiPython />, title: "Python", href: "https://www.python.org" },
    { node: <SiCplusplus />, title: "C++", href: "https://isocpp.org" },
    { node: <SiRust />, title: "Rust", href: "https://www.rust-lang.org" },
    { node: <SiErlang />, title: "Erlang", href: "https://www.erlang.org" },
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    { node: <SiPostgresql />, title: "PostgreSQL", href: "https://www.postgresql.org" },
    { node: <SiGooglecloud />, title: "Google Cloud", href: "https://cloud.google.com" },
    { node: <SiGit />, title: "Git", href: "https://git-scm.com" },
    { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
    { node: <SiLinux />, title: "Linux", href: "https://www.linux.org" },
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  ];

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
            <div className="text-2xl sm:text-3xl text-white font-light text-center mb-8">
              enjoy CREATE & SHARE
            </div>
            
            {/* 技术Logo轮播 */}
            <div className="mb-16" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={90}
                gap={90}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="transparent"
                ariaLabel="Technology partners"
              />
            </div>
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
              <TextType
                text={["Passionate about sharing knowledge and experiences in Software Engineering, Data Science, and Distributed Systems. Currently pursuing MSc at KTH Royal Institute of Technology in Stockholm."]}
                typingSpeed={30}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                className="text-gray-200 leading-relaxed"
                delay={2000}
              />
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
              <TextType
                text={["Experienced in Python, Java, and AI/ML technologies with a focus on applying machine learning to solve real-world problems. Building innovative solutions for distributed systems."]}
                typingSpeed={30}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                className="text-gray-200 leading-relaxed"
                delay={2300}
              />
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
              <TextType
                text={["Envisioning the future of technology through research and development. Exploring the intersection of artificial intelligence, distributed systems, and real-world applications."]}
                typingSpeed={30}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="_"
                className="text-gray-200 leading-relaxed"
                delay={2600}
              />
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-gray-800 bg-opacity-80 backdrop-blur-sm py-8 mt-8 border border-gray-700 rounded-lg">
            <p className="text-white text-xl text-center mb-4">
              Let's Connect
            </p>
            <div className="flex justify-center space-x-8">
              <a
                href="https://github.com/LawLv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/yilai-chen"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                LinkedIn
              </a>
              <a
                href="mailto:chenyilai2022@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                Email
              </a>
            </div>
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
            <TextType
              text={["专注于分布式系统、数据科学和人工智能领域的研究与开发。在KTH皇家理工学院攻读软件工程硕士学位，致力于将机器学习技术应用于解决现实世界的问题。"]}
              typingSpeed={30}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              className="text-lg text-gray-200 leading-relaxed mb-6"
              delay={2800}
            />
            <TextType
              text={["拥有丰富的Python、Java开发经验，参与过多个AI/ML项目，包括强化学习在金融投资组合管理中的应用、基于AWS的群组任务分配管理平台等。目前正在研究分布式SQL数据库和进化算法优化。"]}
              typingSpeed={30}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
              className="text-lg text-gray-200 leading-relaxed mb-6"
              delay={3200}
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <StarBorder
                as="button"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                color="magenta"
                speed="2s"
                thickness={1}
                className="cursor-pointer"
              >
                Contact Me
              </StarBorder>
              <StarBorder
                as="button"
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                color="magenta"
                speed="2s"
                thickness={1}
                className="cursor-pointer"
              >
                View Experience
              </StarBorder>
              <StarBorder
                as="button"
                onClick={() => window.location.href = '/game'}
                color="magenta"
                speed="2s"
                thickness={1}
                className="cursor-pointer"
              >
                🎮 小游戏
              </StarBorder>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
