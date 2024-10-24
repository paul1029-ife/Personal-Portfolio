import myImg from "../assets/myimg.jpg";
import {
  MapPin,
  Mail,
  Phone,
  Download,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

const About = () => {
  const skills = [
    "React.js",
    "Tailwind CSS",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "Responsive Design",
    "Git",
    "UI/UX",
    "Problem Solving",
  ];

  const stats = [
    { label: "Projects", value: "10+" },
    { label: "Articles", value: "5+" },
    { label: "Hackathons", value: "2" },
  ];

  return (
    <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12 mb-16">
          {/* Image Column */}
          <div className="w-full md:w-1/3">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <img
                src={myImg}
                alt="Agbogun Paul Ifeoluwa"
                className="rounded-full w-64 h-64 object-cover mx-auto relative z-10 border-4 border-white shadow-xl"
              />
            </div>
          </div>

          {/* Info Column */}
          <div className="w-full md:w-2/3 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Agbogun Paul Ifeoluwa</h1>
              <p className="text-xl text-gray-600">
                Front-End Developer & Tech Enthusiast
              </p>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white/50 backdrop-blur rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="text-blue-500" />
                  <span>Lagos, Nigeria</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="text-blue-500" />
                  <span>paul.agbogun@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="text-blue-500" />
                  <span>+234 906 640 1999</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[Github, Linkedin, Twitter].map((Icon, index) => (
                <button
                  key={index}
                  className="p-2 rounded-lg border border-gray-200 hover:border-blue-500 hover:text-blue-500 transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* About Me Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700">
              Hello there! I'm Paul, a 17-year-old Computer Science student at
              the University of Lagos, and a passionate front-end developer. My
              journey in tech started 2020 with a successful hackathon project
              that ranked in the top 20 at an MTN-organized event.
            </p>
            <p className="text-gray-700">
              Beyond coding, I channel my creativity into writing articles for
              young adults, exploring topics like philosophy, faith, and others.
            </p>
            <button
              className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              onClick={() => window.open("/resume.docx")}
            >
              <Download className="h-4 w-4" /> Download CV
            </button>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-100 hover:text-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Overview */}
        <div className="bg-white rounded-xl shadow-sm text-center p-8">
          <h2 className="text-2xl font-bold mb-4">Project Experience</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            From quiz apps to e-commerce platforms, I have built a range of
            projects that have helped me grow as a developer. I am eager to
            continue learning and building new projects that solve real-world
            problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
