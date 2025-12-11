import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Server, Network, Code, Wrench, Building, Users } from "lucide-react";
import { getSortedPostsData } from "@/lib/posts";

export default async function Home() {
  const allPosts = getSortedPostsData();

  const caseStudies = [
    {
      id: "Muhammadeyah Pre-Primary: Case Study in IT Modernisation",
      icon: Users,
      role: "Infrastructure Digital Optimisation",
    },
    {
      id: "Hadjie Abdullah Solomon Trust: Enterpise Network Infrastructure Overhaul",
      icon: Building,
      role: "Infrastructure Manager, Network Architect",
    }
  ];

  const projectHighlights = caseStudies.map(study => {
    const post = allPosts.find(p => p.id === study.id);
    return {
      ...study,
      ...post,
      href: `/blog/${encodeURIComponent(study.id)}`
    };
  }).filter(item => item.title); // Ensure we found the posts

  const services = [
    {
      title: "Server Administration",
      description: "Comprehensive management of Linux environments (Arch/Debian/Ubuntu), Synology NAS systems, and Docker container orchestration.",
      icon: Server,
      technologies: ["Linux", "Docker", "Synology", "Bash"],
    },
    {
      title: "Network Infrastructure",
      description: "Design and optimisation of robust network architectures using Cisco, VyOS, and MikroTik equipment for maximum uptime.",
      icon: Network,
      technologies: ["Cisco", "VyOS", "MikroTik", "VLANs"],
    },
    {
      title: "Web App Solutions",
      description: "Custom full-stack development using Next.js and the MERN stack to build scalable, modern web applications.",
      icon: Code,
      technologies: ["Next.js", "React", "Node.js", "MongoDB"],
    },
    {
      title: "Custom Solutions",
      description: "Tailored hardware repairs, advanced software diagnostics, and personalized support & training for your team.",
      icon: Wrench,
      technologies: ["Hardware", "Diagnostics", "Support", "Training"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      {/* About Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">Engineering-Led IT Solutions</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Rustin Systems helps small businesses modernise and optimise digital systems using an engineering lens.
              We don&apos;t just fix problems; we architect solutions that bridge the gap between hardware constraints and software requirements.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gunmetal/30 rounded-2xl p-8 border border-charcoal backdrop-blur-sm">
              <div className="w-48 h-48 flex-shrink-0 relative rounded-full overflow-hidden border-4 border-silver/20 bg-gunmetal">
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-500 bg-gunmetal">
                  <Users className="h-16 w-16 opacity-50" />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-white mb-4 font-mono">Meet the Lead Engineer</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  I am the Systems Engineer behind Rustin Systems. I don&apos;t just fix IT problems; I architect resilient digital infrastructure. Bridging the gap between technical complexity and business goals, I personally oversee every project to ensure long-term reliability.
                </p>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center text-silver hover:text-white font-medium transition-colors group"
                >
                  Read Full Bio
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gunmetal/20 border-y border-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Specialized technical services designed for efficiency and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              service.title === "Custom Solutions" ? (
                <Link key={service.title} href="/blog/Video%20to%20Video%20AI%20summary" className="block h-full">
                  <ServiceCard {...service} />
                </Link>
              ) : (
                <ServiceCard key={service.title} {...service} />
              )
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Project Highlights</h2>
            <p className="text-gray-400">
              Proven track record with established institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {projectHighlights.map((project) => (
              <Link key={project.id} href={project.href} className="block group">
                <div className="flex items-start p-6 bg-gunmetal rounded-lg border border-charcoal transition-all duration-300 hover:border-silver/50 hover:bg-gunmetal/80 h-full">
                  <project.icon className="h-10 w-10 text-silver mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-silver transition-colors">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{project.role}</p>
                    <p className="text-gray-500 text-sm">{project.excerpt}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-900 to-gunmetal border-t border-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono">Ready to Optimise Your Infrastructure?</h2>
          <p className="text-xl text-gray-400 mb-10">
            Get a consultation to discuss how we can improve your business systems.
          </p>
          <a
            href="mailto:contact@rustinsystems.com"
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-slate-900 bg-silver hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(192,192,192,0.3)]"
          >
            Get a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
