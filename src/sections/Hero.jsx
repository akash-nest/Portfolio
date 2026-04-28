import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown, FaCodeBranch, FaAward } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import heroAvatar from "../assets/Hero_png.png";

const resumeFilePath = "/Akash_Resume.pdf";

const Hero = () => {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center relative overflow-hidden bg-primary pt-24 sm:pt-28 lg:pt-0"
        >
            {/* ── Background Elements ── */}
            <div
                className="absolute inset-0 z-0 opacity-10"
                style={{
                    background: "linear-gradient(110deg, #f0c040 0%, transparent 40%)",
                    clipPath: "polygon(0 0, 60% 0, 40% 100%, 0% 100%)"
                }}
            />
            <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">

                    {/* ════ LEFT: Content ════ */}
                    <div className="flex gap-6 md:gap-12 items-start w-full lg:w-auto">
                        {/* Side Info Bar — desktop only */}
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="hidden md:flex flex-col items-center gap-8 pt-4 flex-shrink-0"
                        >
                            <div className="flex flex-col gap-6">
                                <a href="https://github.com/akash-nest" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-all hover:scale-125"><FaGithub size={22} /></a>
                                <a href="https://www.linkedin.com/in/akashb521/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-all hover:scale-125"><FaLinkedin size={22} /></a>
                            </div>
                            <div className="w-[1px] h-32 bg-gradient-to-b from-accent to-transparent" />
                            <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.4em] text-accent/50 rotate-180">Scroll Down</span>
                        </motion.div>

                        <div className="flex-1 min-w-0">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                            >
                                <h1 className="text-[2.5rem] xs:text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading font-black text-text-primary leading-[0.9] mb-5 sm:mb-6 tracking-tight">
                                    Akash
                                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #f0c040" }}>B</span>
                                </h1>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading font-semibold text-text-primary mb-5 sm:mb-6"
                            >
                                <Typewriter
                                    options={{
                                        strings: ["Full Stack Developer", "Gen AI Developer", "AI Engineer", "UI/UX Designer"],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-text-secondary text-sm sm:text-base lg:text-lg max-w-md mb-8 sm:mb-10 leading-relaxed border-l-2 border-accent/20 pl-4 sm:pl-6"
                            >
                                Building intelligent web applications by combining modern
                                <span className="text-white"> full-stack development </span>
                                with cutting-edge AI solutions.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="flex flex-wrap gap-3 sm:gap-4"
                            >
                                <a href={resumeFilePath} download className="btn-primary px-5 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none font-bold skew-x-[-12deg] hover:skew-x-0 transition-all text-xs sm:text-sm lg:text-base">
                                    <span className="skew-x-[12deg] inline-flex items-center gap-2">
                                        <FaDownload size={13} /> DOWNLOAD CV
                                    </span>
                                </a>
                                <Link to="contact" smooth={true} className="btn-outline px-5 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-none cursor-pointer skew-x-[-12deg] hover:skew-x-0 transition-all group text-xs sm:text-sm lg:text-base">
                                    <span className="skew-x-[12deg] inline-block group-hover:text-accent">HIRE ME</span>
                                </Link>
                            </motion.div>

                            {/* Mobile Social Links */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex md:hidden gap-5 mt-7"
                            >
                                <a href="https://github.com/akash-nest" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-all"><FaGithub size={20} /></a>
                                <a href="https://www.linkedin.com/in/akashb521/" target="_blank" rel="noreferrer" className="text-text-secondary hover:text-accent transition-all"><FaLinkedin size={20} /></a>
                            </motion.div>
                        </div>
                    </div>

                    {/* ════ RIGHT: Avatar & Stats ════ */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative w-full lg:w-[50%] flex justify-center py-8 sm:py-14 lg:py-0"
                    >
                        {/* Glow Background */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-accent/10 rounded-full blur-[80px] sm:blur-[120px] pointer-events-none" />

                        <div className="relative">
                            {/* Main Avatar */}
                            <img
                                src={heroAvatar}
                                alt="Akash B"
                                className="w-[200px] xs:w-[230px] sm:w-[260px] md:w-[280px] lg:w-[300px] relative z-20 object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                            />

                            {/* STAT 1: Projects (Top Right) */}
                            <motion.div
                                animate={{ y: [0, -20, 0], x: [0, 5, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                whileHover={{ scale: 1.1, rotate: 2 }}
                                className="absolute top-4 -right-2 sm:-right-4 md:-right-8 z-30 bg-primary/60 border border-accent/40 p-2 sm:p-3 md:p-4 backdrop-blur-md shadow-2xl cursor-default flex flex-col justify-center"
                            >
                                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-accent" />
                                <p className="text-accent font-black text-xl sm:text-2xl md:text-3xl italic leading-none">03+</p>
                                <p className="text-[7px] sm:text-[8px] md:text-[9px] uppercase font-mono tracking-widest text-text-secondary">Projects Done</p>
                            </motion.div>

                            {/* STAT 3: Learning (Bottom Right) */}
                            <motion.div
                                animate={{ y: [0, -15, 0], x: [0, 12, 0] }}
                                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
                                whileHover={{ scale: 1.1 }}
                                className="absolute bottom-6 -right-2 sm:-right-4 md:-right-12 z-30 bg-primary/60 border border-white/5 p-2 sm:p-3 md:p-4 backdrop-blur-md shadow-2xl flex items-center gap-2 md:gap-3"
                            >
                                <div className="p-1.5 sm:p-2 bg-white/5 text-accent rounded-full border border-white/10">
                                    <FaAward size={14} />
                                </div>
                                <div>
                                    <p className="text-white text-[9px] sm:text-[10px] font-bold leading-none">Learning</p>
                                    <p className="text-text-secondary text-[7px] sm:text-[8px] font-mono">Continuous Growth</p>
                                </div>
                            </motion.div>

                            {/* STAT 4: Commits (Bottom Left) */}
                            <motion.div
                                animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
                                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 1.2 }}
                                whileHover={{ scale: 1.1 }}
                                className="absolute -bottom-4 -left-2 sm:left-0 z-30 bg-accent p-2 md:p-3 shadow-[0_10px_30px_rgba(240,192,64,0.3)] flex items-center gap-1.5 sm:gap-2"
                            >
                                <FaCodeBranch className="text-primary" size={12} />
                                <span className="text-primary font-black text-[9px] sm:text-xs uppercase tracking-tighter italic">Weekly Commits++</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
                <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-accent">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <FaArrowDown className="text-accent" size={14} />
                </motion.div>
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

export default Hero;
