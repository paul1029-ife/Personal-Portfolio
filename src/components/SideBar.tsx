import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FolderOpen, PenTool, Mail, Github, Linkedin, Menu, X } from 'lucide-react';

const routes = [
  { name: 'HOME', path: '/', icon: Home },
  { name: 'ABOUT', path: '/about', icon: User },
  { name: 'SERVICES', path: '/services', icon: Briefcase },
  { name: 'PROJECTS', path: '/projects', icon: FolderOpen },
  { name: 'ARTICLES', path: '/articles', icon: PenTool },
  { name: 'CONTACT', path: '/contact', icon: Mail },
];

const socialLinks = [
  { name: 'X', url: 'https://x.com/theactual001', icon: X },
  { name: 'GitHub', url: 'https://github.com/paul1029-ife', icon: Github },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/paul-agbogun01/', icon: Linkedin },
];

export default function Sidebar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
 

  const SidebarContent = () => (
    <div className="flex flex-col h-full px-3 py-4 overflow-y-auto bg-black text-white dark:bg-gray-800">
      <Link to="/" className="flex items-center mb-10 mt-6">
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">Paul's Portfolio</span>
      </Link>
      <nav className="flex-1 space-y-2">
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link
              onClick={() => toggleMobileMenu()}
                to={route.path}
                className={`flex items-center p-2 text-slate-200 rounded-lg transition dark:text-black hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 group ${
                  location.pathname === route.path ? 'bg-gray-800 dark:bg-gray-700 text-black line-through decoration-2 decoration-gray-50' : ''
                }`}
              >
                <route.icon className="w-5 h-5 mr-3" />
                <span className="flex-1">{route.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="pt-6 mt-6 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <h3 className="px-2 text-lg font-semibold dark:text-black">Follow Me</h3>
        <ul>
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-2 hover:text-black text-slate-200 rounded-lg dark:text-black hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <link.icon className="w-5 h-5 mr-3" />
                <span>{link.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className="relative min-h-screen">
      <button
        onClick={toggleMobileMenu}
        className="fixed top-4 left-4 z-50 p-2 bg-gray-200 dark:bg-gray-700 rounded-md lg:hidden"
        aria-label="Toggle sidebar"
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform duration-300 ease-in-out transform ${
          isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:hidden`}
      >
        <SidebarContent />
      </div>

      {/* Desktop sidebar */}
      <aside className="fixed top-0 left-0 z-40 hidden w-64 h-screen lg:block">
        <SidebarContent />
      </aside>

      {/* Main content */}
      <div className="lg:ml-64 p-4">
        <Outlet />
      </div>
    </div>
  );
}