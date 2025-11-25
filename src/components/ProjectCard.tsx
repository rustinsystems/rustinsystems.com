import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    highlight?: boolean;
}

export default function ProjectCard({ title, description, tags, highlight = false }: ProjectCardProps) {
    return (
        <div className={`relative p-6 rounded-lg border transition-all duration-300 h-full flex flex-col ${highlight
                ? "bg-slate-900 border-silver shadow-[0_0_15px_rgba(192,192,192,0.1)]"
                : "bg-gunmetal border-charcoal hover:border-gray-500"
            }`}>
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white font-mono">{title}</h3>
                <ArrowUpRight className={`h-5 w-5 ${highlight ? "text-white" : "text-gray-500"}`} />
            </div>

            <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                {description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs font-mono px-2 py-1 rounded border ${highlight
                                ? "bg-silver/10 text-white border-silver/30"
                                : "bg-slate-900 text-gray-400 border-charcoal"
                            }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}
