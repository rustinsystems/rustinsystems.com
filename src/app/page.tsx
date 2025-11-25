import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { Server, Network, Code, Wrench, Building, Users } from "lucide-react";

export default function Home() {
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
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-mono">Engineering-Led IT Solutions</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Rustin Systems helps small businesses modernise and optimise digital systems using an engineering lens.
              We don't just fix problems; we architect solutions that bridge the gap between hardware constraints and software requirements.
            </p>
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
                <Link key={service.title} href="/blog/optimizing-gpu-resources" className="block h-full">
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
            <h2 className="text-3xl font-bold text-white mb-4 font-mono">Trusted Experience</h2>
            <p className="text-gray-400">
              Proven track record with established institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start p-6 bg-gunmetal rounded-lg border border-charcoal">
              <Building className="h-10 w-10 text-silver mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Muhammadeyah Pre-Primary School</h3>
                <p className="text-gray-400 text-sm mb-2">IT Manager Duties</p>
                <p className="text-gray-500 text-sm">Managed hardware repairs, staff training, and digital infrastructure modernization.</p>
              </div>
            </div>

            <div className="flex items-start p-6 bg-gunmetal rounded-lg border border-charcoal">
              <Users className="h-10 w-10 text-silver mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Hadjie Abdullah Solomon Family Trust</h3>
                <p className="text-gray-400 text-sm mb-2">Infrastructure Manager</p>
                <p className="text-gray-500 text-sm">Oversaw network infrastructure, server maintenance, and system optimization.</p>
              </div>
            </div>
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
