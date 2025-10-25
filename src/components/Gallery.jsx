import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SimpleSplitText';
import Masonry from './Masonry';
import StarBorder from './StarBorder';

const Gallery = () => {
  const [ref, isVisible] = useScrollAnimation();
  
  const galleryImages = [
    {
      id: "1",
      img: "/images/travel1.jpg",
      url: "#",
      height: 400,
      title: "Mountain Adventure",
      description: "Exploring breathtaking mountain landscapes"
    },
    {
      id: "2", 
      img: "/images/travel2.jpg",
      url: "#",
      height: 300,
      title: "Night Sky",
      description: "Contemplating under the stars"
    },
    {
      id: "3",
      img: "/images/travel3.jpg",
      url: "#",
      height: 500,
      title: "Coastal Views",
      description: "Discovering dramatic coastal scenery"
    },
    {
      id: "4",
      img: "/images/travel4.jpg",
      url: "#",
      height: 350,
      title: "Lakeside Serenity", 
      description: "Peaceful moments by the water"
    },
    {
      id: "5",
      img: "/images/travel5.jpg",
      url: "#",
      height: 450,
      title: "Countryside Journey",
      description: "Exploring rural landscapes"
    },
    {
      id: "6",
      img: "/images/travel6.jpg",
      url: "#",
      height: 320,
      title: "Canal City",
      description: "Discovering historic waterways"
    },
    {
      id: "7",
      img: "/images/travel7.jpg",
      url: "#",
      height: 380,
      title: "Harbor Views",
      description: "Urban waterfront experiences"
    },
    {
      id: "8",
      img: "/images/travel8.jpg",
      url: "#",
      height: 420,
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

        {/* Masonry Gallery */}
        <div className="min-h-[800px]">
          {isVisible && (
            <Masonry
              items={galleryImages}
              ease="power3.out"
              duration={0.6}
              stagger={0.05}
              animateFrom="bottom"
              scaleOnHover={true}
              hoverScale={0.95}
              blurToFocus={true}
              colorShiftOnHover={false}
            />
          )}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">Want to see more of my adventures?</p>
          <StarBorder
            as="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            color="magenta"
            speed="2s"
            thickness={1}
            className="cursor-pointer"
          >
            Let's Connect
          </StarBorder>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
