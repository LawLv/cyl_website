import useScrollAnimation from '../hooks/useScrollAnimation';

const Hero = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="relative pt-20 pb-16 min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/albi-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div 
          ref={ref}
          className={`text-center transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Profile Image */}
          <div className="mb-8">
            <div className="inline-block relative">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg mx-auto">
                <img 
                  src="/images/profile.jpg" 
                  alt="Yilai Chen" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
            Yilai Chen
          </h1>
          <h2 className="text-xl sm:text-2xl text-blue-600 mb-6 font-medium hover:scale-105 transition-transform duration-300 cursor-pointer">
            MSc Software Engineering of Distributed Systems | Data Science Enthusiast
          </h2>

          {/* Introduction */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about Software Engineering, Data Science, and Distributed Systems.
              Currently pursuing MSc in Software Engineering of Distributed Systems at KTH Royal Institute of Technology in Stockholm.
              Experienced in Python, Java, and AI/ML technologies with a focus on 
              applying machine learning to solve real-world problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contact Me
              </button>
              <button
                onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-600 text-gray-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-600 hover:text-white transition-all duration-200"
              >
                View Experience
              </button>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">4.3/5</div>
              <div className="text-gray-600">KTH GPA</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">TOEFL</div>
              <div className="text-gray-600">99</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">TCF</div>
              <div className="text-gray-600">B1-B2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
