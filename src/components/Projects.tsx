
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Agentic-Restaurant-Recommendor",
      description: "A conversational AI-driven restaurant recommendation engine that leverages LangChain, Mistral (via Ollama), and Streamlit. It supports dynamic, context-aware conversations to provide restaurant suggestions based on user preferences. By blending collaborative filtering with LLM-based reasoning, the system achieves high top-3 recommendation accuracy and faster user decision-making. Ideal for showcasing GenAI application in personalized services.",
      skills: ["LangChain", "Mistral", "Streamlit", "GenAI", "Collaborative Filtering"],
      githubUrl: "https://github.com/ramdheeraj33/Agentic-Restaurant-Recommendor",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "rag-pdf-chatbot",
      description: "A privacy-first, offline Retrieval Augmented Generation (RAG) chatbot for querying uploaded PDF documents. It uses LangChain with TinyLLaMA via llama.cpp, stores document embeddings in ChromaDB, and supports multi-turn dialogue using Streamlit UI. Useful for legal, academic, or personal document analysis without exposing data to cloud models.",
      skills: ["RAG", "LangChain", "TinyLLaMA", "ChromaDB", "Streamlit"],
      githubUrl: "https://github.com/ramdheeraj33/rag-pdf-chatbot",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "Automatic Summary Generator",
      description: "A web application that generates concise summaries from YouTube videos and uploaded documents. It combines extractive (LSA via Sumy) and abstractive (BART via Transformers) summarization techniques. Features a responsive Flask-based UI and supports transcript extraction directly from YouTube links. Great demonstration of NLP workflow from data acquisition to real-time summary generation.",
      skills: ["Python", "Flask", "BART", "Transformers", "NLP", "Sumy"],
      githubUrl: "https://github.com/ramdheeraj33/Automatic_Summary_Generator",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "MyNoteSpace",
      description: "A modern, real-time note-taking web application built with React, Firebase, and Google Authentication. Offers real-time synchronization across devices, autosave, and secure user login. Designed to mimic tools like Google Keep or Notion, it's a strong example of cloud-based frontend development and live data sync.",
      skills: ["React", "Firebase", "Google Auth", "Real-time Sync", "Cloud"],
      githubUrl: "https://github.com/ramdheeraj33/MyNoteSpace",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "superstore-dashboard",
      description: "An interactive business intelligence dashboard built using Streamlit and Plotly to visualize key performance indicators from Superstore retail data. Includes filters, KPI cards, and dynamic charts to explore trends in sales, profit, and order volumes across categories and time. Great example of turning raw business data into actionable insights.",
      skills: ["Streamlit", "Plotly", "Business Intelligence", "Data Visualization", "KPI"],
      githubUrl: "https://github.com/ramdheeraj33/superstore-dashboard",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "energy-dashboard",
      description: "A complete data visualization project that displays building-level energy usage, cost anomalies, and efficiency KPIs across various locations. Built as an interactive dashboard to support facilities management in identifying performance bottlenecks and optimization opportunities. Emphasizes data storytelling and performance monitoring.",
      skills: ["Data Visualization", "Energy Analytics", "Dashboard", "Performance Monitoring"],
      githubUrl: "https://github.com/ramdheeraj33/energy-dashboard",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "project-final-Data-Diggers",
      description: "A group project centered around stroke prediction using machine learning. Implements classification algorithms (e.g. Naive Bayes, Logistic Regression) to evaluate stroke risk from patient data. Includes feature engineering, model tuning, and evaluation using clinical metrics. Demonstrates health-focused ML and collaboration.",
      skills: ["Machine Learning", "Healthcare", "Classification", "Feature Engineering"],
      githubUrl: "https://github.com/ramdheeraj33/project-final-Data-Diggers",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    },
    {
      title: "SMS-Spam-Detection",
      description: "A supervised machine learning project focused on detecting spam SMS messages using multiple classification models including Logistic Regression, Decision Trees, KNN, Random Forest, and a Stacking Classifier. The project includes data preprocessing, vectorization, training, testing, and comprehensive evaluation using accuracy, sensitivity, specificity, and F1 score. It demonstrates practical application of ML techniques to a real-world binary classification problem.",
      skills: ["Machine Learning", "Classification", "NLP", "Model Evaluation", "Ensemble Methods"],
      githubUrl: "https://github.com/ramdheeraj33/SMS-Spam-Detection",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=800&h=400&fit=crop",
      gradient: "from-blue-800 to-blue-900"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 font-inter">
      {projects.map((project, index) => (
        <div key={index} className="bg-gray-800 dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 transition-all duration-500 transform animate-fade-in border border-slate-200 dark:border-gray-700 overflow-hidden">
          <div className="relative h-48 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white mb-3 flex-1">{project.title}</h3>
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800 to-blue-900 p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg ml-4"
              >
                <Github className="text-white" size={20} />
              </a>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white mb-3 font-medium">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-full text-sm font-medium hover:scale-110 transition-all duration-300 transform cursor-pointer shadow-lg`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <p className="text-white leading-relaxed text-base">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
