
const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "SQL", "C", "C++", "Java", "JavaScript", "R", "HTML"],
      symbol: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["React", "Redux", "Angular", "Node.js", "Express.js", "Spring Boot", "REST APIs"],
      symbol: "🔧"
    },
    {
      title: "ML & AI",
      skills: ["Gen AI & LLMs", "Transformers", "LangChain", "RAG", "TensorFlow", "Scikit-learn", "PySpark", "OpenCV", "NumPy", "Pandas"],
      symbol: "🤖"
    },
    {
      title: "Data Visualization",
      skills: ["Tableau", "Power BI", "Alteryx", "Matplotlib", "Seaborn", "Chart.js", "Streamlit", "Excel"],
      symbol: "📊"
    },
    {
      title: "Databases & Cloud",
      skills: ["MySQL", "MongoDB", "Firebase", "AWS", "Azure", "Big Data tools"],
      symbol: "☁️"
    },
    {
      title: "Other Tools & DevOps",
      skills: ["Microsoft Office Suite", "GA4", "SAS", "Git/GitHub", "CI/CD", "Jenkins", "Shell Scripting"],
      symbol: "⚙️"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-inter">
      {skillCategories.map((category, index) => (
        <div key={index} className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-xl p-8 hover:shadow-2xl hover:scale-110 hover:-translate-y-4 transition-all duration-500 transform animate-fade-in border border-slate-200 dark:border-gray-700">
          <div className="flex items-center mb-6">
            <span className="text-2xl mr-3">{category.symbol}</span>
            <h3 className="text-xl font-semibold text-white">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {category.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-gray-700 dark:bg-gray-700 text-white border border-gray-600 dark:border-gray-600 px-3 py-2 rounded-full text-base font-medium hover:scale-110 hover:shadow-md transition-all duration-300 transform cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
