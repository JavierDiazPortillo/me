import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Phone, 
  Linkedin, 
  FileText,
  Code,
  Target
} from 'lucide-react';

const sections = {
  inicio: {
    title: "Inicio",
    content: () => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <h2 className="text-5xl font-extrabold mb-4 text-indigo-800">
            Javier Díaz Portillo
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Ingeniero Financiero especializado en innovación estratégica y análisis de inversiones. 
            Candidato CFA con pasión por transformar desafíos financieros en oportunidades.
          </p>
          <div className="flex space-x-4">
            <motion.a 
              href="mailto:javierdiaz.jd161@gmail.com"
              whileHover={{ scale: 1.1 }}
              className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center"
            >
              <Mail className="mr-2" /> Contáctame
            </motion.a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-64 h-64 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-full overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-indigo-300 to-purple-500 opacity-50"></div>
          </div>
        </div>
      </motion.div>
    )
  },
  sobreMi: {
    title: "Sobre Mí",
    content: () => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="space-y-6"
      >
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4 text-indigo-800 flex items-center">
            <GraduationCap className="mr-3 text-indigo-600" /> Educación
          </h3>
          <div>
            <p className="text-xl font-semibold">Universidad Politécnica de Tlaxcala</p>
            <p className="text-gray-600">Ingeniería Financiera (Sep 2021 - Mar 2025)</p>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h3 className="text-3xl font-bold mb-4 text-indigo-800 flex items-center">
            <Award className="mr-3 text-indigo-600" /> Certificaciones
          </h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <Code className="mr-2 text-green-500" />
              Asesor en Estrategias de Inversión (Figura III)
            </li>
            <li className="flex items-center">
              <Target className="mr-2 text-blue-500" />
              Fundamentos Profesionales de Gestión de Proyectos
            </li>
          </ul>
        </div>
      </motion.div>
    )
  },
  proyectos: {
    title: "Proyectos",
    content: () => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-3 gap-8"
      >
        {[
          {
            title: "PymeShield",
            description: "Sistema de protección financiera para PyMEs",
            technologies: ["Finanzas", "Análisis de Riesgo"],
            icon: Briefcase
          },
          {
            title: "Caja de Ahorro UPTx",
            description: "Proyecto de ahorro estudiantil con tercer lugar",
            technologies: ["Fintech", "Educación Financiera"],
            icon: FileText
          },
          {
            title: "Análisis de Inversiones",
            description: "Modelo avanzado de evaluación de estrategias",
            technologies: ["Modelación", "Power BI"],
            icon: Award
          }
        ].map((project, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-white rounded-2xl shadow-xl p-6 text-center"
          >
            <project.icon className="mx-auto mb-4 text-indigo-600" size={48} />
            <h3 className="text-xl font-bold mb-2 text-indigo-800">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex justify-center space-x-2">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    )
  },
  contacto: {
    title: "Contacto",
    content: () => (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-xl mx-auto"
      >
        <h3 className="text-3xl font-bold mb-6 text-indigo-800 text-center">
          Información de Contacto
        </h3>
        <div className="space-y-4">
          <div className="flex items-center bg-indigo-50 p-4 rounded-xl">
            <Mail className="mr-4 text-indigo-600" size={32} />
            <div>
              <p className="font-semibold">Correo Electrónico</p>
              <p className="text-gray-600">javierdiaz.jd161@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center bg-indigo-50 p-4 rounded-xl">
            <Phone className="mr-4 text-indigo-600" size={32} />
            <div>
              <p className="font-semibold">Teléfono</p>
              <p className="text-gray-600">2461389275</p>
            </div>
          </div>
          <div className="flex items-center bg-indigo-50 p-4 rounded-xl">
            <Linkedin className="mr-4 text-indigo-600" size={32} />
            <div>
              <p className="font-semibold">LinkedIn</p>
              <p className="text-gray-600">Javier Díaz Portillo</p>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const sectionRef = useRef(null);

  const handleSectionChange = (section) => {
    setActiveSection(section);
    
    // Scroll to top of section smoothly
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-['Inter', sans-serif]">
      {/* Navegación */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-xl shadow-md z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <h1 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Javier Díaz Portillo
          </h1>
          <div className="flex space-x-4">
            {Object.keys(sections).map((section) => (
              <motion.button
                key={section}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeSection === section
                    ? 'bg-indigo-600 text-white'
                    : 'hover:bg-indigo-100'
                }`}
                onClick={() => handleSectionChange(section)}
              >
                {sections[section].title}
              </motion.button>
            ))}
          </div>
        </div>
      </nav>

      {/* Contenido Principal */}
      <main ref={sectionRef} className="container mx-auto pt-24 px-4 pb-12">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeSection}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {sections[activeSection].content()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-indigo-800 text-white py-8 text-center">
        <p>© 2024 Javier Díaz Portillo | Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Portfolio;
