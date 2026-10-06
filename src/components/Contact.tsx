import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Copy, Check, Download, FileText, Phone, MessageCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [];
    if (formData.name) parts.push(`*Name:* ${formData.name}`);
    if (formData.email) parts.push(`*Email:* ${formData.email}`);
    if (formData.subject) parts.push(`*Subject:* ${formData.subject}`);
    if (formData.message) parts.push(`\n*Message:*\n${formData.message}`);

    const messageText =
      parts.length > 0
        ? parts.join('\n')
        : 'Hi Teja, I came across your portfolio and would like to connect!';

    const url = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const directWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    'Hi Teja, I came across your portfolio and would like to connect!'
  )}`;

  return (
    <section id="contact" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Let's Connect</h2>
        <p className="section-subtitle">
          Have a project, internship opportunity, or collaboration idea? I'd be happy to connect.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}
      >
        {/* Contact Information & Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '28px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '20px' }}>Contact Information</h3>

            {/* Resume Download Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: '12px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.25)',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    flexShrink: 0,
                  }}
                >
                  <FileText size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Official Curriculum Vitae</div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700 }}>Teja Santosh Resume.pdf</div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Teja_Santosh_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                title="Download Resume"
              >
                <Download size={16} /> Download
              </a>
            </div>

            {/* Phone & WhatsApp Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10b981',
                    flexShrink: 0,
                  }}
                >
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Phone & WhatsApp</div>
                  <a
                    href={`tel:${cleanPhone}`}
                    style={{ fontSize: '0.95rem', fontWeight: 600, color: 'inherit', textDecoration: 'none' }}
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '6px' }}>
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-icon"
                  style={{ width: '36px', height: '36px', color: '#10b981' }}
                  title="Chat on WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="btn-icon"
                  style={{ width: '36px', height: '36px' }}
                  title="Copy Phone"
                >
                  {copiedPhone ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '16px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Direct Email</div>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    style={{ fontSize: '0.95rem', fontWeight: 600, color: 'inherit', textDecoration: 'none' }}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="btn-icon"
                style={{ width: '36px', height: '36px' }}
                title="Copy Email"
              >
                {copiedEmail ? <Check size={18} color="#10b981" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Location Card */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px',
                borderRadius: '12px',
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '24px',
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(217, 70, 239, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d946ef',
                  flexShrink: 0,
                }}
              >
                <MapPin size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Location</div>
                <div style={{ fontSize: '0.95rem', fontWeight: 600 }}>{PERSONAL_INFO.location}</div>
              </div>
            </div>

            {/* Social Links */}
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '12px' }}>Social Profiles</h4>
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="btn-icon" aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={PERSONAL_INFO.twitter} target="_blank" rel="noreferrer" className="btn-icon" aria-label="Twitter">
                <TwitterIcon size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Interactive WhatsApp Contact Form */}
        <div className="glass-panel" style={{ padding: '28px' }}>
          <form onSubmit={handleOpenWhatsApp} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Send a Direct Message</h3>
              <span style={{ fontSize: '0.8rem', color: '#25D366', fontWeight: 600 }}>● Instant WhatsApp Connect</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '10px',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    outline: 'none',
                  }}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Subject
              </label>
              <input
                type="text"
                placeholder="Project Collaboration / Internship Opportunity"
                value={formData.subject}
                onChange={e => setFormData({ ...formData, subject: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                Message *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Hello Teja, I would like to discuss..."
                value={formData.message}
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '10px',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn"
              style={{
                width: '100%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                padding: '14px 24px',
                borderRadius: '12px',
                background: '#25D366',
                color: '#ffffff',
                fontWeight: 700,
                fontSize: '1rem',
                border: 'none',
                boxShadow: '0 4px 14px rgba(37, 211, 102, 0.35)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
            >
              <MessageCircle size={20} /> Open & Send on WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};


