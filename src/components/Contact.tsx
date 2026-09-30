import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Mail, MapPin, Copy, Check, Send, Download, FileText, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Send directly to personal email via FormSubmit AJAX service
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _replyto: formData.email,
          _subject: formData.subject ? `[Portfolio Contact] ${formData.subject}` : `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table',
        }),
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || response.status === 200)) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 7000);
      } else {
        throw new Error(result.message || 'Error delivering message');
      }
    } catch (err) {
      console.warn('Direct API submission error, opening fallback email client:', err);
      // Fallback: open mail client with prefilled info
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
        formData.subject || `Portfolio Inquiry from ${formData.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      setFormSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const cleanPhone = PERSONAL_INFO.phone.replace(/[^0-9]/g, '');
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    formData.message
      ? `Hi Teja, my name is ${formData.name || 'there'}. ${formData.message}`
      : `Hi Teja, I came across your portfolio and would like to connect!`
  )}`;

  return (
    <section id="contact" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">Get In Touch</span>
        <h2 className="section-title">Let's Build Something Great Together</h2>
        <p className="section-subtitle">
          Have an exciting project, internship opportunity, or question? Send a direct message to my email or phone.
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '40px',
          alignItems: 'start',
        }}
      >
        {/* Contact Information & Quick Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="glass-panel" style={{ padding: '32px' }}>
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
                  href={whatsappUrl}
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

        {/* Interactive Contact Form */}
        <div className="glass-panel" style={{ padding: '32px' }}>
          {formSubmitted ? (
            <div
              style={{
                textAlign: 'center',
                padding: '40px 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(16, 185, 129, 0.15)',
                  color: '#10b981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Check size={36} />
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Message Sent to My Inbox!</h3>
              <p style={{ color: 'var(--text-secondary)', maxWidth: '420px', lineHeight: 1.6 }}>
                Thank you for reaching out! Your message has been forwarded to <strong>{PERSONAL_INFO.email}</strong>. I will get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Send a Direct Message</h3>
                <span style={{ fontSize: '0.8rem', color: '#10b981', fontWeight: 600 }}>● Instant Email Delivery</span>
              </div>

              {errorMessage && (
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(239, 68, 68, 0.1)',
                    color: '#ef4444',
                    fontSize: '0.85rem',
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
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
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
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
                  placeholder="Project Collaboration / Inquiries"
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
                  placeholder="Hello, I'd like to discuss a project..."
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

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary"
                  style={{ flex: '1 1 200px', opacity: isSubmitting ? 0.7 : 1 }}
                >
                  {isSubmitting ? (
                    <>
                      Sending Message... <Loader2 size={18} className="animate-spin" />
                    </>
                  ) : (
                    <>
                      Send to Email <Send size={18} />
                    </>
                  )}
                </button>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '10px',
                    background: '#25D366',
                    color: '#ffffff',
                    fontWeight: 600,
                    textDecoration: 'none',
                    border: 'none',
                    fontSize: '0.95rem',
                  }}
                  title="Send via WhatsApp"
                >
                  <MessageCircle size={18} /> Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
