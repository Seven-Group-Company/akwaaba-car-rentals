import { notFound } from 'next/navigation';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Calendar, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts, getPostBySlug } from '@/lib/blog-data';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const fallbackPosts =
    relatedPosts.length < 3
      ? blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3 - relatedPosts.length)
      : [];

  const combinedRelated = [...relatedPosts, ...fallbackPosts];

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white text-sm mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to blog</span>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-0.5 bg-lime-400" />
              <span className="text-lime-400 text-xs md:text-sm font-medium tracking-wider uppercase">
                {post.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-lime-400" />
                <span>{post.date}</span>
              </div>
              <div className="inline-flex items-center gap-2">
                <Tag className="w-4 h-4 text-lime-400" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="pb-16 md:pb-20 px-6 md:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="bg-zinc-900 rounded-2xl p-6 md:p-10 border border-zinc-800 space-y-5 md:space-y-6">
              {post.content.map((paragraph, index) => (
                <p key={index} className="text-gray-300 leading-relaxed text-base md:text-lg">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href="/booking"
                className="inline-flex items-center gap-3 bg-lime-400 text-black px-6 py-3 rounded-full hover:bg-lime-500 transition-colors font-medium text-sm md:text-base"
              >
                Book your next ride in Ghana
              </Link>

              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 text-sm md:text-base text-gray-300 hover:text-lime-400 transition-colors"
              >
                <span>Browse our car rental fleet</span>
              </Link>
            </div>
          </div>
        </section>

        {combinedRelated.length > 0 && (
          <section className="pb-24 px-6 md:px-12 lg:px-24">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-lime-400 text-xs md:text-sm tracking-wider uppercase mb-2">
                    Related Articles
                  </p>
                  <h2 className="text-2xl md:text-3xl font-bold">You might also like</h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden sm:inline-flex items-center gap-2 text-sm text-gray-300 hover:text-lime-400 transition-colors"
                >
                  <span>Browse all articles</span>
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {combinedRelated.map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="group bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-lime-400/70 transition-colors p-5 flex flex-col gap-4"
                  >
                    <div className="flex items-center gap-2 text-lime-400 text-xs md:text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{related.date}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold leading-snug group-hover:text-gray-100 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-400 line-clamp-3">
                      {related.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 text-xs md:text-sm text-lime-400 group-hover:gap-2 transition-all">
                      <span>Read article</span>
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}


