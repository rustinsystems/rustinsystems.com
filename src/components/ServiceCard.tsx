import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
    technologies: string[];
}

export default function ServiceCard({ title, description, icon: Icon, technologies }: ServiceCardProps) {
    return (
        <div className="bg-gunmetal border border-charcoal p-6 rounded-lg hover:border-silver transition-all duration-300 group h-full flex flex-col">
            <div className="mb-4 inline-block p-3 bg-slate-900 rounded-md border border-charcoal group-hover:border-silver/50 transition-colors">
                <Icon className="h-8 w-8 text-silver group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 font-mono">{title}</h3>
            <p className="text-gray-400 mb-4 flex-grow">{description}</p>
            <div className="flex flex-wrap gap-2 mt-auto">
                {technologies.map((tech) => (
                    <span key={tech} className="text-xs font-mono bg-slate-900 text-silver px-2 py-1 rounded border border-charcoal">
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    );
}
