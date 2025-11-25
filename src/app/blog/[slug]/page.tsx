import { getAllPostIds, getPostData } from "@/lib/posts";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

export async function generateStaticParams() {
    const paths = getAllPostIds();
    return paths;
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const postData = await getPostData(slug);

    return (
        <div className="min-h-screen bg-slate-900 pb-20">
            <div className="bg-gunmetal border-b border-charcoal pt-24 pb-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Back to Engineering Log
                    </Link>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-mono">{postData.title}</h1>
                    <div className="flex items-center text-silver font-mono text-sm">
                        <Calendar className="h-4 w-4 mr-2" />
                        {postData.date}
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <article className="prose prose-invert prose-lg max-w-none
          prose-headings:font-mono prose-headings:text-white
          prose-a:text-silver prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-code:text-silver prose-code:bg-gunmetal prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-gunmetal prose-pre:border prose-pre:border-charcoal
        ">
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || "" }} />
                </article>
            </div>
        </div>
    );
}
