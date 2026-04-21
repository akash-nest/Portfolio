import React from "react";
import {
    FaMapMarkerAlt,
    FaCheckCircle,
    FaEnvelope,
    FaReact,
    FaPython,
    FaDatabase,
    FaTerminal,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiOpenai } from "react-icons/si";
import { motion } from "framer-motion";
import aboutAvatar from "../assets/about.png";

const orbitIcons = [
    { icon: <FaReact className="text-cyan-400 text-xl" />,       angle: 0   },
    { icon: <SiTailwindcss className="text-sky-400 text-xl" />,  angle: 60  },
    { icon: <SiJavascript className="text-yellow-400 text-xl" />,angle: 120 },
    { icon: <FaPython className="text-blue-400 text-xl" />,      angle: 180 },
    { icon: <SiOpenai className="text-emerald-400 text-xl" />,   angle: 240 },
    { icon: <FaDatabase className="text-purple-400 text-xl" />,  angle: 300 },
];

const stats = [
    { val: "8.4", label: "CGPA (MCA)" },
    { val: "7.4",  label: "CGPA (BCOM CA)" },
    { val: "2025", label: "NLP Internship" },
];

const ICON_SIZE   = 44;   // w-11 h-11 in px
const ORBIT_R     = 170;  // orbit radius — must be > avatar half-width
const BOX         = ORBIT_R * 2 + ICON_SIZE + 8; // total square container

