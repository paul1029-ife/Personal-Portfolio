import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import myImg from '../assets/myimg.jpg';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  // Refs for animation targets
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const backgroundShapesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Ensure all elements exist
    const elements = [
      containerRef.current,
      nameRef.current,
      subtitleRef.current,
      buttonRef.current,
      contactRef.current,
      imageRef.current,
      ...backgroundShapesRef.current
    ];

    if (elements.some(el => el === null)) return;

    // Main animation timeline
    const tl = gsap.timeline({
      defaults: { 
        duration: 1, 
        ease: 'power4.out' 
      }
    });

    // Particle effect for background
    const createParticles = () => {
      const container = containerRef.current;
      if (!container) return;

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        container.appendChild(particle);

        gsap.set(particle, {
          position: 'absolute',
          width: gsap.utils.random(2, 8),
          height: gsap.utils.random(2, 8),
          borderRadius: '50%',
          backgroundColor: gsap.utils.random(['#3B82F6', '#1E40AF', '#93C5FD']),
          top: '-10%',
          left: gsap.utils.random(0, container.offsetWidth),
          opacity: gsap.utils.random(0.3, 0.8)
        });

        gsap.to(particle, {
          y: container.offsetHeight + 100,
          x: gsap.utils.random(-100, 100),
          rotation: gsap.utils.random(0, 360),
          opacity: 0,
          duration: gsap.utils.random(3, 6),
          repeat: -1,
          delay: gsap.utils.random(0, 2),
          ease: 'none'
        });
      }
    };

    // Complex entrance animations
    tl
      // Container background animation
      .fromTo(containerRef.current, 
        { 
          backgroundColor: 'rgba(255,255,255,0)', 
          scale: 0.9 
        },
        { 
          backgroundColor: 'rgba(255,255,255,1)', 
          scale: 1,
          duration: 1.5 
        }
      )
      // Name with advanced text split
      .fromTo(nameRef.current, 
        { 
          opacity: 0, 
          y: 100, 
          rotationX: -90 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 1.2,
          ease: 'back.out(1.7)'
        },
        0.5
      )
      // Subtitle with perspective
      .fromTo(subtitleRef.current, 
        { 
          opacity: 0, 
          x: -50, 
          rotationY: 90 
        },
        { 
          opacity: 1, 
          x: 0, 
          rotationY: 0,
          duration: 1,
          ease: 'power3.out'
        },
        0.8
      )
      // Button with spring effect
      .fromTo(buttonRef.current, 
        { 
          opacity: 0, 
          scale: 0.5, 
          rotation: -15 
        },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 0.8,
          ease: 'elastic.out(1, 0.3)'
        },
        1
      );

    // Contact info stagger animation
    if (contactRef.current) {
      gsap.fromTo(
        Array.from(contactRef.current.children),
        { 
          opacity: 0, 
          y: 50, 
          rotationX: -90 
        },
        { 
          opacity: 1, 
          y: 0, 
          rotationX: 0,
          duration: 0.7,
          stagger: 0.2,
          ease: 'back.out(1.5)'
        }
      );
    }

    // Image with advanced 3D rotation
    gsap.fromTo(imageRef.current, 
      { 
        opacity: 0, 
        rotation: -15, 
        scale: 0.8,
        transformOrigin: 'center center'
      },
      { 
        opacity: 1, 
        rotation: 0, 
        scale: 1,
        duration: 1.5,
        ease: 'power4.out',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 255, 0.25)'
      }
    );

    // Background shapes with more complex animation
    backgroundShapesRef.current.forEach((shape, index) => {
      if (shape) {
        gsap.fromTo(shape, 
          { 
            scale: 0, 
            opacity: 0,
            rotation: index % 2 ? -45 : 45
          },
          { 
            scale: 1, 
            opacity: 0.6,
            rotation: 0,
            duration: 1.5,
            ease: 'elastic.out(1, 0.3)',
            delay: 1 + index * 0.3
          }
        );

        // Continuous hover effect
        gsap.to(shape, {
          y: index % 2 ? 20 : -20,
          rotation: index % 2 ? 10 : -10,
          duration: 2,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut'
        });
      }
    });

    // Create particle background effect
    createParticles();

    // Cleanup function
    return () => {
      tl.kill();
      // Remove any added particles
      const particles = document.querySelectorAll('.particle');
      particles.forEach(particle => particle.remove());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative flex flex-col justify-center items-start min-h-screen px-6 sm:px-12 md:px-20 lg:px-36 overflow-hidden"
    >
      {/* Text Section */}
      <div className="mb-12 lg:mb-16 z-10 relative">
        <h1 
          ref={nameRef} 
          className="font-inconsolata text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black"
        >
          My Name is <br />
          <span className="cool-text text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">
            Ifeoluwa Agbogun
          </span>
          <span className="animate-pulse">...</span>
        </h1>
        <p 
          ref={subtitleRef} 
          className="text-base sm:text-lg md:text-xl mt-4 text-gray-600"
        >
          <span className='font-bold'>Web Developer</span> based in Nigeria
        </p>
        <button 
          ref={buttonRef}
          className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform ease-out"
        >
          <Link to={'/contact'}>
            Let's talk right now<span className="ml-2">🚀</span>
          </Link>
        </button>
      </div>

      {/* Contact Section */}
      <div 
        ref={contactRef} 
        className="flex flex-col md:flex-row gap-4 mt-6 text-gray-700 z-10 relative"
      >
        <p className="flex items-center space-x-2">
          <span className="font-semibold">📞 +234 906 640 1999</span>
        </p>
        <p className="flex items-center space-x-2">
          <span className="font-semibold">📧 paul.agbogun@gmail.com</span>
        </p>
      </div>

      {/* Image Section */}
      <div className="absolute top-28 right-8 lg:top-24 lg:right-16">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          <img
            ref={imageRef}
            src={myImg}
            alt="Ifeoluwa Agbogun"
            className="w-full h-full rounded-full object-cover shadow-lg hover:translate-x-5"
          />
          {/* Background abstract shapes with GSAP animation refs */}
          <div 
            ref={el => {
              if (backgroundShapesRef.current) {
                backgroundShapesRef.current[0] = el;
              }
            }}
            className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-80"
          ></div>
          <div 
            ref={el => {
              if (backgroundShapesRef.current) {
                backgroundShapesRef.current[1] = el;
              }
            }}
            className="absolute bottom-0 left-0 w-24 h-24 bg-blue-900 rounded-full blur-2xl opacity-80"
          ></div>
        </div>
      </div>

      {/* CSS for particle effect */}
      <style>{`
        .particle {
          position: absolute;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default HomePage;