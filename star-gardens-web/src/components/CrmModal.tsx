"use client";

import React from "react";
import { X, Lock, ExternalLink, MessageCircle, Mail, ShieldCheck } from "lucide-react";
import { studioFacts } from "@/data/nurseries";

// Configuration point for client CRM portal
// Replace with the client's actual production CRM URL once provided
export const CLIENT_CRM_URL: string = ""; 

interface CrmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CrmModal({ isOpen, onClose }: CrmModalProps) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-all animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="crm-modal-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white border border-[#D4DFD7] rounded-sm shadow-2xl p-6 sm:p-8 text-[#121814]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#718579] hover:text-[#193D2B] p-1 rounded-sm transition-colors"
          aria-label="Close client login modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xs bg-[#F8FAF7] border border-[#D4DFD7] text-[#193D2B] flex items-center justify-center">
            <Lock className="w-5 h-5" />
          </div>
          <div>
            <h3 id="crm-modal-title" className="font-serif text-2xl text-[#121814] font-normal">
              Client CRM Portal
            </h3>
            <p className="text-[10px] font-mono uppercase tracking-widest text-[#718579]">
              [ ENTERPRISE LANDSCAPE MANAGEMENT ]
            </p>
          </div>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#475E50] leading-relaxed mb-6">
          <p>
            The dedicated client portal provides real-time access to scheduled AMC service logs,
            horticultural soil inspection reports, replacement requests, and water testing telemetry.
          </p>

          {CLIENT_CRM_URL ? (
            <div className="p-4 bg-[#F8FAF7] border border-[#D4DFD7] rounded-xs">
              <p className="font-medium text-[#193D2B] mb-2 font-mono text-xs">READY TO REDIRECT:</p>
              <a
                href={CLIENT_CRM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#193D2B] text-white text-xs font-bold uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-colors"
              >
                Proceed to Portal <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ) : (
            <div className="p-4 bg-[#F8FAF7] border border-[#E5EBE6] rounded-xs">
              <p className="text-xs text-[#475E50]">
                <strong className="text-[#193D2B] font-mono block mb-1">PORTAL INTEGRATION STATUS:</strong>
                The client CRM endpoint URL is being verified with studio IT.
                Active clients can directly request account reports, scheduling changes, or urgent nursery specimen swaps via your studio coordinator.
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#E5EBE6]">
          <a
            href={`https://wa.me/919743030555?text=${encodeURIComponent(
              "Hi Star Gardens, I would like to check on my client CRM portal access / account servicing."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#25D366] text-white font-medium text-xs uppercase tracking-wider rounded-xs hover:bg-[#1fb355] transition-colors shadow-2xs"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Coordinator
          </a>
          <a
            href={`mailto:${studioFacts.email}?subject=Client%20Portal%20Access%20Inquiry`}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#193D2B] text-white font-medium text-xs uppercase tracking-wider rounded-xs hover:bg-[#286746] transition-colors shadow-2xs"
          >
            <Mail className="w-4 h-4" />
            Email Studio Support
          </a>
        </div>
      </div>
    </div>
  );
}
