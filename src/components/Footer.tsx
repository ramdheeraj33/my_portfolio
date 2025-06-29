
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gradient-to-br from-slate-900 via-blue-900 to-blue-800 text-white py-16 font-roboto">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">Let's Connect</h3>
          <div className="flex flex-wrap justify-center gap-12 mb-8">
            <a href="tel:+15205962644" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg group">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-all duration-300">
                <Phone size={20} />
              </div>
              +1 (520) 596 2644
            </a>
            <a href="mailto:ramdheerajk0310@gmail.com" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg group">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-all duration-300">
                <Mail size={20} />
              </div>
              ramdheerajk0310@gmail.com
            </a>
            <a href="https://linkedin.com/in/ram-dheeraj" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg group" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-all duration-300">
                <Linkedin size={20} />
              </div>
              LinkedIn
            </a>
            <a href="https://github.com/ramdheeraj33" className="flex items-center hover:text-blue-300 hover:scale-125 transition-all duration-300 transform text-lg group" target="_blank" rel="noopener noreferrer">
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full mr-4 group-hover:scale-110 transition-all duration-300">
                <Github size={20} />
              </div>
              GitHub
            </a>
          </div>
          <p className="text-blue-200 text-lg">
            Open to relocation (U.S.) • Available for new opportunities
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
