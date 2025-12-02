"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { blogPosts as allBlogPosts } from '@/lib/blog-data';

const AutomotiveBlog: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const blogPosts = allBlogPosts.slice(0, 4);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 2 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < blogPosts.length - 2 ? prev + 2 : prev));
  };

  const visiblePosts = blogPosts.slice(currentIndex, currentIndex + 2);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-16 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-6">
          <div className="w-1.5 h-1.5 bg-lime-400 rounded-full"></div>
          <span className="text-sm tracking-wider text-lime-400">BLOG</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 tracking-tight">
          Our latest news
        </h1>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        Stay informed with travel insights, car rental advice, and destination guides.
        Helpful guides and expert tips to make your journey easier.
        </p>
      </div>

      {/* Blog Posts Grid */}
      <div className="max-w-7xl mx-auto mb-12 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 transition-all duration-500">
          {visiblePosts.map((post) => (
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
                />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-lime-400/90 backdrop-blur-sm rounded-full text-sm text-black font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-light mb-3 leading-tight group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-lime-400 text-sm">{post.date}</p>
                </div>
                
                <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full border border-lime-400 group-hover:border-lime-500 transition-colors">
                  <ArrowRight className="w-5 h-5 text-lime-400" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-700 hover:border-white hover:bg-white/5 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-gray-700"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <Link
          href="/blog"
          className="group inline-flex items-center space-x-3 bg-white text-black px-6 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-300 shadow-lg"
        >
          <span className="font-medium text-sm">Browse all articles</span>
          <svg
            className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>

        <button
          onClick={handleNext}
          disabled={currentIndex >= blogPosts.length - 2}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AutomotiveBlog;