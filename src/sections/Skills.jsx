import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    FaReact, FaHtml5, FaCss3Alt, FaPython, FaGitAlt, 
    FaFigma, FaBrain, FaMicrosoft, FaWindows, FaLinux 
} from "react-icons/fa";
import { 
    SiJavascript, SiMongodb, SiMysql, SiCanva, SiPostman, 
    SiDjango, SiAdobephotoshop, SiAdobeillustrator, SiBootstrap, 
    SiFlask, SiFastapi 
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const categories = [
    { id: "all", label: "All Tech" },
    { id: "languages", label: "Languages" },
    { id: "frameworks", label: "Frameworks" },
    { id: "backend", label: "Backend" },
    { id: "database", label: "Databases" },
    { id: "design", label: "Design" },
    { id: "software", label: "Software" },
    { id: "networking", label: "Networking & OS" },
    {id: "AI/Gen AI", label: "AI & Gen AI"},
];

const skills = [
    { name: "Python", icon: <FaPython />, iconColor: "#3776AB", category: "languages", desc: "Core Development & Scripting" },
    { name: "JavaScript", icon: <SiJavascript />, iconColor: "#F7DF1E", category: "languages", desc: "Dynamic Web Applications" },
    { name: "HTML5", icon: <FaHtml5 />, iconColor: "#E34F26", category: "languages", desc: "Document Structure" },
    { name: "CSS3", icon: <FaCss3Alt />, iconColor: "#1572B6", category: "languages", desc: "Responsive Styling" },
    { name: "React JS", icon: <FaReact />, iconColor: "#61DAFB", category: "frameworks", desc: "Component-Based UIs" },
    { name: "Bootstrap", icon: <SiBootstrap />, iconColor: "#7952B3", category: "frameworks", desc: "CSS Utility Framework" },
    { name: "Django", icon: <SiDjango />, iconColor: "#092E20", category: "backend", desc: "Robust Web Framework" },
    { name: "Flask", icon: <SiFlask />, iconColor: "#ffffff", category: "backend", desc: "Micro Web Framework" },
    { name: "FastAPI", icon: <SiFastapi />, iconColor: "#05998B", category: "backend", desc: "High-Performance APIs" },
    { name: "SQL", icon: <SiMysql />, iconColor: "#4479A1", category: "database", desc: "Relational Database (RDBMS)" },
    { name: "Mongo DB", icon: <SiMongodb />, iconColor: "#47A248", category: "database", desc: "NoSQL Database" },
    { name: "Canva", icon: <SiCanva />, iconColor: "#00C4CC", category: "design", desc: "Visual Content Design" },
    { name: "Photoshop", icon: <SiAdobephotoshop />, iconColor: "#31A8FF", category: "design", desc: "Advanced Image Editing" },
    { name: "Illustrator", icon: <SiAdobeillustrator />, iconColor: "#FF9A00", category: "design", desc: "Vector Graphics & Logos" },
    { name: "Figma", icon: <FaFigma />, iconColor: "#F24E1E", category: "design", desc: "UI/UX Design & Prototyping" },
    { name: "Git & GitHub", icon: <FaGitAlt />, iconColor: "#F05032", category: "software", desc: "Version Control Systems" },
    { name: "VS Code", icon: <VscVscode />, iconColor: "#007ACC", category: "software", desc: "Primary Code Editor" },
    { name: "MS Office", icon: <FaMicrosoft />, iconColor: "#D83B01", category: "software", desc: "Productivity Tools" },
    { name: "Windows", icon: <FaWindows />, iconColor: "#0078D6", category: "networking", desc: "Operating System" },
    {name: "NLP", icon: <FaBrain />, iconColor: "#94a3b8", category: "AI/Gen AI", desc: "Natural Language Processing" },
    {name: "RAG", icon: <FaBrain />, iconColor: "#14b8a6", category: "AI/Gen AI", desc: "Retrieval-Augmented Generation" },
    {name:"LangChain", icon: <FaBrain />, iconColor: "#a855f7", category: "AI/Gen AI", desc: "Language Model Framework" },
    {name:"Prompt Engineering", icon: <FaBrain />, iconColor: "#f0c040", category: "AI/Gen AI", desc: "Crafting Effective Prompts" },
    {name:"LLM Integration", icon: <FaBrain />, iconColor: "#05998B", category: "AI/Gen AI", desc: "Integrating Large Language Models" },
];

const Skills = () => {
    const [active, setActive] = useState("all");
    const filtered = active === "all" ? skills : skills.filter(s => s.category === active);

    return (
        <section id="skills" className="py-20 bg-secondary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-3 mb-2">
                        <span className="h-px w-8 bg-accent/60" />
                        <p className="text-accent text-[10px] uppercase tracking-[0.3em] font-mono font-bold">Expertise</p>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-black text-text-primary">
                        Technical <span className="text-gradient">Stacks</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-8 items-start">
                    {/* Navigation Sidebar */}
                    <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible pb-4 no-scrollbar">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                onClick={() => setActive(cat.id)}
                                className={`px-4 py-2.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-300 whitespace-nowrap border ${
                                    active === cat.id 
                                    ? "bg-accent text-secondary border-accent shadow-[0_5px_15px_rgba(240,192,64,0.2)]" 
                                    : "bg-white/[0.02] text-text-secondary border-white/5 hover:border-accent/40"
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Uniform Skills Grid */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar content-start"
                        >
                            {filtered.map((skill, i) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: i * 0.03 }}
                                    whileHover={{ y: -3 }}
                                    className="group p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all flex flex-col h-[140px] justify-between overflow-hidden"
                                >
                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div 
                                                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0 transition-colors"
                                                style={{ 
                                                    backgroundColor: `${skill.iconColor}15`,
                                                    color: skill.iconColor,
                                                    border: `1px solid ${skill.iconColor}30`
                                                }}
                                            >
                                                {skill.icon}
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-text-primary font-bold text-sm leading-tight group-hover:text-white truncate">
                                                    {skill.name}
                                                </h4>
                                                <p className="text-accent font-mono text-[8px] uppercase tracking-tighter opacity-60">
                                                    {skill.category}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-text-secondary text-xs leading-relaxed opacity-80 line-clamp-2">
                                            {skill.desc}
                                        </p>
                                    </div>
                                    
                                    {/* Bottom Progress Bar Effect */}
                                    {/* <div className="w-full h-0.5 bg-white/5 mt-4 rounded-full overflow-hidden">
                                        <div 
                                            className="h-full opacity-0 group-hover:opacity-100 transition-all duration-500 w-0 group-hover:w-[40%]" 
                                            style={{ backgroundColor: skill.iconColor }}
                                        />
                                    </div> */}
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar { display: none; }
                .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255, 255, 255, 0.02); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 10px; }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }
            `}</style>
        </section>
    );
};

export default Skills;