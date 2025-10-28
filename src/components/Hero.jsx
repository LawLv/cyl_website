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
              className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 leading-tight-width"
              delay={800}
              duration={0.8}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 60, rotationX: -90 }}
              to={{ opacity: 1, y: 0, rotationX: 0 }}
              textAlign="center"
            />
            <div className="text-2xl sm:text-3xl font-light text-center mb-8" style={{ color: 'var(--color-light)' }}>
              enjoy CREATE & SHARE
            </div>
            
            {/* 技术Logo轮播 */}
            <div className="mb-16 logoloop-theme" style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
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
                style={{ color: 'var(--color-primary)' }}
                ariaLabel="Technology partners"
              />
            </div>
          </div>

            {/* Three Column Content Blocks */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Sharing Block */}
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
              <SplitTextComponent
                text="Sharing"
                className="text-2xl font-bold mb-4"
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
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
              <SplitTextComponent
                text="Creation"
                className="text-2xl font-bold mb-4"
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
            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
              <SplitTextComponent
                text="Imagine"
                className="text-2xl font-bold mb-4"
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

          {/* Social Media Section - removed per request */}

          {/* Bottom Content Block removed; moved after MagicBento */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
