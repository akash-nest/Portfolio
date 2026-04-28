import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaTerminal } from "react-icons/fa";

const projects = [
    {
        title: "College Event NLP Chatbot",
        desc: "Developed a College Event Guide Chatbot using Python NLP (NLTK, spaCy, Transformers) with RAG, supported by data collected through web scraping.",
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
        desc: "RAG-QA is a question-answering system built using Retrieval-Augmented Generation (RAG) to provide accurate answers from documents or external data sources. It enhances response quality by retrieving relevant context and combining it with LLM-based generation.",
        tech: ["python", "RAG", "Langchain", "ChromaDB"],
        github: "https://github.com/akash-nest/RAG-QA",
        accentColor: "#3b82f6",
        glowColor: "rgba(59,130,246,0.15)",
        borderColor: "rgba(59,130,246,0.3)",
        tag: "RAG / Langchain",
        number: "03",
    },
    {
        title: "Local Problem Solver Hub",
        desc: "LocalProblemSolverHub is a collaborative platform where users can report local issues and developers work together to create effective solutions. It aims to bridge real-world problems with technology to improve community-driven problem solving.",
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

    return (
        <section id="projects" className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="dot-grid absolute inset-0 opacity-10 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-10 lg:gap-8">

                    {/* ════ RIGHT/TOP: Navigation ════ */}
                    <div className="flex flex-col gap-8 lg:w-[45%] w-full z-20">

                        {/* Header */}
                        <div className="flex gap-5 items-start">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="hidden md:flex flex-col items-center gap-5 pt-2 flex-shrink-0"
                            >
                                <FaTerminal className="text-accent" size={20} />
                                <div className="w-[1px] h-16 bg-gradient-to-b from-accent to-transparent" />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <FaTerminal className="text-accent text-sm" />
                                    <span className="text-accent text-xs uppercase tracking-[0.4em] font-mono">Portfolio.exec</span>
                                </div>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black text-text-primary leading-none mb-4 sm:mb-6">
                                    Selected
                                    <br />
                                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #f0c040" }}>Works</span>
                                </h2>
                                <p className="text-text-secondary text-sm sm:text-base max-w-sm leading-relaxed border-l-2 border-accent/20 pl-4 py-1">
                                    Explore a highlighted selection of scalable backends and intelligent digital interfaces.
                                </p>
                            </motion.div>
                        </div>

                        {/* Interactive project list */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col ml-0 md:ml-[3.5rem]"
                        >
                            <p className="text-accent/80 text-[10px] font-mono font-bold tracking-[0.3em] uppercase mb-4 pl-4">Item List</p>
                            <ul className="flex flex-col relative z-30 mb-4 border-l border-white/10 ml-4 py-2 space-y-1">
                                {projects.map((project, idx) => (
                                    <li
                                        key={idx}
                                        onClick={() => setCurrentIndex(idx)}
                                        className={`relative group flex items-center gap-4 sm:gap-5 py-2.5 sm:py-3 pl-6 sm:pl-8 cursor-pointer transition-all duration-300 ${idx === currentIndex ? "text-white" : "text-text-secondary hover:text-white/80"}`}
                                    >
                                        {/* Dot on the list border */}
                                        <div className={`absolute left-[-5px] w-2.5 h-2.5 rounded-full transition-all duration-500 ${idx === currentIndex ? "bg-accent shadow-[0_0_12px_#f0c040] scale-125" : "bg-white/10 group-hover:bg-white/30"}`} />
                                        <span className={`font-mono text-[10px] sm:text-[11px] font-bold transition-colors duration-300 flex-shrink-0 ${idx === currentIndex ? "text-white" : ""}`}>
                                            {String(idx + 1).padStart(2, "0")}
                                        </span>
                                        <h3 className={`font-medium text-sm sm:text-base md:text-[1.1rem] tracking-wide transition-all duration-300 truncate ${idx === currentIndex ? "translate-x-1" : ""}`}>
                                            {project.title}
                                        </h3>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* ════ LEFT/BOTTOM: Active Project Card ════ */}
                    <div className="w-full lg:w-[50%] lg:mt-10">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="relative flex flex-col justify-between min-h-[320px] sm:min-h-[380px] md:min-h-[420px] rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 md:p-10 border overflow-hidden w-full"
                                style={{
                                    background: "rgba(15, 15, 20, 0.98)",
                                    borderColor: projects[currentIndex].borderColor,
                                    boxShadow: `0 20px 60px -10px ${projects[currentIndex].glowColor}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                                    backdropFilter: "blur(20px)",
                                }}
                            >
                                {/* Decorative Background Icon */}
                                <div className="absolute -right-8 -top-8 opacity-[0.03]">
                                    <FaTerminal className="text-[10rem] sm:text-[15rem] -rotate-12" />
                                </div>

                                {/* Top Section */}
                                <div>
                                    <div className="flex justify-between items-start mb-6 sm:mb-10 sm:mb-12">
                                        <div
                                            className="w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center font-black text-xl sm:text-2xl border"
                                            style={{
                                                color: projects[currentIndex].accentColor,
                                                background: projects[currentIndex].glowColor,
                                                borderColor: projects[currentIndex].borderColor
                                            }}
                                        >
                                            {projects[currentIndex].number}
                                        </div>
                                        <a
                                            href={projects[currentIndex].github}
                                            className="p-2.5 sm:p-3 rounded-full border bg-white/5 border-white/10 hover:bg-white/10 text-text-secondary hover:text-white transition-all z-10 relative"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <FaGithub className="text-lg sm:text-xl" />
                                        </a>
                                    </div>

                                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] mb-3 block text-accent">
                                        // {projects[currentIndex].tag}
                                    </span>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-text-primary">
                                        {projects[currentIndex].title}
                                    </h3>
                                    <p className="text-text-secondary text-sm sm:text-base leading-relaxed relative z-10">
                                        {projects[currentIndex].desc}
                                    </p>
                                </div>

                                {/* Bottom Tech Tags */}
                                <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                                    {projects[currentIndex].tech.map((t, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 sm:px-3 py-1 text-[10px] rounded-md font-mono border"
                                            style={{
                                                background: "rgba(255,255,255,0.03)",
                                                borderColor: "rgba(255,255,255,0.1)",
                                                color: "rgba(255,255,255,0.6)",
                                            }}
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>

                                {/* Bottom Accent Glow */}
                                <div
                                    className="absolute bottom-0 left-0 h-1 w-full"
                                    style={{ background: `linear-gradient(to right, ${projects[currentIndex].accentColor}, transparent)` }}
                                />
                            </motion.div>
                        </AnimatePresence>
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