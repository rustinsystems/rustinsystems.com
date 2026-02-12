"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";
import { PostData } from "@/lib/posts";

interface BlogFilterProps {
    posts: PostData[];
}

export default function BlogFilter({ posts }: BlogFilterProps) {
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Extract all unique tags from posts
    const allTags = useMemo(() => {
        const tags = new Set<string>();
        posts.forEach(post => {
            post.tags?.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [posts]);

    // Filter posts based on selected tag
    const filteredPosts = useMemo(() => {
        if (!selectedTag) return posts;
        return posts.filter(post => post.tags?.includes(selectedTag));
    }, [posts, selectedTag]);

    return (
        <div>
            {/* Tag Filter */}
            <div className="mb-12">
                <div className="flex flex-wrap gap-2 items-center">
                    <span className="text-gray-400 mr-2 font-mono text-sm">Filter by:</span>
                    <button
                        onClick={() => setSelectedTag(null)}
                        className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${selectedTag === null
                            ? "bg-silver text-slate-900 border-silver"
                            : "bg-gunmetal text-gray-400 border-charcoal hover:border-silver"
                            }`}
                    >
                        All
                    </button>
                    {allTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => setSelectedTag(tag)}
                            className={`px-3 py-1 rounded-full text-xs font-mono border transition-all ${selectedTag === tag
                                ? "bg-silver text-slate-900 border-silver"
                                : "bg-gunmetal text-gray-400 border-charcoal hover:border-silver"
                                }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            {/* Posts Grid */}
            <div className="grid gap-8">
                {filteredPosts.map(({ id, date, title, excerpt, tags }) => (
                    <article key={id} className="bg-gunmetal/30 border border-charcoal rounded-lg p-6 md:p-8 hover:border-silver transition-all duration-300 group">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 gap-2">
                            <div className="flex items-center text-sm text-gray-500 font-mono">
                                <Calendar className="h-4 w-4 mr-2" />
                                {date}
                            </div>
                            {tags && tags.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                    {tags.map(tag => (
                                        <span key={tag} className="text-xs text-silver bg-slate-900 px-2 py-0.5 rounded border border-charcoal">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-silver transition-colors">
                            <Link href={`/blog/${id}`}>
                                {title}
                            </Link>
                        </h2>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            {excerpt}
                        </p>
                        <Link
                            href={`/blog/${id}`}
                            className="inline-flex items-center text-silver hover:text-white font-medium transition-colors"
                        >
                            Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </article>
                ))}

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 bg-gunmetal/10 rounded-lg border border-charcoal border-dashed">
                        <p className="text-gray-500">No posts found with tag &quot;{selectedTag}&quot;.</p>
                        <button
                            onClick={() => setSelectedTag(null)}
                            className="mt-4 text-silver hover:underline text-sm"
                        >
                            Clear filter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
