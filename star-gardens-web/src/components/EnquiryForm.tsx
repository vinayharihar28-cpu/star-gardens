"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, MessageCircle, Phone, Loader2, ArrowRight } from "lucide-react";
import { studioFacts } from "@/data/nurseries";

interface EnquiryFormProps {
  defaultCategory?: string;
  className?: string;
}

export default function EnquiryForm({ defaultCategory = "", className = "" }: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: defaultCategory || "Corporate Office / Tech Park",
    location: "Bengaluru",
    service: "Turnkey Design & Build",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [submittedId, setSubmittedId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setStatus("error");
        setFeedbackMessage(data.error || "Failed to submit. Please check your inputs.");
        return;
      }

      setStatus("success");
      setFeedbackMessage(data.message);
      setSubmittedId(data.enquiryId);
    } catch (err: any) {
      setStatus("error");
      setFeedbackMessage("Unable to reach the server. Please connect directly via WhatsApp or phone.");
    }
  };

  const whatsappText = `Hi Abhishek, I would like to enquire about Star Gardens services for a ${formData.category} project in ${formData.location}.`;

  return (
    <div className={`interactive-card scroll-reveal bg-white border border-[#D4DFD7] rounded-sm p-6 sm:p-10 shadow-xl text-[#121814] ${className}`}>
      {status === "success" ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 rounded-full bg-[#193D2B] border border-[#286746] text-white flex items-center justify-center mx-auto shadow-md">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif text-3xl text-[#121814]">Project Brief Received</h3>
          <p className="text-sm text-[#475E50] max-w-md mx-auto leading-relaxed">
            {feedbackMessage}
          </p>
          <div className="p-3 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs inline-block text-xs font-mono text-[#193D2B] font-bold">
            Reference: {submittedId}
          </div>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`https://wa.me/919743030555?text=${encodeURIComponent(
                `Hi Abhishek, I just submitted brief #${submittedId} on the Star Gardens website.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#1fb355] transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              Follow up on WhatsApp
            </a>
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  category: "Corporate Office / Tech Park",
                  location: "Bengaluru",
                  service: "Turnkey Design & Build",
                  description: "",
                });
              }}
              className="px-5 py-2.5 border border-[#D4DFD7] text-[#121814] text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#F8FAF7] transition-colors"
            >
              Submit Another Brief
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-[#E5EBE6] pb-4 mb-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#193D2B] font-bold mb-1">
              [ SITE CONSULTATION & ARCHITECTURAL BRIEF ]
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#121814]">
              Discuss Your Project
            </h3>
            <p className="text-xs sm:text-sm text-[#475E50] mt-1">
              Share site dimensions or schedule an on-site consultation with our studio architects in Bengaluru.
            </p>
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xs">
              <AlertCircle className="w-4 h-4 mt-0.5 shrink-0 text-red-600" />
              <span>{feedbackMessage}</span>
            </div>
          )}

          {/* Name & Contact Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Full Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Vikramaditya Rao"
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Phone Number / WhatsApp *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              />
            </div>
          </div>

          {/* Business Email & Location Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="email" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Work Email (Optional)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="vikram@company.com"
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              />
            </div>

            <div>
              <label htmlFor="location" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Project City / Location *
              </label>
              <select
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              >
                <option value="Bengaluru">Bengaluru (HQ / Rapid Response)</option>
                <option value="Hyderabad">Hyderabad</option>
                <option value="Chennai">Chennai</option>
                <option value="Pune">Pune</option>
                <option value="Other Regional Location">Other Regional Location</option>
              </select>
            </div>
          </div>

          {/* Sector Category & Service Required */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="category" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Project Sector *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              >
                <option value="Corporate Office / Tech Park">Corporate Office / Tech Park</option>
                <option value="Residential Villa / Private Estate">Residential Villa / Private Estate</option>
                <option value="Hospitality Resort / Managed Farmland">Hospitality Resort / Managed Farmland</option>
                <option value="Vertical Garden / Living Wall">Vertical Garden / Living Wall</option>
                <option value="Corporate Plant Rental & Subscription">Corporate Plant Rental & Subscription</option>
                <option value="Annual Maintenance Contract (AMC)">Annual Maintenance Contract (AMC)</option>
                <option value="Corporate Workshop / CSR Greening">Corporate Workshop / CSR Greening</option>
              </select>
            </div>

            <div>
              <label htmlFor="service" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
                Engagement Model *
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              >
                <option value="Turnkey Design & Build">Turnkey Design & Build</option>
                <option value="Design Consultation Only">Design Consultation Only</option>
                <option value="Execution to Provided Drawings">Execution to Provided Drawings</option>
                <option value="Corporate Rental (2–3 Years + AMC)">Corporate Rental (2–3 Years + AMC)</option>
                <option value="Short-term Event Rental (1–2 Days)">Short-term Event Rental (1–2 Days)</option>
                <option value="AMC for Existing Landscape">AMC for Existing Landscape</option>
              </select>
            </div>
          </div>

          {/* Brief Description */}
          <div>
            <label htmlFor="description" className="block text-[11px] font-mono uppercase tracking-wider text-[#334A3C] font-semibold mb-1.5">
              Site Details & Preliminary Scope
            </label>
            <textarea
              id="description"
              name="description"
              rows={3}
              value={formData.description}
              onChange={handleChange}
              placeholder="e.g. 15,000 sq.ft co-working floorplate requiring desk planter runs, reception living wall, and ongoing weekly maintenance."
              className="w-full px-3.5 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
            />
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-widest rounded-xs hover:bg-[#286746] active:scale-95 transition-all shadow-md shadow-[#193D2B]/15 disabled:opacity-50"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Brief...</span>
                </>
              ) : (
                <>
                  <span>Send Project Brief</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <a
              href={`https://wa.me/919743030555?text=${encodeURIComponent(whatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-[#193D2B] hover:text-[#286746] font-bold transition-colors py-1"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Or connect instantly via WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </form>
      )}
    </div>
  );
}
