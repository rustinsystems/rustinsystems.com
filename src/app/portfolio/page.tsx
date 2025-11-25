import ProjectCard from "@/components/ProjectCard";
import { Cpu, Code, Terminal, GraduationCap } from "lucide-react";

export default function Portfolio() {
    const skills = {
        engineering: [
            "Embedded Systems (Raspberry Pi, Arduino)",
            "Control Systems",
            "Signal Processing",
            "Quantization",
        ],
        development: [
            "Python (AI/Data)",
            "C",
            "GLSL",
            "Full Stack (MERN)",
        ],
        ops: [
            "Advanced Linux (Arch/Debian)",
            "Server Automation",
            "Network Architecture",
        ],
    };

    const projects = [
        {
            title: "AI Video Synthesis System",
            description: "Capstone project featuring a 3-layer AI system with GPU optimisation via CUDA on Arch Linux. Demonstrated high-performance computing capabilities.",
            tags: ["AI", "CUDA", "Arch Linux", "Python"],
            highlight: true,
        },
        {
            title: "Infrastructure Maintenance Database",
            description: "Research project applying graph theory using Neo4j vs MySQL for flow optimisation in maintenance systems.",
            tags: ["Graph Theory", "Neo4j", "MySQL", "Research"],
        },
        {
            title: "Enterprise Windows Server Roll-out",
            description: "Led a team to 1st place in a competition, managing Active Directory, Virtualisation, and secure deployment strategies.",
            tags: ["Windows Server", "Active Directory", "Virtualisation"],
        },
        {
            title: "Embedded Home Automation",
            description: "Custom IoT ecosystem with NAS integration, IP surveillance, and Docker orchestration for a smart home environment.",
            tags: ["IoT", "Docker", "Home Assistant", "Networking"],
        },
    ];

    return (
        <div className="min-h-screen bg-slate-900 pb-20">
            {/* Header */}
            <div className="bg-gunmetal border-b border-charcoal pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-4 font-mono">Shahied Rustin</h1>
                        <p className="text-xl text-silver font-mono">Computer Engineering Graduate (BEngTech)</p>
                    </div>
                    <a
                        href="/RustinCV.pdf"
                        download
                        className="mt-6 md:mt-0 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-silver hover:bg-white transition-all duration-300 shadow-[0_0_15px_rgba(192,192,192,0.2)]"
                    >
                        <span className="mr-2">Download CV</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Bio */}
                <div className="mb-16 max-w-4xl">
                    <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        About Me
                    </h2>
                    <p className="text-lg text-gray-400 leading-relaxed border-l-2 border-charcoal pl-6">
                        I am a Computer Engineering graduate (BEngTech) who approaches problems through an engineering lens—applying graph theory, signal processing, and mathematical optimisation to build efficient systems. My expertise lies in High-Performance Computing and Infrastructure.
                    </p>
                </div>

                {/* Skills Matrix */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Technical Arsenal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Cpu className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Engineering</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.engineering.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Code className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Development</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.development.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Terminal className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Ops / Admin</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.ops.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Featured Projects */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Featured Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <ProjectCard key={project.title} {...project} />
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Education
                    </h2>
                    <div className="bg-gunmetal p-8 rounded-lg border border-charcoal flex items-start">
                        <div className="bg-slate-900 p-3 rounded-full mr-6 border border-charcoal">
                            <GraduationCap className="h-8 w-8 text-silver" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-white">BEngTech in Computer Engineering</h3>
                            <p className="text-silver font-mono mt-1">Cape Peninsula University of Technology (CPUT)</p>
                            <p className="text-gray-500 mt-4 text-sm">
                                Focus on embedded systems, software engineering, and network infrastructure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
