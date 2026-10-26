import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Calendar, Bookmark, Share2 } from "lucide-react";
import { insightsData, InsightArticle } from "@/data/insights";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsData.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);
  if (!article) return { title: "Insight Article | Star Gardens" };

  return {
    title: `${article.title} | Star Gardens Insights`,
    description: article.excerpt,
  };
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = insightsData.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // Next article
  const currentIndex = insightsData.findIndex((a) => a.slug === slug);
  const nextArticle = insightsData[(currentIndex + 1) % insightsData.length];

  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Top Breadcrumb */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#718579] hover:text-[#193D2B] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Insights</span>
        </Link>
      </div>

      {/* Article Header */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 pb-20">
        <div className="space-y-5 mb-10">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[#F8FAF7] border border-[#D4DFD7] text-[#193D2B] text-xs font-mono uppercase tracking-wider rounded-xs font-semibold shadow-2xs">
              {article.category}
            </span>
            <span className="text-xs font-mono text-[#718579]">
              Published {article.publishedDate}
            </span>
            <span className="text-xs font-mono text-[#718579]">•</span>
            <span className="text-xs font-mono text-[#718579] flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#193D2B]" />
              {article.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#121814] font-normal leading-[1.1]">
            {article.title}
          </h1>

          <p className="font-serif italic text-xl sm:text-2xl text-[#193D2B]">
            "{article.subtitle}"
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-[#E5EBE6] shadow-xl mb-12">
          <Image
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 896px) 100vw, 896px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Editorial Body Content */}
        <div className="space-y-10 text-[#475E50] text-base sm:text-lg leading-relaxed">
          {article.content.map((sec, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-4xl text-[#121814] pt-4">
                {sec.heading}
              </h2>

              {sec.body.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed">{p}</p>
              ))}

              {sec.callout && (
                <blockquote className="my-8 p-6 sm:p-8 bg-[#F8FAF7] border-l-4 border-[#193D2B] border-y border-r border-[#E5EBE6] rounded-r-xs shadow-sm">
                  <p className="font-serif text-xl sm:text-2xl text-[#121814] italic leading-snug">
                    "{sec.callout}"
                  </p>
                  <span className="text-[11px] font-mono uppercase text-[#193D2B] mt-3 block font-semibold">
                    — Star Gardens Horticultural Advisory
                  </span>
                </blockquote>
              )}
            </div>
          ))}
        </div>

        {/* Author Provenance Footer */}
        <div className="mt-16 pt-8 border-t border-[#E5EBE6] p-6 sm:p-8 bg-[#193D2B] border border-[#286746] rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl text-white">
          <div className="space-y-1.5 text-center sm:text-left">
            <span className="text-xs font-mono uppercase text-[#E8F5C4]">[ PUBLISHED BY ]</span>
            <p className="font-serif text-2xl text-white font-semibold">Star Gardens Editorial Desk</p>
            <p className="text-xs text-[#D4DFD7]">
              Bengaluru, Karnataka · 70 Acres Nurseries in Punganur, Rajahmundry & Madikeri
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-[#193D2B] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#F8FAF7] transition-colors whitespace-nowrap shadow-sm hover:scale-105 duration-300"
          >
            Consult With Studio
          </Link>
        </div>

        {/* Next Article Navigator */}
        <div className="mt-10 pt-8 border-t border-[#E5EBE6] flex items-center justify-between">
          <span className="text-xs font-mono text-[#718579] uppercase">[ NEXT EDITORIAL ]</span>
          <Link
            href={`/insights/${nextArticle.slug}`}
            className="inline-flex items-center gap-2 font-serif text-lg text-[#193D2B] hover:text-[#286746] transition-colors font-medium"
          >
            <span>{nextArticle.title}</span>
            <ArrowRight className="w-4 h-4 text-[#193D2B]" />
          </Link>
        </div>
      </article>
    </div>
  );
}
