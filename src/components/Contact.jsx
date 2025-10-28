import { useState } from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';
import SplitTextComponent from './SimpleSplitText';
import StarBorder from './StarBorder';

const Contact = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // 模拟表单提交
    setTimeout(() => {
      alert('感谢您的留言！我会尽快回复您。');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'chenyilai2022@gmail.com',
      link: 'mailto:chenyilai2022@gmail.com'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      title: 'GitHub',
      value: 'github.com/LawLv',
      link: 'https://github.com/LawLv'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      title: 'LinkedIn',
      value: 'linkedin.com/in/yilai-chen',
      link: 'https://linkedin.com/in/yilai-chen'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'Stockholm, Sweden',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          data-contact-hero
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <SplitTextComponent
            text="Contact Me"
            className="text-4xl sm:text-5xl font-bold mb-6"
            delay={900}
            duration={0.8}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 50 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            style={{ color: '#000000' }}
          />
          <SplitTextComponent
            text="Have a project collaboration or job opportunity? I'd love to connect with you!"
            className="text-xl max-w-3xl mx-auto"
            delay={1400}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            style={{ color: '#000000' }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4 group p-4 rounded-lg transition-all duration-200 cursor-target" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-200" style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)' }}>
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium" style={{ color: 'var(--color-light)' }}>{info.title}</h4>
                      {info.link ? (
                        <a href={info.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-primary)' }}>
                          {info.value}
                        </a>
                      ) : (
                        <p style={{ color: 'var(--color-light)' }}>{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Interests</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 rounded transition-colors duration-200 cursor-target" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
                  <div className="text-xl">🎾</div>
                  <span style={{ color: 'var(--color-light)' }}>Tennis, Fitness, Swimming</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded transition-colors duration-200 cursor-target" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
                  <div className="text-xl">🎬</div>
                  <span style={{ color: 'var(--color-light)' }}>Watching movies, Coding, FPS games</span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded transition-colors duration-200 cursor-target" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)' }}>
                  <div className="text-xl">🎵</div>
                  <span style={{ color: 'var(--color-light)' }}>Playing music</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: 'var(--color-primary)' }}>Social Media</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/LawLv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-target"
                  style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--color-muted)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/yilai-chen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-200 cursor-target"
                  style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)', border: '1px solid var(--color-muted)' }}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-primary)' }}>Send Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-light)' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)', color: 'var(--color-light)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-light)' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                    style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)', color: 'var(--color-light)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-light)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)', color: 'var(--color-light)' }}
                  placeholder="Message subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--color-light)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg transition-colors duration-200 resize-none"
                  style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-muted)', color: 'var(--color-light)' }}
                  placeholder="Please describe your project or question..."
                />
              </div>
              <StarBorder
                as="button"
                type="submit"
                disabled={isSubmitting}
                color="magenta"
                speed="2s"
                thickness={1}
                className="w-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </StarBorder>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
