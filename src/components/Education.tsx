
import { User } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Science (M.S.) in Data Science",
      institution: "University of Arizona, Tucson, AZ",
      period: "Aug 2023 – May 2025",
      status: "Graduated",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science Engineering",
      institution: "JNTU, Hyderabad, India",
      period: "Jul 2017 – Jun 2021",
      status: "Graduated",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto font-roboto">
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {education.map((edu, index) => (
          <div key={index} className="bg-gray-800 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 transform animate-fade-in border border-slate-200 dark:border-gray-700">
            <div className="flex items-start mb-6">
              <div className={`bg-gradient-to-r ${edu.gradient} p-4 rounded-full mr-6 mt-1 hover:scale-110 transition-all duration-300 shadow-lg`}>
                <User className="text-white" size={24} />
              </div>
              <div className="flex-1">
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${edu.gradient} mb-3`}>
                  {edu.status}
                </div>
                <h4 className="text-xl font-semibold text-white dark:text-white mb-2">{edu.degree}</h4>
                <p className="text-white dark:text-white font-medium text-lg">{edu.institution}</p>
                <p className="text-white dark:text-white">{edu.period}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
