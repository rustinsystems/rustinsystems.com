import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-slate-900 pt-32 pb-20 lg:pt-48 lg:pb-32">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#36454f_1px,transparent_1px),linear-gradient(to_bottom,#36454f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <Image
                src="/images/logo.png"
                alt="Rustin Systems Logo"
                fill
                className="object-contain drop-shadow-[0_0_15px_rgba(192,192,192,0.3)]"
                priority
              />
            </div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-charcoal bg-gunmetal/50 text-silver text-xs font-mono mb-8 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
            SYSTEMS OPERATIONAL
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 font-mono">
            Linux Systems Administrator <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-silver to-gray-400">
              Infrastructure Engineer
            </span>
          </h1>

          <p className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Specialized RHEL/Debian environments, automation, and secure network architecture.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-silver hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(192,192,192,0.3)]"
            >
              Consult on Infrastructure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-8 py-3 border border-charcoal text-base font-medium rounded-md text-silver bg-transparent hover:bg-gunmetal transition-all duration-300"
            >
              View Engineering Portfolio
            </Link>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-gunmetal/30 border border-charcoal backdrop-blur-sm">
            <Server className="h-10 w-10 text-silver mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Server Automation</h3>
            <p className="text-gray-400 text-sm">Linux (Arch/Debian), Docker orchestration, and custom NAS solutions.</p>
          </div>
          <div className="p-6 rounded-lg bg-gunmetal/30 border border-charcoal backdrop-blur-sm">
            <ShieldCheck className="h-10 w-10 text-silver mx-auto mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Network Infrastructure</h3>
            <p className="text-gray-400 text-sm">Optimisation for Cisco, VyOS, and MikroTik environments.</p>
          </div>
          <div className="p-6 rounded-lg bg-gunmetal/30 border border-charcoal backdrop-blur-sm">
            <div className="h-10 w-10 mx-auto mb-4 flex items-center justify-center font-mono text-2xl font-bold text-silver border-2 border-silver rounded-md">R</div>
            <h3 className="text-lg font-bold text-white mb-2">Hardware Lifecycle Management</h3>
            <p className="text-gray-400 text-sm">Precision diagnostics, personlised and adaptive operational training for teams</p>
          </div>
        </div>
      </div>
    </div>
  );
}
