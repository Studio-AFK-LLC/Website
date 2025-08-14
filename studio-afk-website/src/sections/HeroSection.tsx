import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [typingText, setTypingText] = useState('');
  const fullText = 'solving real-world problems';
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Typing effect
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setTypingText(prev => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index]);
  
  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-highlight/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-1 bg-accent/20 text-accent rounded-full font-medium text-sm">
              Mobile App Software Company
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-text">
              Studio <span className="text-highlight">AfK</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl font-medium text-text-secondary">
              Creating digital products with clean design, <br />
              <span className="text-highlight">{typingText}</span>
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
            </h2>
            
            <p className="text-text-secondary max-w-lg">
              We're an independent app development company focused on building tools and experiences that solve real-world problems with clean design, strong privacy practices, and straightforward functionality.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="btn btn-primary">
                Our Projects
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-highlight opacity-20 blur-lg rounded-full"></div>
            <div className="relative aspect-square max-w-md mx-auto rounded-lg overflow-hidden border-4 border-secondary bg-primary p-4">
              <div className="grid grid-cols-2 gap-2 h-full">
                <div className="space-y-2">
                  <div className="bg-secondary rounded h-1/2 flex items-center justify-center text-4xl">
                    <span className="text-highlight">Af</span>
                  </div>
                  <div className="bg-secondary rounded h-1/2 p-3">
                    <div className="flex flex-col h-full justify-between">
                      <div className="h-2 w-12 bg-highlight/50 rounded-full"></div>
                      <div className="space-y-1">
                        <div className="h-1 w-full bg-accent/30 rounded-full"></div>
                        <div className="h-1 w-2/3 bg-accent/30 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="bg-secondary rounded h-1/3 p-2">
                    <div className="h-full w-full bg-highlight/20 rounded flex items-center justify-center">
                      <div className="h-3 w-3 bg-highlight rounded-full"></div>
                    </div>
                  </div>
                  <div className="bg-secondary rounded h-2/3 flex items-center justify-center text-4xl">
                    <span className="text-accent">K</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
