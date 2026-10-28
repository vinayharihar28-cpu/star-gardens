import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, ShieldCheck, HelpCircle, Phone, MessageCircle } from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import EnquiryForm from "@/components/EnquiryForm";
import ContourSvg from "@/components/ContourSvg";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((svc) => ({
    slug: svc.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return { title: "Service | Star Gardens" };

  return {
    title: `${service.title} | Star Gardens Bengaluru`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24 pb-20 bg-white text-[#121814]">
      {/* Breadcrumb & Top Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase text-[#718579] hover:text-[#193D2B] transition-colors font-medium"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Services</span>
        </Link>
      </div>

      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 border-b border-[#E5EBE6] bg-[#F8FAF7] overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <ContourSvg className="w-full h-full" />
        </div>
        <div className="absolute inset-0 arch-grid-mosaic pointer-events-none opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Rectangular Image Screen - Placed on Top on Mobile */}
            <div className="w-full lg:col-span-5 relative order-first lg:order-last">
              <div className="relative aspect-[16/10] sm:aspect-[4/3] rounded-3xl overflow-hidden border border-[#D4DFD7] shadow-xl">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </div>
            </div>

            {/* Service Details - Cleanly Positioned Below Image on Mobile */}
            <div className="w-full lg:col-span-7 space-y-4 sm:space-y-5">
              <h1 className="font-serif text-3xl sm:text-6xl text-[#121814] font-normal leading-[1.1]">
                {service.title}
              </h1>
              <p className="font-serif italic text-lg sm:text-2xl text-[#193D2B]">
                "{service.tagline}"
              </p>
              <p className="text-sm sm:text-lg text-[#475E50] leading-relaxed pt-1">
                {service.shortDesc}
              </p>
              <div className="p-3.5 sm:p-4 bg-white border border-[#D4DFD7] rounded-xl text-xs text-[#475E50] shadow-2xs">
                <strong className="text-[#193D2B]">Commercial Model:</strong> {service.workingModel}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Features */}
      <section className="py-14 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Scope & Technical Features */}
          <div className="lg:col-span-7 space-y-12">
            {/* Key Deliverables */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                SCOPE OF WORK
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121814]">
                Included Deliverables & Scope
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xl flex items-start gap-2.5 text-xs sm:text-sm text-[#475E50] shadow-2xs"
                  >
                    <Check className="w-4 h-4 text-[#193D2B] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <span className="text-xs font-mono uppercase tracking-widest text-[#193D2B]">
                QUALITY ASSURANCE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#121814]">
                Technical & Horticultural Standards
              </h2>
              <div className="space-y-4">
                {service.keyFeatures.map((feat, idx) => (
                  <div key={idx} className="p-6 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-2 shadow-2xs">
                    <h3 className="font-serif text-xl sm:text-2xl text-[#121814]">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {service.faqs && service.faqs.length > 0 && (
              <div className="space-y-6 pt-6 border-t border-[#E5EBE6]">
                <h2 className="font-serif text-3xl text-[#121814] flex items-center gap-2">
                  <HelpCircle className="w-6 h-6 text-[#193D2B]" />
                  <span>Frequently Answered Questions</span>
                </h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, idx) => (
                    <div key={idx} className="p-6 bg-[#F8FAF7] border border-[#E5EBE6] rounded-2xl space-y-2 shadow-2xs">
                      <h4 className="font-serif text-lg text-[#121814] font-semibold">
                        {faq.question}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#475E50] leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-5 space-y-6">
            <div className="sticky top-28 space-y-6">
              <EnquiryForm defaultCategory={service.title} />

              <div className="p-6 bg-[#193D2B] border border-[#286746] rounded-2xl space-y-3 shadow-xl text-white">
                <span className="text-[11px] font-mono uppercase text-[#E8F5C4]">DIRECT STUDIO ACCESS</span>
                <h4 className="font-serif text-2xl text-white">Prefer to talk directly?</h4>
                <p className="text-xs text-[#D4DFD7] leading-relaxed">
                  Connect with Studio Director Abhishek Suhas to review drawings, schedule site surveys, or confirm availability.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+919743030555"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-white text-[#193D2B] text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#F8FAF7] transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+91 97430 30555</span>
                  </a>
                  <a
                    href={`https://wa.me/919743030555?text=${encodeURIComponent(
                      `Hi Abhishek, I would like to discuss Star Gardens' ${service.title} service.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#1fb355] transition-colors shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
