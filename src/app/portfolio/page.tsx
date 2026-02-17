import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Cpu, Code, Terminal, GraduationCap, Briefcase, Award, Server, Network } from "lucide-react";

export default function Portfolio() {
    const skills = {
        infrastructure: [
            "RHEL 9, Debian, Arch Linux",
            "Systemd, SELinux",
            "User Management",
            "Bash Scripting",
        ],
        cloud: [
            "Docker",
            "KVM / QEMU",
            "AWS (EC2/S3 basics)",
            "Synology NAS",
            "Proxmox",
        ],
        networking: [
            "TCP/IP Stack",
            "DNS Management (CloudDNS)",
            "VPN Configuration (WireGuard/OpenVPN)",
            "UFW / Firewalld",
            "Network Flow Optimisation",
        ],
        development: [
            "Python (Automation)",
            "Git / GitHub",
            "CI/CD Pipelines",
            "SQL / Neo4j",
        ],
    };

    const projects = [
        {
            title: "High-Performance AI Infrastructure",
            description: "Architected a video synthesis pipeline on Arch Linux, optimizing GPU scheduling via CUDA and Python to reduce rendering time by 96%.",
            tags: ["Arch Linux", "CUDA", "Python", "GPU Optimization"],
            highlight: true,
            href: "/blog/Video%20to%20Video%20AI%20summary",
        },
        {
            title: "Admin Professional: From Digital Identity to Physical Resilience",
            description: "Full-stack Next.js web presence and office infrastructure overhaul ensuring operational continuity during power instability.",
            tags: ["Next.js", "Zoho Mail", "UPS", "Infrastructure"],
            highlight: true,
            href: "/blog/Admin%20Professional:%20From%20Digital%20Identity%20to%20Physical%20Resilience",
        },
        {
            title: "Municipal Infrastructure Database",
            description: "Designed a Neo4j graph database to model complex public works dependencies, outperforming MySQL in query speed for deep-link relationships.",
            tags: ["Neo4j", "Graph Theory", "Database Design"],
            href: "/blog",
        },
        {
            title: "IoT Ecosystem & Automation Orchestration",
            description: "Custom IoT ecosystem with NAS integration, IP surveillance, and Docker orchestration for a smart home environment.",
            tags: ["IoT", "Docker", "Home Assistant", "Networking"],
            href: "/blog",
        },
    ];

    const experience = [
        {
            company: "Rustin Systems",
            role: "Linux Systems Administrator (Contract)",
            period: "Jan 2022 – Present",
            achievements: [
                "Specialized in designing and maintaining high-availability Linux infrastructure for SME clients.",
                "Infrastructure & Virtualization: Provisioned and managed Debian/RHEL server environments, utilizing Docker for containerized application deployment and resource isolation.",
                "Network Architecture: Optimized network topology using Cisco, VyOS, and MikroTik equipment to reduce latency and ensure secure remote access via VPN/SSH tunneling.",
                "Automation & Backup: Engineered automated backup solutions using Bash scripting and Cron jobs, integrating Synology NAS for off-site disaster recovery.",
                "Systems Integration: Deployed NextJS/MERN web applications with Nginx reverse proxies and SSL termination."
            ]
        },
        {
            company: "Hadjie Abdullah Solomon Family Trust",
            role: "Infrastructure Engineer and Systems Architect (Contract)",
            period: "Oct 2022 – Present",
            achievements: [
                "Architected a comprehensive digital transformation strategy, transitioning the organization from legacy infrastructure to a resilient, self-hosted ecosystem.",
                "AI-Driven Security: Orchestrated a containerized surveillance system using Docker and Frigate NVR on headless Debian, leveraging Raspberry Pi edge nodes for real-time object detection.",
                "Network Security: Secured remote site administration via WireGuard VPN tunneling and hardened MikroTik routing configurations to eliminate attack surface exposure.",
                "Power Engineering: Designed and fabricated a custom DC-DC power distribution system interfacing with EcoFlow units, guaranteeing 100% network uptime during grid instability.",
                "Data Sovereignty: Deployed a Synology NAS private cloud architecture with automated fleet backups, ensuring data integrity without reliance on public cloud subscriptions."
            ]
        },
        {
            company: "Admin Professional",
            role: "Full Stack Engineer & Infrastructure Consultant (Contract)",
            period: "Feb 2022 – Oct 2022",
            achievements: [
                "Engineered a hybrid digital transformation strategy, combining modern web performance with physical operational resilience.",
                "Business Continuity: Designed and deployed a “Zero-Downtime” connectivity solution, integrating dedicated Network UPS systems to maintain Wi-Fi infrastructure during grid instability.",
                "Full-Stack Development: Architected a high-performance corporate platform using Next.js and React, delivering sub-second load times.",
                "Identity Management: Executed a complete domain migration and DNS configuration via Zoho Mail, establishing secure, branded communication channels."
            ]
        },
        {
            company: "Muhammadeyah Pre-Primary School",
            role: "Network Administrator (Freelance)",
            period: "Feb 2022 – Nov 2022",
            achievements: [
                "Executed a holistic IT modernization strategy, stabilizing campus infrastructure and extending asset lifecycles to reduce capital expenditure.",
                "Infrastructure Resilience: Overhauled the campus network architecture, eliminating dead zones and deploying dedicated UPS power backup solutions to ensure continuous connectivity.",
                "Asset Lifecycle Management: Extended workstation hardware lifespan by an estimated 2 years through deep-level diagnostics and strategic component upgrades (SSD/RAM).",
                "Cloud Administration: Standardized the digital environment via Microsoft 365, configuring unified security policies and optimizing Windows 10/11 fleet performance."
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-slate-900 pb-20">
            {/* Header */}
            <div className="bg-gunmetal border-b border-charcoal pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div>
                        <h1 className="text-4xl font-bold text-white mb-4 font-mono">Shahied Rustin</h1>
                        <p className="text-xl text-silver font-mono">Linux Systems Administrator | Infrastructure Engineer</p>
                    </div>
                    <a
                        href="/Shahied_Rustin_Linux_Admin.pdf"
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
                        I am an Infrastructure Engineer and Linux Administrator focused on building reliable, secure systems. With a BEngTech in Computer Engineering, I move beyond &apos;making it work&apos; to &apos;making it scale.&apos;
                        <br /><br />
                        My core focus is <strong>Linux Systems Administration</strong> (RHEL/Debian), <strong>Automation</strong>, and <strong>Network Security</strong>.
                        I am actively seeking roles in Linux Administration, NOC, or DevOps where I can apply engineering rigor to IT operations.
                    </p>
                </div>

                {/* Skills Matrix */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Technical Arsenal
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Infrastructure */}
                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Terminal className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Infrastructure</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.infrastructure.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Cloud */}
                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Server className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Cloud & Virt</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.cloud.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Networking */}
                        <div className="bg-gunmetal/30 p-6 rounded-lg border border-charcoal">
                            <div className="flex items-center mb-4 text-silver">
                                <Network className="h-6 w-6 mr-2" />
                                <h3 className="text-lg font-bold font-mono">Networking</h3>
                            </div>
                            <ul className="space-y-2">
                                {skills.networking.map(skill => (
                                    <li key={skill} className="text-gray-400 text-sm flex items-start">
                                        <span className="text-silver mr-2">›</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Development */}
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
                    </div>
                </div>

                {/* Experience Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Professional Experience
                    </h2>
                    <div className="space-y-8">
                        {experience.map((job) => (
                            <div key={job.company} className="bg-gunmetal/30 p-8 rounded-lg border border-charcoal relative overflow-hidden group hover:border-silver/30 transition-colors">
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Briefcase className="w-24 h-24" />
                                </div>
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                                    <span className="text-silver font-mono text-sm bg-gunmetal/80 px-3 py-1 rounded border border-charcoal mt-2 md:mt-0 inline-block">{job.period}</span>
                                </div>
                                <h4 className="text-lg text-silver mb-4 font-mono relative z-10">{job.company}</h4>
                                <ul className="space-y-2 relative z-10">
                                    {job.achievements.map((item, index) => (
                                        <li key={index} className="text-gray-400 text-sm flex items-start">
                                            <span className="text-green-500 mr-2">✓</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Featured Projects */}
                <div className="mb-20">
                    <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                        <span className="w-8 h-1 bg-silver mr-4"></span>
                        Key Engineering Projects
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <Link key={project.title} href={project.href} className="block h-full">
                                <ProjectCard {...project} />
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Education & Certifications */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-25">
                    {/* Education */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="w-8 h-1 bg-silver mr-4"></span>
                            Education
                        </h2>
                        <div className="bg-gunmetal p-6 md:p-8 rounded-lg border border-charcoal flex flex-col md:flex-row items-start h-full border-l-blue-600">
                            <div className="bg-slate-900 p-3 rounded-full mb-4 md:mb-0 md:mr-6 border border-charcoal flex-shrink-0">
                                <GraduationCap className="h-8 w-8 text-silver" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">BEngTech in Computer Engineering</h3>
                                <p className="text-silver font-mono mt-1">Cape Peninsula University of Technology (CPUT)</p>
                                <p className="text-gray-500 mt-2 text-sm font-mono">Feb 2021 – Nov 2025</p>
                                <p className="text-gray-500 mt-4 text-sm">
                                    Focus on embedded systems, software engineering, and network infrastructure.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
                            <span className="w-8 h-1 bg-silver mr-4"></span>
                            Certifications
                        </h2>
                        <div className="bg-gunmetal p-6 md:p-8 rounded-lg border border-charcoal flex flex-col md:flex-row items-start h-full border-l-4 border-l-red-600">
                            <div className="bg-slate-900 p-3 rounded-full mb-4 md:mb-0 md:mr-6 border border-charcoal flex-shrink-0">
                                <Award className="h-8 w-8 text-silver" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Red Hat Certified System Administrator (RHCSA)</h3>
                                <p className="text-silver font-mono mt-1">In Progress (Expected Q2 2026)</p>
                                <p className="text-gray-500 mt-4 text-sm">
                                    Validating proficiency in RHEL system administration, users, security, and automation.
                                </p>

                                <div className="mt-6 border-t border-charcoal/50 pt-6">
                                    <h3 className="text-xl font-bold text-white">Certified Full Stack Web Developer</h3>
                                    <p className="text-silver font-mono mt-1">AstroLabs, Dubai (UAE) | 2022</p>
                                    <p className="text-gray-500 mt-4 text-sm">
                                        MERN Stack: React.js, Node.js, and DevOps basics. Architected the commercial platform for Admin Professional.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
