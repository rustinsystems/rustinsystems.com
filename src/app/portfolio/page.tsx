import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { Cpu, Code, Terminal, GraduationCap, Briefcase, Award, Server, Network, Linkedin, Mail } from "lucide-react";

export default function Portfolio() {
    const skills = {
        infrastructure: [
            "RHEL, CentOS, Debian, Ubuntu, Arch Linux",
            "Systemd, SELinux",
            "Identity & Access Management",
        ],
        cloud: [
            "Docker",
            "KVM / QEMU, Proxmox",
            "Virtual Desktop Infrastructure (VDI)",
            "Synology NAS",
            "AWS (EC2/S3)",
        ],
        networking: [
            "TCP/IP Stack",
            "Cloudflare Zero Trust (SD-WAN)",
            "VPN Configuration (WireGuard/OpenVPN)",
            "Firewalls (UFW/Firewalld/MikroTik)",
        ],
        development: [
            "Ansible (IaC)",
            "Bash, Python",
            "Git / GitHub",
            "CI/CD Pipelines",
        ],
    };

    const projects = [
        {
            title: "Cape Peninsula University of Technology: Enterprise VDI Deployment",
            description: "Architected and deployed an automated Virtual Desktop Infrastructure (VDI) to support concurrent engineering students for remote laboratory access.",
            tags: ["VDI", "Ansible", "Linux", "Networking"],
            highlight: true,
            href: "/blog/Cape%20Peninsula%20University%20of%20Technology:%20Enterprise%20VDI%20Deployment",
        },
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
            company: "Cape Peninsula University of Technology (CPUT)",
            role: "Linux Infrastructure Engineer",
            period: "Feb 2026 – Present",
            achievements: [
                "Architected and deployed an automated Virtual Desktop Infrastructure (VDI) to support 10+ concurrent engineering students for remote laboratory access.",
                "Infrastructure as Code: Authored idempotent Ansible playbooks to fully automate bare-metal server provisioning, custom kernel locking, XFCE GUI optimization, and XRDP configuration.",
                "Identity & Access Management: Engineered a bespoke Bash-based CLI management tool for faculty, automating user lifecycle management, virtualization group permissions, and \"Golden Image\" desktop cloning.",
                "Enterprise Networking: Designed a secure ingress architecture using Cloudflare Zero Trust (SD-WAN), successfully bypassing strict enterprise NAT/firewall restrictions without compromising campus security."
            ]
        },
        {
            company: "Rustin Systems",
            role: "Lead IT Consultant & Systems Administrator",
            period: "Jan 2022 – Present",
            description: "Founded and operated an independent IT consultancy concurrent with earning a BEngTech in Computer Engineering, delivering high-availability infrastructure, network security, and digital transformation solutions to SME clients.",
            achievements: [
                "Hadjie Abdullah Solomon Family Trust: Architected a resilient, self-hosted ecosystem transitioning the organization from legacy infrastructure. Orchestrated a containerized surveillance system (Docker/Frigate NVR) on headless Debian and secured remote administration via WireGuard VPN and hardened MikroTik routing.",
                "Admin Professional: Designed a hybrid digital transformation strategy and a \"Zero-Downtime\" connectivity solution utilizing dedicated UPS systems. Architected a high-performance corporate web platform achieving sub-second load times.",
                "Muhammadeyah Pre-Primary School: Overhauled campus network architecture, deployed dedicated power backup solutions, and standardized the digital environment via Microsoft 365. Extended workstation hardware lifecycles through strategic upgrades and deep-level diagnostics.",
                "Internal Infrastructure: Provisioned and managed Debian/RHEL server environments, engineered automated backup solutions integrating Synology NAS for disaster recovery, and deployed NextJS/MERN applications with Nginx reverse proxies."
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
                    <div className="mt-6 md:mt-0 flex flex-col md:flex-row items-center gap-4">
                        <span className="inline-flex items-center px-6 py-3 border border-charcoal text-base font-medium rounded-md text-silver bg-gunmetal/80 cursor-default">
                            CV available on request
                        </span>
                        <div className="flex space-x-4">
                            <a href="https://www.linkedin.com/in/shahied-rustin/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors bg-gunmetal/80 p-3 rounded-full border border-charcoal hover:border-silver flex items-center justify-center">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="mailto:shahied@rustinsystems.com" className="text-gray-400 hover:text-white transition-colors bg-gunmetal/80 p-3 rounded-full border border-charcoal hover:border-silver flex items-center justify-center">
                                <Mail className="h-5 w-5" />
                                <span className="sr-only">Email</span>
                            </a>
                        </div>
                    </div>
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
                        Linux Systems Administrator and Infrastructure Engineer with 3+ years of commercial experience designing, deploying, and maintaining scalable Linux and cloud environments. Successfully operated an independent IT consultancy concurrent with earning a BEngTech in Computer Engineering.
                        <br /><br />
                        Specialized in RHEL/Debian systems, infrastructure automation (Ansible/Bash), and secure network architecture. Proven track record of managing end-to-end project lifecycles from initial architecture to comprehensive documentation and client handover. I move beyond simply &quot;making it work&quot; to designing secure, resilient IT operations.
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
                                <h3 className="text-lg font-bold font-mono">OS & Core Admin</h3>
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
                                <h3 className="text-lg font-bold font-mono">Infrastructure & Virt</h3>
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
                                <h3 className="text-lg font-bold font-mono">Networking & Security</h3>
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
                                <h3 className="text-lg font-bold font-mono">Automation & Scripting</h3>
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
                                {"description" in job && job.description && (
                                    <p className="text-gray-400 mb-6 relative z-10 leading-relaxed italic">{job.description}</p>
                                )}
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
                                <h3 className="text-xl font-bold text-white">Bachelor of Engineering Technology in Computer Engineering (NQF 7)</h3>
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
