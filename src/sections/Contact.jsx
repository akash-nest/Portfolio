import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaTerminal } from "react-icons/fa";
import profilePic from "../assets/footer.png";

const socials = [
    { icon: <FaGithub />,   href: "https://github.com/akash-nest",          label: "GitHub"   },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/akashb521/", label: "LinkedIn" },

];

const Contact = () => (
    <section id="contact" className="relative py-24 bg-primary overflow-hidden">

        {/* ── Background layers ── */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

        {/* Large soft blobs */}
        <div
            className="absolute -top-24 -left-24 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(240,192,64,0.1) 0%, transparent 70%)" }}
        />
        <div
            className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)" }}
        />

        <div className="dot-grid absolute inset-0 opacity-[0.08] pointer-events-none" />

        {/* ── Content ── */}
        <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10 w-full">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 lg:gap-8">

                {/* ════ LEFT: Content (Sticky) ════ */}
                <div className="flex gap-6 md:gap-12 items-start w-full lg:w-[40%] lg:sticky lg:top-32">
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
                        <span className="vertical-text text-[10px] font-mono uppercase tracking-[0.4em] text-accent/50 rotate-180">Let's Connect</span>
                    </motion.div>

                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <FaTerminal className="text-accent text-sm" />
                                <span className="text-accent text-xs uppercase tracking-[0.4em] font-mono">sys.CONTACT_v4</span>
                            </div>
                            
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-black text-text-primary leading-none mb-6">
                                Let's Work
                                <br />
                                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "1px #f0c040" }}> Together</span>
                            </h2>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4 text-text-secondary text-sm sm:text-base leading-relaxed border-l-2 border-accent/20 pl-4 sm:pl-6 mb-8 sm:mb-10"
                        >
                            <p>
                               I’m always open to building impactful and meaningful solutions.
Whether it’s Full Stack Development or AI-driven applications, feel free to reach out. </p>
                            <p className="mt-4 text-white font-medium">
                            
                                <span className="text-accent">Location:</span> Tiruchengode
                            </p>
                            <p className="text-white/80 font-mono text-sm mt-4">
                                {">"} Have an idea or opportunity? Let’s connect and create something impactful
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ════ RIGHT: Interactive Form Box ════ */}
                <div className="relative w-full lg:w-[48%] mt-4 lg:mt-0 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden text-center px-6 py-10 md:px-12 md:py-16 w-full max-w-lg mx-auto"
                        style={{
                            background: "rgba(255,255,255,0.035)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            backdropFilter: "blur(20px)",
                            WebkitBackdropFilter: "blur(20px)",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.05)",
                        }}
                    >
                        {/* Rainbow top accent strip */}
                        <div
                            className="absolute top-0 inset-x-0 h-[2px]"
                            style={{
                                background: "linear-gradient(90deg, #f0c040, #e8a020, #a855f7, #60a5fa)",
                            }}
                        />

                        {/* Soft inner glow */}
                        <div
                            className="absolute inset-0 pointer-events-none"
                            style={{
                                background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(240,192,64,0.06) 0%, transparent 70%)",
                            }}
                        />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center">
                            
                            {/* Avatar Header */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="relative mb-5"
                            >
                                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full p-1 bg-gradient-to-tr from-[#f0c040] to-accent/50 shadow-xl">
                                    <div className="w-full h-full rounded-full overflow-hidden bg-primary">
                                        <img 
                                            src={profilePic} 
                                            alt="Contact Avatar" 
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>
                                </div>
                                {/* Online Status Pulser */}
                                <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#121216] rounded-full shadow-[0_0_10px_rgba(34,197,94,0.6)]">
                                    <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75" />
                                </div>
                            </motion.div>

                            {/* Direct Message Subtext */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.15 }}
                                className="text-xl font-bold text-white mb-1"
                            >
                                Message Akash
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="text-text-secondary text-xs font-mono tracking-widest uppercase mb-10"
                            >
                                <span className="text-green-400 mr-2">●</span>System Online
                            </motion.p>


                            {/* CTA Button */}
                            <motion.a
                                href="mailto:akashspm5@gmail.com"
                                initial={{ opacity: 0, scale: 0.96 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 font-bold rounded-full px-10 py-4 text-base mb-10 w-full justify-center md:w-auto"
                                style={{
                                    background: "linear-gradient(135deg, #f0c040, #e8a020)",
                                    color: "#0a0a0f",
                                    boxShadow: "0 4px 20px rgba(240,192,64,0.3)",
                                }}
                            >
                                <FaEnvelope className="text-lg" />
                                Initiate Contact
                            </motion.a>

                            {/* Divider */}
                            <motion.div
                                initial={{ scaleX: 0, opacity: 0 }}
                                whileInView={{ scaleX: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.3 }}
                                className="w-16 h-px mx-auto mb-8"
                                style={{ background: "rgba(255,255,255,0.3)" }}
                            />

                            {/* Social Icons */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.35 }}
                                className="flex items-center justify-center gap-6"
                            >
                                {socials.map(({ icon, href, label }, i) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={label}
                                        initial={{ opacity: 0, y: 8 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                                        whileHover={{ y: -4, scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-200"
                                        style={{
                                            background: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "#8a8a9a",
                                        }}
                                        onMouseEnter={e => {
                                            e.currentTarget.style.borderColor = "rgba(240,192,64,0.3)";
                                            e.currentTarget.style.color = "#f0c040";
                                            e.currentTarget.style.background = "rgba(240,192,64,0.06)";
                                        }}
                                        onMouseLeave={e => {
                                            e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                                            e.currentTarget.style.color = "#8a8a9a";
                                            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                                        }}
                                    >
                                        {icon}
                                    </motion.a>
                                ))}
                            </motion.div>
                        </div>
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

export default Contact;
