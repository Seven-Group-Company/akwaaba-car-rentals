'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { ArrowRight, Calendar, Tag, Search } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = ['all', ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-0.5 bg-lime-400"></div>
              <span className="text-lime-400 text-sm font-medium tracking-wider uppercase">
                Blog
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-8">
              Our Latest
              <br />
              News & Insights
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed">
              Stay informed with travel insights, car rental advice, and destination guides. Helpful guides and expert tips to make your journey easier.
            </p>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="w-full md:w-1/2 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
                />
              </div>

              {/* Category Filter */}
              <div className="w-full md:w-auto">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full md:w-auto px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category} className="bg-black capitalize">
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <Tag className="w-16 h-16 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-8">
                  <p className="text-gray-400">
                    Showing <span className="text-lime-400 font-semibold">{filteredPosts.length}</span> article{filteredPosts.length !== 1 ? 's' : ''}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.map((post) => (
                    <Link
                      key={post.id}
                      href={`/blog/${post.slug}`}
                      className="group cursor-pointer"
                    >
                      {/* Image Container */}
                      <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[4/3]">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/placeholder-blog.jpg';
                          }}
                        />
                        
                        {/* Category Badge */}
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-2 bg-lime-400/90 backdrop-blur-sm rounded-full text-sm text-black font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 text-lime-400 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{post.date}</span>
                        </div>
                        
                        <h3 className="text-2xl md:text-3xl font-light leading-tight group-hover:text-gray-300 transition-colors">
                          {post.title}
                        </h3>
                        
                        {post.excerpt && (
                          <p className="text-gray-400 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>
                        )}
                        
                        <div className="flex items-center gap-2 text-lime-400 group-hover:gap-3 transition-all">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* Newsletter CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-zinc-900">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Stay Updated
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Subscribe to our newsletter to receive the latest travel tips, car rental advice, and exclusive offers directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-black border border-zinc-800 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent transition-all"
              />
              <button className="group inline-flex items-center space-x-3 bg-lime-400 text-black px-8 py-3 rounded-full hover:bg-lime-500 transition-all duration-300 font-medium">
                <span>Subscribe</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

