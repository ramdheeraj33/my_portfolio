
import { Github, Linkedin, Download, Moon, Sun, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/file/d/1-l5AiQ24NS5FmF-W_4oStetqGIPWKso0/view', '_blank');
  };

  const handleContactInfo = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white py-24 min-h-screen flex items-center font-inter relative">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-20 right-4 z-50 bg-gradient-to-r from-blue-800 to-blue-900 text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
      >
        {isDarkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-shrink-0">
            <img 
              src="/my_portfolio/assets/profile.jpg" alt="Profile"  
              className="w-80 h-80 rounded-full object-cover shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-500 transform border-4 border-white ring-4 ring-blue-300"
              style={{ 
                objectPosition: 'center center', 
                objectFit: 'cover'
              }}
            />
          </div>
          <div className="text-center lg:text-left flex-1">
            <p className="text-2xl mb-4 text-blue-200 animate-fade-in">Hello, I'm</p>
            <h1 className="text-6xl lg:text-7xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
              Ram Dheeraj Kamarajugadda
            </h1>
            <p className="text-3xl mb-12 text-blue-200 font-light animate-fade-in">
              Data Science Graduate | Software Engineer | Analytics Specialist
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-12">
              <Button 
                onClick={handleDownloadCV}
                className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-10 py-4 text-lg font-semibold hover:scale-110 transition-all duration-300 transform shadow-xl rounded-full"
              >
                <Download className="mr-3" size={20} />
                View Resume
              </Button>
              <Button 
                onClick={handleContactInfo}
                className="bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 text-white px-10 py-4 text-lg font-semibold hover:scale-110 transition-all duration-300 transform shadow-xl rounded-full"
              >
                Contact Info
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 animate-fade-in">
              <a href="https://linkedin.com/in/ram-dheeraj" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-3" size={24} />
                LinkedIn
              </a>
              <a href="https://github.com/ramdheeraj33" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3" size={24} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
