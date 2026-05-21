import { motion, time } from "framer-motion";
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experiences = [
    {
        id: "01",
        role: "Generative AI Developer Intern",
        company: "Datapattern.AI",
        location: "Coimbatore | Remote",
        type: "Internship",
        duration: "2025",
        timeline: "July - August",
        accentColor: "#f59e0b",
        glowColor: "rgba(245,158,11,0.15)",
        borderColor: "rgba(245,158,11,0.35)",
        tagBg: "rgba(245,158,11,0.1)",
        tagText: "#f59e0b",
        desc: [
            "Built an AI-powered College Event Chatbot using NLP techniques",
            "Integrated RAG pipeline for context-aware and accurate responses",
            "Worked with NLTK, spaCy, Transformers",
        ],
    },
    {
        id: "02",
        role: "Data Engineer Intern",
        company: "Eastcom system PTE LTD | Singapore",
        location: "Remote",
        type: "Internship",
        duration: "2026",
        timeline: "January - May",
        accentColor: "#a855f7",
        glowColor: "rgba(168,85,247,0.15)",
        borderColor: "rgba(168,85,247,0.35)",
        tagBg: "rgba(168,85,247,0.1)",
        tagText: "#a855f7",
        desc: [
            "Developed a PDF data extraction system using Python",
            "Converted unstructured data into clean, structured Excel formats",
            "Ensured data accuracy, validation, and processing efficiency",
        ],
    },
    
];

const Experience = () => {
    return (
        <section id="experience" className="py-16 sm:py-20 md:py-24 bg-primary relative overflow-hidden font-mono">

            {/* Background glows */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)", transform: "translateY(-50%)" }} />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)" }} />

            <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative z-10">

                {/* ── HEADER ── */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-mono mb-4 px-4 py-1.5 rounded-full border"
                        style={{ color: "var(--accent)", borderColor: "rgba(99,102,241,0.25)", background: "rgba(99,102,241,0.08)" }}
                    >
                        My Journey
                    </span>
                    <h2 className="section-title mt-1">
                        Work <span className="text-gradient">Experience</span>
                    </h2>
                </motion.div>

                {/* ── TIMELINE ROW: nodes on top, cards below, all flush ── */}
                <div className="relative">

                    {/* Horizontal connecting line — sits at vertical center of nodes */}
                    <div
                        className="hidden md:block absolute left-0 right-0 z-0"
                        style={{
                            top: 52, /* half of node height (104px) */
                            height: "1px",
                            background: "linear-gradient(to right, transparent, rgba(99,102,241,0.25) 10%, rgba(99,102,241,0.25) 90%, transparent)",
                        }}
                    />

                    {/* 2 columns — each a flex column: node → connector → card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto relative z-10">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.55, delay: index * 0.15 }}
                                className="flex flex-col items-center group"
                            >
                                {/* Node */}
                                <motion.div
                                    whileHover={{ scale: 1.15 }}
                                    className="w-[104px] h-[104px] rounded-full flex flex-col items-center justify-center z-10 flex-shrink-0 border-2 relative"
                                    style={{
                                        background: `radial-gradient(circle at 40% 40%, ${exp.glowColor}, rgba(0,0,0,0.5))`,
                                        borderColor: exp.borderColor,
                                        boxShadow: `0 0 24px ${exp.glowColor}, 0 0 50px ${exp.glowColor}`,
                                    }}
                                >
                                    <div
                                        className="absolute inset-0 rounded-full animate-ping opacity-10"
                                        style={{ background: exp.accentColor }}
                                    />
                                    <span className="text-[10px] tracking-widest uppercase mb-0.5 relative z-10" style={{ color: exp.accentColor }}>
                                        #{exp.id}
                                    </span>
                                    <span className="text-lg font-black text-text-primary relative z-10">{exp.duration}</span>
                                </motion.div>

                                {/* Vertical connector: node → card */}
                                <div
                                    className="w-px h-8 flex-shrink-0"
                                    style={{ background: `linear-gradient(to bottom, ${exp.borderColor}, transparent)` }}
                                />

                                {/* Card — all same top alignment, height: stretch */}
                                <motion.div
                                    whileHover={{ y: -4 }}
                                    transition={{ duration: 0.22 }}
                                    className="w-full relative rounded-2xl overflow-hidden flex-1"
                                    style={{
                                        background: "rgba(255,255,255,0.03)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        boxShadow: "0 4px 30px rgba(0,0,0,0.25)",
                                    }}
                                >
                                    {/* Left accent bar */}
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
                                        style={{ background: exp.accentColor }}
                                    />

                                    {/* Hover glow */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                                        style={{ background: `radial-gradient(ellipse at top left, ${exp.glowColor}, transparent 65%)` }}
                                    />

                                    <div className="relative z-10 p-5 pl-7">

                                        {/* Role */}
                                        <h3 className="text-base font-black text-text-primary leading-tight mb-2 group-hover:text-white transition-colors">
                                            {exp.role}
                                        </h3>

                                        {/* Company + location */}
                                        <div className="flex flex-wrap items-center gap-2 text-[11px] text-text-secondary mb-3">
                                            <span className="flex items-center gap-1">
                                                <FaBriefcase style={{ color: exp.accentColor }} />
                                                {exp.company}
                                            </span>
                                            <span className="opacity-30">·</span>
                                            <span className="flex items-center gap-1">
                                                <FaMapMarkerAlt style={{ color: exp.accentColor }} />
                                                {exp.location}
                                            </span>
                                        </div>

                                        {/* Badges */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            <span
                                                className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full border"
                                                style={{ color: exp.tagText, background: exp.tagBg, borderColor: exp.borderColor }}
                                            >
                                                <FaCalendarAlt className="text-[7px]" /> {exp.duration}
                                            </span>
                                            <span
                                                className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full border"
                                                style={{ color: exp.tagText, background: exp.tagBg, borderColor: exp.borderColor }}
                                            >
                                                {exp.type}
                                            </span>
                                            <span
                                                className="inline-flex items-center gap-1 text-[9px] font-mono px-2 py-0.5 rounded-full border"
                                                style={{ color: exp.tagText, background: exp.tagBg, borderColor: exp.borderColor }}
                                            >
                                                {exp.timeline}
                                            </span>
                                        </div>

                                        {/* Divider */}
                                        <div className="h-px mb-4 opacity-20" style={{ background: exp.accentColor }} />

                                        {/* Bullets */}
                                        <ul className="space-y-2">
                                            {exp.desc.map((item, i) => (
                                                <li key={i} className="flex items-start gap-2 text-[11px] text-text-secondary leading-relaxed">
                                                    <span
                                                        className="mt-[6px] w-1 h-1 rounded-full flex-shrink-0"
                                                        style={{ background: exp.accentColor }}
                                                    />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>

                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* ── BOTTOM STAT BAR ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/5 border border-white/5 rounded-2xl overflow-hidden"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                >
                    {[
                        { label: "Total Positions", val: "02" },
                        { label: "Years Active", val: "2025–26" },
                        { label: "Domains", val: "AI + Data" },
                    ].map(({ label, val }, i) => (
                        <div key={i} className="flex flex-col items-center justify-center py-5 px-4 text-center">
                            <span className="text-xl font-black text-gradient">{val}</span>
                            <span className="text-[10px] text-text-secondary/50 uppercase tracking-widest mt-1">{label}</span>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
};

export default Experience;