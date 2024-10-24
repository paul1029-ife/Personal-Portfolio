import { Link } from 'react-router-dom';
import myImg from '../assets/myimg.jpg';

export default function HomePage() {
  return (
    <div className="relative flex flex-col justify-center items-start min-h-screen bg-white px-6 sm:px-12 md:px-20 lg:px-36">
      {/* Text Section */}
      <div className="mb-12 lg:mb-16 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-black">
          My Name is <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-800">Ifeoluwa Agbogun</span>
          <span className="animate-pulse">...</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-600">
          Web Developer based in Nigeria
        </p>
        <button className="mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-800 text-white font-semibold rounded-full shadow-lg hover:scale-105 transform transition-transform ease-out">
            <Link to={'/contact'}>
            Let's talk right now<span className="ml-2">🚀</span>
            </Link>
        </button>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row gap-4 mt-6 text-gray-700 z-10">
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
            src={myImg}
            alt="Ifeoluwa Agbogun"
            className="w-full h-full rounded-full object-cover shadow-lg"
          />
          {/* Background abstract shapes */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-80 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-900 rounded-full blur-2xl opacity-80 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
