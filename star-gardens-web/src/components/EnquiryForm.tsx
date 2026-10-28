"use client";

import React, { useState } from "react";
import { 
  CheckCircle2, 
  AlertCircle, 
  MessageCircle, 
  Phone, 
  Loader2, 
  Copy, 
  Check, 
  ExternalLink,
  Send
} from "lucide-react";
import { studioFacts } from "@/data/nurseries";

interface EnquiryFormProps {
  defaultCategory?: string;
  className?: string;
}

export function formatWhatsAppMessage(data: {
  name: string;
  phone: string;
  email?: string;
  location: string;
  category: string;
  service: string;
  description?: string;
}): string {
  const lines: (string | null)[] = [
    "🌿 *STAR GARDENS — PROJECT ENQUIRY*",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━",
    `👤 *Client Name:* ${data.name.trim()}`,
    `📞 *Phone / WhatsApp:* ${data.phone.trim()}`,
    data.email?.trim() ? `✉️ *Email:* ${data.email.trim()}` : `✉️ *Email:* (Not provided)`,
    `📍 *Location:* ${data.location.trim()}`,
    "",
    "📋 *PROJECT SPECIFICATIONS*",
    `• *Sector:* ${data.category}`,
    `• *Engagement Model:* ${data.service}`,
    "",
    data.description?.trim()
      ? `📝 *Site Details & Scope:*\n${data.description.trim()}`
      : "📝 *Site Details & Scope:* Ready to discuss during site survey.",
    "━━━━━━━━━━━━━━━━━━━━━━━━━━",
    "_Sent via Star Gardens Website (stargardens.in)_",
  ];

  return lines.filter((line) => line !== null).join("\n");
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
  const [copied, setCopied] = useState(false);
  const [activeWhatsAppUrl, setActiveWhatsAppUrl] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setFeedbackMessage("");

    // Validate name
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setFeedbackMessage("Please enter your full name (minimum 2 characters).");
      return;
    }

    // Validate phone
    if (!formData.phone.trim() || formData.phone.trim().length < 7) {
      setStatus("error");
      setFeedbackMessage("Please enter a valid phone or WhatsApp number.");
      return;
    }

    // Format WhatsApp message
    const message = formatWhatsAppMessage(formData);
    const whatsappUrl = `https://wa.me/919743030555?text=${encodeURIComponent(message)}`;
    setActiveWhatsAppUrl(whatsappUrl);

    // Also persist inquiry in background to local /api/enquiry without blocking WhatsApp
    try {
      fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }).catch(() => {
        // Silent catch: WhatsApp is the primary delivery channel
      });
    } catch {
      // Ignore background persistence errors
    }

    // Directly open WhatsApp with the formatted brief
    if (typeof window !== "undefined") {
      const newTab = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        // If popup blocker intervened, window.location provides seamless fallback
        window.location.href = whatsappUrl;
      }
    }

    setStatus("success");
    setFeedbackMessage("Your enquiry brief has been formatted and opened in WhatsApp.");
  };

  const handleCopyBrief = () => {
    const text = formatWhatsAppMessage(formData);
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  return (
    <div className={`interactive-card scroll-reveal bg-white border border-[#D4DFD7] rounded-3xl p-6 sm:p-10 shadow-xl text-[#121814] ${className}`}>
      {status === "success" ? (
        <div className="py-8 text-center space-y-5">
          <div className="w-16 h-16 rounded-full bg-[#25D366] text-white flex items-center justify-center mx-auto shadow-md">
            <MessageCircle className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#25D366]/15 text-[#128C7E] rounded-full text-xs font-mono font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Direct WhatsApp Brief Ready
            </div>
            <h3 className="font-serif text-3xl text-[#121814]">Connecting to WhatsApp</h3>
            <p className="text-xs sm:text-sm text-[#475E50] max-w-md mx-auto leading-relaxed">
              We have generated your formal enquiry brief and opened WhatsApp to connect directly with 
              Studio Director <strong>Abhishek Suhas (+91 97430 30555)</strong>.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            {activeWhatsAppUrl && (
              <a
                href={activeWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-full hover:bg-[#1fb355] transition-all shadow-md active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            <button
              onClick={handleCopyBrief}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 border border-[#D4DFD7] text-[#193D2B] text-xs font-mono font-bold uppercase tracking-wider rounded-full hover:bg-[#F8FAF7] transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Brief Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Formatted Brief</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setStatus("idle");
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  category: defaultCategory || "Corporate Office / Tech Park",
                  location: "Bengaluru",
                  service: "Turnkey Design & Build",
                  description: "",
                });
                setActiveWhatsAppUrl("");
              }}
              className="text-xs font-mono text-[#718579] hover:text-[#193D2B] underline transition-colors"
            >
              ← Submit Another Enquiry
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="border-b border-[#E5EBE6] pb-4 mb-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-[#193D2B] font-bold mb-1">
              DIRECT WHATSAPP CONSULTATION BRIEF
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#121814]">
              Discuss Your Project
            </h3>
            <p className="text-xs sm:text-sm text-[#475E50] mt-1">
              Send a formatted project brief directly to Studio Director Abhishek Suhas on WhatsApp.
            </p>
          </div>

          {status === "error" && (
            <div className="flex items-start gap-2.5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
              />
            </div>
          </div>

          {/* Work Email & Location Row */}
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
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
                className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
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
              className="w-full px-4 py-2.5 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xl text-sm text-[#121814] focus:bg-white focus:outline-none focus:border-[#193D2B] transition-colors"
            />
          </div>

          {/* Direct WhatsApp Submit Action */}
          <div className="pt-2 space-y-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#1fb355] text-white text-xs font-bold uppercase tracking-widest rounded-full active:scale-98 transition-all shadow-md shadow-[#25D366]/20 disabled:opacity-50 group"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Formatting WhatsApp Brief...</span>
                </>
              ) : (
                <>
                  <MessageCircle className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span>Send Project Brief Directly to WhatsApp</span>
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <div className="flex items-center justify-between text-[11px] font-mono text-[#718579] px-2">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] inline-block animate-pulse" />
                Direct to Studio Director (+91 97430 30555)
              </span>
              <span>Fast response within 2 hours</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
