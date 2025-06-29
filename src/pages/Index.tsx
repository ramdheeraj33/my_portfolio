
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { Crown } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 font-inter dark:from-gray-900 dark:via-slate-900 dark:to-blue-900">
      <Navigation />
      <Header />
      
      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-r from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">About Me</h2>
          <div className="max-w-5xl mx-auto">
            <div className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-2xl p-10 hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 transform border border-slate-200 dark:border-gray-700">
              <div className="text-white leading-relaxed space-y-6">
                <p className="text-lg flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  <span>Results-oriented engineer with 4+ years of experience in software development, data analytics, and machine learning. Skilled in building scalable, data-driven applications and automation tools that deliver measurable business impact across diverse industries and domains.</span>
                </p>
                <p className="text-lg flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  <span>AWS Certified Developer with demonstrated success at JP Morgan Chase, where I engineered sophisticated NLP-based recommendation engines, real-time monitoring systems, and automated ETL pipelines that reduced operational overhead by 40% and contributed to $60,000 in annual cost savings. Successfully led critical infrastructure migrations with 100% uptime.</span>
                </p>
                <p className="text-lg flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-4 mt-3 flex-shrink-0"></span>
                  <span>Expertise spans full-stack development, advanced machine learning implementations, and cloud-based solutions. Proficient in modern frameworks like React and Angular, with deep knowledge of AI/ML technologies including GenAI, LangChain, and RAG systems for building intelligent applications.</span>
                </p>
                <p className="text-lg font-medium text-blue-400">
                  Passionate about transforming complex technical challenges into elegant, scalable solutions that drive innovation and business growth.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 mt-8">
                <div className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-2 flex items-center">
                    <Crown className="mr-2" size={20} />
                    What Drives Me
                  </h3>
                  <p className="text-white">I'm a passionate chess player who approaches software engineering with the same strategic mindset - analyzing patterns, thinking several moves ahead, and making calculated decisions. Every codebase tells a story, and I excel at architecting solutions that are both elegant and impactful through analytical precision and strategic thinking.</p>
                </div>
                <div className="bg-gray-700 dark:bg-gray-700 p-6 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300">
                  <h3 className="font-semibold text-white mb-2">📍 Location</h3>
                  <p className="text-white">Arizona, USA (Open to relocation)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-l from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-slate-900 dark:to-blue-800">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">Experience</h2>
          <Experience />
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-r from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">Education</h2>
          <Education />
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gradient-to-l from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-slate-900 dark:to-blue-800">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-white via-slate-50 to-blue-50 dark:from-gray-900 dark:via-slate-800 dark:to-blue-900">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">Skills</h2>
          <Skills />
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-gradient-to-l from-white via-slate-50 to-blue-50 dark:from-gray-800 dark:via-slate-900 dark:to-blue-800">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent dark:from-white dark:to-white dark:bg-gradient-to-r">Achievements & Extracurriculars</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform border border-slate-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-blue-400 mb-4">🏆 Certifications</h4>
                <ul className="space-y-3">
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-3">🎖️</span>
                    AWS Certified Developer – Associate (ID: LZSJW5VKRNRQQEGG)
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-3">🤖</span>
                    LLMs and GenAI (Hugging Face)
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-3">🐍</span>
                    Python for Data Science & AI (Coursera)
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-3">📚</span>
                    Machine Learning A-Z (Udemy)
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-center">
                    <span className="mr-3">💻</span>
                    CodeChef Certified DSA Program
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 transform border border-slate-200 dark:border-gray-700">
                <h4 className="text-xl font-bold text-blue-400 mb-4">🥇 Awards & Competitions</h4>
                <ul className="space-y-3">
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-start">
                    <span className="mr-3 mt-1">🏆</span>
                    Winner, Code For Good 2021 (JP Morgan Hackathon) – Designed chatbot recommending optimal stock purchases for users
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-start">
                    <span className="mr-3 mt-1">🏎️</span>
                    AWS DeepRacer Finalist (2021 & 2022) – Team Leader; developed a vehicle model using reinforcement learning that could race around the circuit as quickly as possible
                  </li>
                  <li className="text-white leading-relaxed hover:text-blue-400 transition-colors duration-300 flex items-start">
                    <span className="mr-3 mt-1">🤝</span>
                    National Service Scheme (NSS), SEPathon, and various social innovation hackathons
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
