import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SimpleSplitText';

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const galleryImages = [
    {
      src: "/images/travel1.jpg",
      alt: "Mountain hiking adventure",
      title: "Mountain Adventure",
      description: "Exploring breathtaking mountain landscapes"
    },
    {
      src: "/images/travel2.jpg", 
      alt: "Stargazing under the night sky",
      title: "Night Sky",
      description: "Contemplating under the stars"
    },
    {
      src: "/images/travel3.jpg",
      alt: "Coastal cliff exploration", 
      title: "Coastal Views",
      description: "Discovering dramatic coastal scenery"
    },
    {
      src: "/images/travel4.jpg",
      alt: "Lakeside reflection",
      title: "Lakeside Serenity", 
      description: "Peaceful moments by the water"
    },
    {
      src: "/images/travel5.jpg",
      alt: "Countryside road journey",
      title: "Countryside Journey",
      description: "Exploring rural landscapes"
    },
    {
      src: "/images/travel6.jpg",
      alt: "Canal city exploration",
      title: "Canal City",
      description: "Discovering historic waterways"
    },
    {
      src: "/images/travel7.jpg",
      alt: "Harbor waterfront",
      title: "Harbor Views",
      description: "Urban waterfront experiences"
    },
    {
      src: "/images/travel8.jpg",
      alt: "Eiffel Tower sunset",
      title: "Paris Sunset",
      description: "Iconic landmarks at golden hour"
    }
  ];

  return (
    <section 
      id="gallery" 
      className="py-16 relative"
      style={{
        backgroundImage: 'url(/images/albi-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-gray-800/70"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <SplitTextComponent
            text="Travel & Life"
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
            delay={700}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
          <SplitTextComponent
            text="Capturing moments from my journeys across different countries and cultures. From mountain peaks to city streets, each experience shapes my perspective."
            className="text-xl text-gray-200 max-w-3xl mx-auto"
            delay={1200}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
          />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="cursor-target group relative overflow-hidden rounded-lg shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white/10 backdrop-blur-sm"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                  <p className="text-xs opacity-90">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to see more of my adventures?</p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="cursor-target bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
