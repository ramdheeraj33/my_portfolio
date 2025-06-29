
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Web Analytics Assistant",
      company: "University of Arizona",
      period: "Feb 2024 – Dec 2024",
      skills: ["SQL", "GA4", "Node.js", "Chart.js", "MySQL"],
      achievements: [
        "Built comprehensive analytics dashboard to visualize data usage patterns across the National Phenology Network's (NPN) data tools, providing stakeholders with clear insights into platform utilization and user engagement metrics",
        "Engineered end-to-end user behavior tracking system for the Phenology Observation Portal and Geoserver Portal using Chart.js, Node.js, and MySQL, empowering the NPN team to derive 60% more actionable insights for research optimization and strategic decision-making initiatives"
      ],
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "AI–ML Engineer Intern",
      company: "Immersion Labs",
      period: "May 2024 – Aug 2024",
      skills: ["Python", "TensorFlow", "Scikit-learn", "OpenCV", "Machine Learning", "Leap Motion"],
      achievements: [
        "Architected and developed advanced hand gesture recognition system for seamless AR/VR integration, enabling intuitive and immersive user interactions in virtual environments through sophisticated computer vision algorithms",
        "Optimized and trained sophisticated neural network models on Leap Motion sensor data, successfully achieving 99% accuracy in gesture classification across multiple gesture categories through advanced feature engineering and model tuning"
      ],
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "Software Engineer",
      company: "JP Morgan Chase & Co.",
      period: "Jan 2021 – Jul 2023",
      skills: ["Python", "SQL", "Tableau", "Jenkins", "Splunk", "NLP", "ETL", "MySQL"],
      achievements: [
        "Developed and maintained sophisticated Tableau dashboards for comprehensive middleware monitoring by seamlessly integrating Python scripts with MySQL for real-time tracking capabilities. Streamlined operations through Jenkins pipeline automation, achieving 60% faster detection of middleware performance issues",
        "Designed innovative NLP-based incident recommendation engine leveraging historical incident data to intelligently suggest optimal resolutions for similar problems, successfully reducing ticket handling time by 40% and improving operational efficiency across the organization",
        "Crafted advanced Splunk queries and constructed custom monitoring dashboards to track traffic patterns and error detection during production releases and host upgrades across 25+ middleware applications, enabling proactive anomaly detection and contributing to $60,000 in annual cost savings",
        "Led critical data center migration initiative for load balancer infrastructure by identifying application consumers through complex SQL queries and collaborating with cross-functional teams to configure secure connectivity via firewall requests. Successfully validated new connectivity for over 80 middleware applications with 100% uptime using comprehensive Splunk log analysis",
        "Automated validation processes for daily code promotions in lower environments by building robust Python-based ETL pipeline integrated with Jenkins, transforming model data into staging tables for QA validation checks, eliminating over 10 hours of manual work per week"
      ],
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto font-inter">
      {experiences.map((exp, index) => (
        <div key={index} className="mb-10 bg-gray-800 dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-2 transition-all duration-500 transform animate-fade-in border border-slate-200 dark:border-gray-700">
          <div className="flex items-start mb-6">
            <div className={`bg-gradient-to-r ${exp.gradient} p-4 rounded-full mr-6 mt-1 hover:scale-110 transition-all duration-300 shadow-lg`}>
              <Briefcase className="text-white" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
              <p className="text-xl text-white font-medium">{exp.company}</p>
              <p className="text-white mb-4 text-lg">{exp.period}</p>
            </div>
          </div>
          
          <div className="mb-6">
            <p className="text-sm text-white mb-3 font-medium">Skills Used:</p>
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`bg-gradient-to-r ${exp.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 transform cursor-pointer shadow-lg`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <ul className="space-y-3 text-white">
            {exp.achievements.map((achievement, achIndex) => (
              <li key={achIndex} className="leading-relaxed hover:text-blue-400 transition-colors duration-300 flex">
                <span className="mr-3 mt-1 text-blue-400 text-sm">●</span>
                <span className="pl-2">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
