import { getSortedPostsData } from "@/lib/posts";
import BlogFilter from "@/components/BlogFilter";

export default function Blog() {
    const allPostsData = getSortedPostsData();

    return (
        <div className="min-h-screen bg-slate-900 pb-20">
            <div className="bg-gunmetal border-b border-charcoal pt-24 pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold text-white mb-4 font-mono">Engineering Log</h1>
                    <p className="text-xl text-silver font-mono">Technical breakdowns, tutorials, and project insights.</p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <BlogFilter posts={allPostsData} />
            </div>
        </div>
    );
}
