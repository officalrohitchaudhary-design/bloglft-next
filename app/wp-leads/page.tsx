"use client";

import { useEffect, useState } from "react";
import { FaSpinner, FaExclamationCircle } from "react-icons/fa";
import { FaUser, FaEnvelope, FaPhone, FaFileLines } from "react-icons/fa6";

interface Lead {
  _id: string;
  name: string;
  mobile: string;
  email: string;
  description: string;
  status: string;
  created_at: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await fetch("https://blogvoom.zeabur.app/leads/list");
        if (!response.ok) {
          throw new Error("Failed to fetch leads");
        }
        const data = await response.json();
        // Ensure data is an array, handle case where it might be wrapped
        const leadsData = Array.isArray(data) ? data : [];
        setLeads(leadsData);
      } catch (err) {
        console.error("Error fetching leads:", err);
        setError("Failed to load leads. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchLeads();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 text-slate-400">
          <FaSpinner className="w-10 h-10 animate-spin text-[#68b13d]" />
          <p className="font-medium">Loading leads...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="flex flex-col items-center gap-4 text-red-500 bg-red-50 px-8 py-6 rounded-2xl border border-red-100">
          <FaExclamationCircle className="w-10 h-10" />
          <p className="font-bold text-lg">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg font-bold transition-colors text-sm"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-black text-slate-900 tracking-tight">Leads</h1>
          <p className="text-slate-500 font-medium mt-2">
            Managing {leads.length} {leads.length === 1 ? 'lead' : 'leads'}
          </p>
        </div>

        {leads.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-slate-100 shadow-sm">
            <p className="text-slate-400 font-medium text-lg">No leads found yet.</p>
          </div>
        ) : (
          <>
            {/* Desktop View - Table */}
            <div className="hidden lg:block bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase tracking-wider w-[20%]">Name</th>
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase tracking-wider w-[20%]">Mobile</th>
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase tracking-wider w-[25%]">Email</th>
                      <th className="py-4 px-6 font-bold text-sm text-slate-500 uppercase tracking-wider w-[35%]">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {leads.map((lead) => (
                      <tr key={lead._id} className="hover:bg-slate-50/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="font-bold text-slate-900">{lead.name}</div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="font-medium text-slate-600">{lead.mobile}</div>
                        </td>
                        <td className="py-4 px-6">
                          {lead.email ? (
                            <div className="font-medium text-slate-600">{lead.email}</div>
                          ) : (
                            <span className="text-slate-400 text-sm italic">Not provided</span>
                          )}
                        </td>
                        <td className="py-4 px-6">
                          {lead.description ? (
                            <div className="text-slate-600 text-sm leading-relaxed line-clamp-2" title={lead.description}>
                              {lead.description}
                            </div>
                          ) : (
                            <span className="text-slate-400 text-sm italic">No description</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Mobile View - Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden">
              {leads.map((lead) => (
                <div key={lead._id} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100 flex flex-col gap-4">
                  <div className="flex items-start justify-between border-b border-slate-50 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#68b13d]/10 flex items-center justify-center text-[#68b13d]">
                        <FaUser className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900 text-lg leading-tight">{lead.name}</h3>
                        <span className="text-xs font-medium text-slate-400">
                          {new Date(lead.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                        <FaPhone className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <span className="font-medium">{lead.mobile}</span>
                    </div>

                    {lead.email && (
                      <div className="flex items-center gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0">
                          <FaEnvelope className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <span className="font-medium break-all">{lead.email}</span>
                      </div>
                    )}

                    {lead.description && (
                      <div className="flex items-start gap-3 text-slate-600">
                        <div className="w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center shrink-0 mt-0.5">
                          <FaFileLines className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <p className="text-sm leading-relaxed">{lead.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

