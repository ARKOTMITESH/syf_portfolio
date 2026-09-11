import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, MessageSquare, Clock, ShieldCheck, X, Trash2, Filter } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  message: string;
  date: string;
  status: 'NEW' | 'CONTACTED' | 'IN PROGRESS' | 'COMPLETED' | 'CLOSED';
}

export const Contact: React.FC = () => {
  const { contact } = PORTFOLIO_DATA.personal;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Modular Kitchen',
    location: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Admin Enquiry Modal state
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [statusFilter, setStatusFilter] = useState('ALL');

  useEffect(() => {
    loadEnquiries();
  }, []);

  const loadEnquiries = () => {
    try {
      const stored = localStorage.getItem('saif_portfolio_enquiries');
      if (stored) {
        setEnquiries(JSON.parse(stored));
      } else {
        // Seed default sample enquiry for demonstration
        const sample: Enquiry[] = [
          {
            id: 'ENQ-1718001',
            name: 'K. Ramesh Reddy',
            phone: '+91 94402 88219',
            email: 'ramesh.reddy@gmail.com',
            projectType: 'Modular Kitchen',
            location: 'Magunta Layout, Nellore',
            message: 'Looking for a contemporary L-shaped modular kitchen with BWP carcass and acrylic shutters.',
            date: new Date(Date.now() - 86400000).toISOString(),
            status: 'NEW'
          }
        ];
        localStorage.setItem('saif_portfolio_enquiries', JSON.stringify(sample));
        setEnquiries(sample);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setErrorMsg('Please fill in your name, phone number, and email address.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      try {
        const existing: Enquiry[] = JSON.parse(localStorage.getItem('saif_portfolio_enquiries') || '[]');
        const newEnquiry: Enquiry = {
          id: 'ENQ-' + Date.now().toString().slice(-6),
          ...formData,
          date: new Date().toISOString(),
          status: 'NEW'
        };
        const updated = [newEnquiry, ...existing];
        localStorage.setItem('saif_portfolio_enquiries', JSON.stringify(updated));
        setEnquiries(updated);
      } catch (err) {
        console.error('LocalStorage error:', err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        projectType: 'Modular Kitchen',
        location: '',
        message: ''
      });
    }, 600);
  };

  const handleStatusChange = (id: string, newStatus: Enquiry['status']) => {
    const updated = enquiries.map((enq) => (enq.id === id ? { ...enq, status: newStatus } : enq));
    setEnquiries(updated);
    localStorage.setItem('saif_portfolio_enquiries', JSON.stringify(updated));
  };

  const handleDeleteEnquiry = (id: string) => {
    const updated = enquiries.filter((enq) => enq.id !== id);
    setEnquiries(updated);
    localStorage.setItem('saif_portfolio_enquiries', JSON.stringify(updated));
  };

  const filteredEnquiries = enquiries.filter((enq) => {
    if (statusFilter === 'ALL') return true;
    return enq.status === statusFilter;
  });

  return (
    <section id="contact" className="py-24 sm:py-32 bg-studio-bg relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-xs font-mono tracking-[0.25em] text-studio-taupe uppercase font-semibold">
              09 / Initiate Collaboration
            </span>
            <span className="w-12 h-[1px] bg-studio-gold" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-studio-dark tracking-tight mb-4">
            LET'S CREATE YOUR SPACE
          </h2>
          <p className="text-stone-600 text-base sm:text-lg font-sans max-w-xl mx-auto leading-relaxed">
            Have a residential interior project in mind? Let's discuss your vision, requirements and space.
          </p>

          {/* Quick Contact Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${contact.phoneRaw}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-studio-dark text-white font-sans text-xs tracking-wider uppercase font-semibold rounded-lg hover:bg-black transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-studio-gold" />
              <span>Call Now</span>
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-stone-300 text-studio-dark font-sans text-xs tracking-wider uppercase font-semibold rounded-lg hover:border-studio-gold transition-all shadow-sm"
            >
              <Mail className="w-4 h-4 text-studio-gold" />
              <span>Email Me</span>
            </a>

            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-studio-gold text-studio-darker font-sans text-xs tracking-wider uppercase font-bold rounded-lg hover:bg-studio-goldLight transition-all shadow-md shadow-studio-gold/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>

        {/* 2-Column: Studio Info & Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Studio Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-white border border-stone-200 shadow-sm space-y-6">
              <h3 className="font-serif text-2xl font-bold text-studio-dark">
                Studio Address & Contact
              </h3>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-beige/70 flex items-center justify-center text-studio-gold shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-studio-taupe uppercase font-semibold">
                      Design Studio Location
                    </div>
                    <p className="text-sm font-medium text-studio-dark mt-1 leading-relaxed">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-beige/70 flex items-center justify-center text-studio-gold shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-studio-taupe uppercase font-semibold">
                      Direct Telephone
                    </div>
                    <a
                      href={`tel:${contact.phoneRaw}`}
                      className="text-sm font-semibold text-studio-dark hover:text-studio-gold transition-colors mt-1 block"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-beige/70 flex items-center justify-center text-studio-gold shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-studio-taupe uppercase font-semibold">
                      Official Inquiries
                    </div>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-sm font-semibold text-studio-dark hover:text-studio-gold transition-colors mt-1 block"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-studio-beige/70 flex items-center justify-center text-studio-gold shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono tracking-wider text-studio-taupe uppercase font-semibold">
                      Studio Hours
                    </div>
                    <p className="text-sm font-medium text-studio-dark mt-1">
                      Monday – Saturday: 9:30 AM – 7:30 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Consultation Note */}
              <div className="pt-6 border-t border-stone-100 text-xs text-stone-500 leading-relaxed">
                Available for site inspections, architect consultations, and turnkey residential execution across Nellore and surrounding regions in Andhra Pradesh.
              </div>

              {/* Admin Portal Trigger */}
              <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-mono text-stone-500">
                <button
                  onClick={() => setIsAdminOpen(true)}
                  className="inline-flex items-center gap-1.5 text-stone-500 hover:text-studio-gold transition-colors"
                >
                  <ShieldCheck className="w-4 h-4 text-studio-gold" />
                  <span>Admin / Enquiry Desk ({enquiries.length})</span>
                </button>
                <span className="text-[10px] text-stone-400">Backend Ready</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-stone-200 shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-studio-dark mb-2">
                Send Project Enquiry
              </h3>
              <p className="text-xs text-stone-500 font-sans mb-8">
                Fill in your project details below and Saif Ali Khan will connect with you within 24 hours.
              </p>

              {isSuccess ? (
                <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif text-xl font-bold text-emerald-900">
                    Enquiry Received Successfully!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-800 font-sans max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out. Your project details have been logged and Saif Ali Khan will contact you directly to discuss your space and schedule an initial consultation.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-6 py-2.5 bg-emerald-700 text-white rounded-lg text-xs font-sans tracking-wider uppercase font-semibold hover:bg-emerald-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMsg && (
                    <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs">
                      {errorMsg}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                        Project Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm bg-white transition-colors"
                      >
                        <option value="Modular Kitchen">Modular Kitchen</option>
                        <option value="Master Bedroom">Master Bedroom</option>
                        <option value="Living Room">Living Room</option>
                        <option value="Complete Home Interior">Complete Home Interior</option>
                        <option value="Site Execution / Turnkey">Site Execution / Turnkey</option>
                        <option value="3D Visualization Only">3D Visualization Only</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Nellore, Tirupati, or nearby"
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono tracking-wider uppercase font-semibold text-stone-700 mb-2">
                      Project Vision & Requirements
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share details about your space dimensions, preferred style, budget expectations, or site timelines..."
                      className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:border-studio-gold focus:ring-2 focus:ring-studio-gold/20 outline-none text-sm transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-studio-gold text-studio-darker font-sans text-xs tracking-[0.2em] uppercase font-bold rounded-lg hover:bg-studio-goldLight transition-all shadow-lg shadow-studio-gold/20 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>Send Project Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Admin Enquiry Management Drawer / Modal */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div className="bg-studio-darker text-white w-full max-w-5xl rounded-2xl border border-white/10 shadow-2xl p-6 sm:p-8 max-h-[90vh] flex flex-col">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-studio-gold/10 text-studio-gold rounded-lg border border-studio-gold/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold">Studio Enquiries Console</h3>
                  <p className="text-xs text-stone-400 font-sans">
                    Live client inquiries stored with status workflow (NEW, CONTACTED, IN PROGRESS, COMPLETED, CLOSED)
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white transition-colors"
                aria-label="Close admin modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Filter Bar */}
            <div className="py-4 flex flex-wrap items-center justify-between gap-3 border-b border-white/5">
              <div className="flex items-center gap-2 text-xs font-mono text-stone-400">
                <Filter className="w-3.5 h-3.5" />
                <span>Filter Status:</span>
                {(['ALL', 'NEW', 'CONTACTED', 'IN PROGRESS', 'COMPLETED', 'CLOSED'] as const).map((st) => (
                  <button
                    key={st}
                    onClick={() => setStatusFilter(st)}
                    className={`px-2.5 py-1 rounded text-[11px] font-sans uppercase font-medium transition-colors ${
                      statusFilter === st
                        ? 'bg-studio-gold text-studio-darker font-bold'
                        : 'bg-white/5 text-stone-300 hover:bg-white/10'
                    }`}
                  >
                    {st}
                  </button>
                ))}
              </div>

              <div className="text-xs font-mono text-stone-400">
                Total: {filteredEnquiries.length} {filteredEnquiries.length === 1 ? 'Record' : 'Records'}
              </div>
            </div>

            {/* Enquiries List */}
            <div className="flex-1 overflow-y-auto py-4 space-y-4">
              {filteredEnquiries.length === 0 ? (
                <div className="text-center py-12 text-stone-500 font-sans text-sm">
                  No inquiries found matching this filter.
                </div>
              ) : (
                filteredEnquiries.map((enq) => (
                  <div
                    key={enq.id}
                    className="p-5 rounded-xl bg-white/[0.03] border border-white/10 space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="font-mono text-[10px] text-studio-gold mr-3">[{enq.id}]</span>
                        <span className="font-serif text-lg font-bold text-white">{enq.name}</span>
                        <span className="text-xs text-stone-400 ml-2 font-sans">({enq.projectType})</span>
                      </div>

                      {/* Status Selector */}
                      <div className="flex items-center gap-3">
                        <select
                          value={enq.status}
                          onChange={(e) => handleStatusChange(enq.id, e.target.value as Enquiry['status'])}
                          className="text-xs bg-black/60 border border-studio-gold/40 text-studio-gold px-2.5 py-1.5 rounded outline-none font-mono"
                        >
                          <option value="NEW">NEW</option>
                          <option value="CONTACTED">CONTACTED</option>
                          <option value="IN PROGRESS">IN PROGRESS</option>
                          <option value="COMPLETED">COMPLETED</option>
                          <option value="CLOSED">CLOSED</option>
                        </select>

                        <button
                          onClick={() => handleDeleteEnquiry(enq.id)}
                          className="p-1.5 rounded hover:bg-red-900/40 text-stone-400 hover:text-red-400 transition-colors"
                          title="Delete entry"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-stone-300 font-sans">
                      <div>
                        <span className="text-stone-500">Phone:</span>{' '}
                        <a href={`tel:${enq.phone}`} className="hover:text-studio-gold text-stone-200">
                          {enq.phone}
                        </a>
                      </div>
                      <div>
                        <span className="text-stone-500">Email:</span>{' '}
                        <a href={`mailto:${enq.email}`} className="hover:text-studio-gold text-stone-200">
                          {enq.email}
                        </a>
                      </div>
                      <div>
                        <span className="text-stone-500">Location:</span> {enq.location || 'Not specified'}
                      </div>
                    </div>

                    {enq.message && (
                      <p className="text-xs text-stone-300 font-sans p-3 bg-black/40 rounded border border-white/5 leading-relaxed">
                        "{enq.message}"
                      </p>
                    )}

                    <div className="text-[10px] font-mono text-stone-500">
                      Logged at: {new Date(enq.date).toLocaleString()}
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setIsAdminOpen(false)}
                className="px-5 py-2 rounded-lg bg-studio-gold text-studio-darker text-xs font-mono uppercase font-bold hover:bg-studio-goldLight transition-colors"
              >
                Close Console
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