const About = () => {
    return (
        <section
            id="about"
            className="min-h-screen bg-secondary relative overflow-hidden font-mono flex items-center py-20"
        >
            {/* Radial glow centred on avatar box */}
            <div
                className="absolute top-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px] pointer-events-none"
                style={{ width: BOX, height: BOX, left: `calc(25% - ${BOX / 2}px)` }}
            />

            {/* Dot grid */}
            <div
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                    backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10 w-full">
                <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-8">
                    
                    {/* ════ LEFT: Avatar & Stats ════ */}
                    <div className="relative w-full lg:w-[40%] flex flex-col items-center justify-center gap-16 mt-12 lg:mt-0">
                        
                        <div
                            className="relative transform scale-75 md:scale-100"
                            style={{ width: BOX, height: BOX }}
                        >
                            {/* Dashed orbit ring */}
                            <div
                                className="absolute rounded-full border border-dashed border-white/[0.12] pointer-events-none"
                                style={{
                                    width:  ORBIT_R * 2,
                                    height: ORBIT_R * 2,
                                    top:    BOX / 2 - ORBIT_R,
                                    left:   BOX / 2 - ORBIT_R,
                                }}
                            />

                            {/* Star behind avatar */}
                            <svg
                                viewBox="0 0 300 300"
                                className="absolute pointer-events-none opacity-[0.08]"
                                fill="currentColor"
                                style={{
                                    width:  ORBIT_R * 1.4,
                                    height: ORBIT_R * 1.4,
                                    top:    BOX / 2 - ORBIT_R * 0.7,
                                    left:   BOX / 2 - ORBIT_R * 0.7,
                                }}
                            >
                                <polygon
                                    points="150,10 190,110 300,110 215,170 245,280 150,215 55,280 85,170 0,110 110,110"
                                    className="text-accent"
                                />
                            </svg>

                            {/* Orbit icons */}
                            {orbitIcons.map(({ icon, angle }, i) => {
                                const rad  = (angle * Math.PI) / 180;
                                const top  = BOX / 2 + Math.sin(rad) * ORBIT_R - ICON_SIZE / 2;
                                const left = BOX / 2 + Math.cos(rad) * ORBIT_R - ICON_SIZE / 2;
                                return (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1, duration: 0.35 }}
                                        style={{
                                            position: "absolute",
                                            top,
                                            left,
                                            width:  ICON_SIZE,
                                            height: ICON_SIZE,
                                            animation: `iconFloat ${2.4 + i * 0.2}s ease-in-out ${i * 0.35}s infinite`,
                                        }}
                                        className="bg-white/[0.06] border border-white/15 rounded-xl flex items-center justify-center shadow-xl z-20"
                                    >
                                        {icon}
                                    </motion.div>
                                );
                            })}

                            {/* Avatar */}
                            <motion.img
                                src={aboutAvatar}
                                alt="Akash B"
                                initial={{ opacity: 0, scale: 0.85 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.55 }}
                                style={{
                                    position:   "absolute",
                                    width:      ORBIT_R * 1.5,
                                    height:     ORBIT_R * 1.5,
                                    top:        BOX / 2 - (ORBIT_R * 1.5) / 2,
                                    left:       BOX / 2 - (ORBIT_R * 1.5) / 2,
                                    objectFit:  "contain",
                                    zIndex:     10,
                                }}
                                className="drop-shadow-2xl"
                            />
                        </div>

                        {/* Move Stats and Tags Below Avatar */}
                        <div className="w-full max-w-md space-y-10">
                            <div className="h-px bg-white/10 w-full" />
                            
                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-6 text-center">
                                {stats.map(({ val, label }, i) => (
                                    <motion.div
                                        key={label}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="space-y-2"
                                    >
                                        <p className="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[rgba(240,192,64,1)] to-[rgba(240,192,64,0.6)]">{val}</p>
                                        <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider leading-tight">
                                            {label}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap justify-center gap-3">
                                {["PYTHON_NLP", "TRANSFORMERS", "UI_UX", "DJANGO", "JAVASCRIPT"].map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] px-3 py-1.5 bg-accent/10 border border-accent/20 text-accent font-bold tracking-widest rounded-sm"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* ════ RIGHT: Content (Sticky) ════ */}
                    <div className="flex gap-8 md:gap-12 items-start w-full lg:w-[55%] lg:sticky lg:top-32">
                        {/* Side Info Bar */}
                        <motion.div 
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="hidden md:flex flex-col items-center gap-8 pt-4"
                        >
                            <div className="flex flex-col gap-6 text-accent">
                                <FaTerminal size={22}/>
                            </div>
                            <div className="w-[1px] h-32 bg-gradient-to-b from-accent to-transparent" />
                            <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.4em] text-accent/50 rotate-180">Profile</span>
                        </motion.div>

                        <div className="flex-1">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <FaTerminal className="text-accent text-sm" />
                                    <span className="text-accent text-xs uppercase tracking-[0.4em] font-mono">sys.PROFILE_v4</span>
                                </div>
                                
                                <h1 className="text-5xl md:text-7xl font-heading font-black text-text-primary leading-none mb-6">
                                    About
                                    <br />
                                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #f0c040" }}> Me</span>
                                </h1>
                            </motion.div>

                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="space-y-4 text-text-secondary text-base leading-relaxed border-l-2 border-accent/20 pl-6 mb-10"
                            >
                                <p>
                                    I am a <span className="text-white font-bold">Full Stack Developer</span>{" "}
                                    focused on building applications where modern web development meets intelligent systems.
 
                                </p>
                                <p>
                                    I work across the stack from designing clean, responsive interfaces to developing backend systems powered by AI, NLP, and Retrieval-Augmented Generation (RAG). My goal is not just to build applications, but to create solutions that are scalable, efficient, and context-aware.

                                </p>
                                <p>
                                    I’m continuously exploring how AI can be integrated into everyday applications to make them more useful, intuitive, and impactful.

                                </p>
                            </motion.div>
                            
                            {/* Status chips */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-col gap-3 pl-6"
                            >
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 text-green-400 text-[11px] w-fit">
                                    <FaCheckCircle className="text-[9px]" />
                                    Available for Hire
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/30 text-accent text-[11px] w-fit">
                                    <FaMapMarkerAlt className="text-[9px]" />
                                    Tamil Nadu, IN
                                </div>
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 text-text-secondary text-[11px] cursor-pointer hover:border-accent/40 w-fit transition-colors">
                                    <FaEnvelope className="text-[9px] text-accent" />
                                    akashspm5@gmail.com
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .vertical-text { writing-mode: vertical-rl; }
                .stroke-text { color: transparent; }
                @keyframes iconFloat {
                    0%, 100% { transform: translateY(0px);  }
                    50%       { transform: translateY(-8px); }
                }
            `}</style>
        </section>
    );
};

export default About;