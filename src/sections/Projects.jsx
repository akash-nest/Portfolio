import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaTerminal } from "react-icons/fa";

const projects = [
    {
        title: "College Event NLP Chatbot",
        desc: " Developed a College Event Guide Chatbot using Python NLP (NLTK, spaCy, Transformers) with RAG,supported by data collected through web scraping ",
        tech: ["Python", "NLTK", "spaCy", "Transformers"],
        github: "https://github.com/akash-nest/EventChatbot",
        accentColor: "#8b5cf6",
        glowColor: "rgba(139,92,246,0.15)",
        borderColor: "rgba(139,92,246,0.3)",
        tag: "NLP / RAG",
        number: "01",
    },
    {
        title: "Promptrix",
        desc: "Promptrix is a prompt engineering framework that helps structure and optimize inputs for Large Language Models efficiently. It enables modular prompt design with better token management and dynamic content handling for improved AI performance.",
        tech: ["Python", "FastAPI", "React", "Prompt Engineering"],
        github: "https://github.com/akash-nest/Promptrix",
        accentColor: "#10b981",
        glowColor: "rgba(16,185,129,0.15)",
        borderColor: "rgba(16,185,129,0.3)",
        tag: "Python / PromptEngineering",
        number: "02",
    },
    {
        title: "RAG Q&A",
        desc: "RAG-QA - is a question-answering system built using Retrieval-Augmented Generation (RAG) to provide accurate answers from documents or external data sources. It enhances response quality by retrieving relevant context and combining it with LLM-based generation.",
        tech: ["python", "RAG", "Langchain", "ChromaDB"],
        github: "https://github.com/akash-nest/RAG-QA",
        accentColor: "#3b82f6",
        glowColor: "rgba(59,130,246,0.15)",
        borderColor: "rgba(59,130,246,0.3)",
        tag: "RAG / Langchain",
        number: "03",
    },
    {
        title: "Local probelm solver hub",
        desc: " LocalProblemSolverHub is a collaborative platform where users can report local issues and developers work together to create effective solutions. It aims to bridge realworld problems with technology to improve community-driven problem solving.",
        tech: ["React", "FastAPI", "OpenAI", "Flask"],
        github: "https://github.com/akash-nest/LocalProblemSolverHub",
        accentColor: "#f43f5e",
        glowColor: "rgba(244,63,94,0.15)",
        borderColor: "rgba(244,63,94,0.3)",
        tag: "Fullstack / Community",
        number: "04",
    },
];

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isManuallySelected, setIsManuallySelected] = useState(false);

    useEffect(() => {
        if (isHovered || isManuallySelected) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projects.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isHovered, isManuallySelected]);

    return (
        <section id="projects" className="py-24 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-16 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-8 min-h-[500px]">

                    {/* ════ LEFT: Stacked Cards ════ */}
                    <div
                        className="relative w-full lg:w-[48%] mt-0 lg:mt-16 min-h-[460px] flex justify-center lg:block"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {projects.map((project, index) => {
                            let diff = index - currentIndex;
                            if (diff < 0) {
                                diff += projects.length;
                            }

                            const isVisible = diff <= 2;
                            const xOffset = isVisible ? diff * -25 : -100;
                            const scale = isVisible ? 1 - (diff * 0.06) : 0.8;
                            const zIndex = 30 - diff;
                            const opacity = isVisible ? 1 - (diff * 0.25) : 0;
                            const isActive = diff === 0;

                            return (
                                <motion.div
                                    key={index}
                                    initial={false}
                                    animate={{
                                        x: xOffset,
                                        y: 0,
                                        scale,
                                        opacity,
                                        zIndex
                                    }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="absolute top-0 right-0 lg:right-4 w-full sm:w-[85%] lg:w-[95%] group flex flex-col justify-between min-h-[420px] rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-10 border transition-colors duration-500"
                                    style={{
                                        background: "rgba(15, 15, 20, 0.98)", // Solid dark to stack functionally
                                        borderColor: isActive ? project.borderColor : "rgba(255,255,255,0.06)",
                                        boxShadow: isActive ? `0 20px 60px -10px ${project.glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)` : "none",
                                        backdropFilter: "blur(20px)",
                                        pointerEvents: isActive ? "auto" : "none",
                                        transformOrigin: "right center"
                                    }}
                                >
                                    {/* Decorative Background Icon */}
                                    <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500">
                                        <FaTerminal className="text-[15rem] -rotate-12" />
                                    </div>

                                    {/* Top Section */}
                                    <div>
                                        <div className="flex justify-between items-start mb-12">
                                            <div
                                                className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl border transition-colors duration-500"
                                                style={{
                                                    color: project.accentColor,
                                                    background: project.glowColor,
                                                    borderColor: project.borderColor
                                                }}
                                            >
                                                {project.number}
                                            </div>
                                            <a
                                                href={project.github}
                                                className={`p-3 rounded-full border transition-all z-10 relative ${isActive ? 'bg-white/5 border-white/10 hover:bg-white/10 text-text-secondary hover:text-white' : 'border-transparent text-transparent pointer-events-none'}`}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <FaGithub className="text-xl" />
                                            </a>
                                        </div>

                                        <span className={`font-mono text-[10px] uppercase tracking-[0.3em] mb-4 block transition-colors duration-500 ${isActive ? 'text-accent' : 'text-accent/30'}`}>
                                            // {project.tag}
                                        </span>
                                        <h3 className={`text-2xl md:text-3xl font-bold mb-6 transition-colors ${isActive ? 'text-text-primary group-hover:text-white' : 'text-text-secondary/50'}`}>
                                            {project.title}
                                        </h3>
                                        <p className="text-text-secondary text-base leading-relaxed mb-8 relative z-10">
                                            {project.desc}
                                        </p>
                                    </div>

                                    {/* Bottom Tech Section */}
                                    <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                        {project.tech.map((t, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-[10px] rounded-md font-mono border transition-colors"
                                                style={{
                                                    background: isActive ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                                                    borderColor: isActive ? "rgba(255,255,255,0.1)" : "transparent",
                                                    color: isActive ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.2)",
                                                }}
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Bottom Accent Glow */}
                                    <div
                                        className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-700"
                                        style={{ background: `linear-gradient(to right, ${project.accentColor}, transparent)` }}
                                    />
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* ════ RIGHT: Menu & Content ════ */}
                    <div className="flex flex-col gap-12 lg:w-[45%] w-full z-20 mt-8 lg:mt-0">

                        {/* Headers */}
                        <div className="flex gap-6 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="hidden md:flex flex-col items-center gap-6 pt-2"
                            >
                                <FaTerminal className="text-accent" size={20} />
                                <div className="w-[1px] h-20 bg-gradient-to-b from-accent to-transparent" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <FaTerminal className="text-accent text-sm" />
                                    <span className="text-accent text-xs uppercase tracking-[0.4em] font-mono">Portfolio.exec</span>
                                </div>
                                <h1 className="text-4xl md:text-6xl font-heading font-black text-text-primary leading-none mb-6">
                                    Selected
                                    <br />
                                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #f0c040" }}> Works</span>
                                </h1>
                                <p className="text-text-secondary text-sm md:text-base max-w-sm leading-relaxed border-l-2 border-accent/20 pl-4 py-1">
                                    Explore a highlighted selection of scalable backends and intelligent digital interfaces.
                                </p>
                            </motion.div>
                        </div>

                        {/* Interactive Item List (Modeled after reference image) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col ml-0 md:ml-[3.5rem] relative"
                        >
                            <p className="text-accent/80 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-6 pl-4">Item List</p>

                            <ul className="flex flex-col relative z-30 mb-8 border-l border-white/10 ml-4 py-2 space-y-2">
                                {projects.map((project, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => {
                                            setCurrentIndex(idx);
                                            setIsManuallySelected(true);
                                        }}
                                        className={`relative group flex items-center gap-5 py-3 pl-8 cursor-pointer transition-all duration-300 ${idx === currentIndex ? "text-white" : "text-text-secondary hover:text-white/80"}`}
                                    >
                                        {/* Dot on the list border */}
                                        <div className={`absolute left-[-5px] w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "bg-accent shadow-[0_0_12px_#f0c040] scale-125" : "bg-white/10 group-hover:bg-white/30"}`} />

                                        <span className={`font-mono text-[11px] font-bold transition-colors duration-300 ${idx === currentIndex ? "text-white" : ""}`}>
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className={`font-medium md:text-[1.1rem] tracking-wide transition-all duration-300 ${idx === currentIndex ? "translate-x-1" : ""}`}>
                                            {project.title}
                                        </h3>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                    </div>
                </div>
            </div>

            <style jsx>{`
                .vertical-text { writing-mode: vertical-rl; }
                .stroke-text { color: transparent; }
                .dot-grid {
                    background-image: radial-gradient(circle, #f0c040 1px, transparent 1px);
                    background-size: 30px 30px;
                }
            `}</style>
        </section>
    );
};

export default Projects;