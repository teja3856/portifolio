import React, { useState } from 'react';
import { CERTIFICATES } from '../data/portfolioData';
import type { Certificate } from '../data/portfolioData';
import { Award, Download, Maximize2, X, Calendar, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const categories = ['All', 'Hackathons & Innovation', 'AI & Machine Learning', 'Industry Internship'];

  const filteredCertificates = CERTIFICATES.filter(cert => {
    if (activeCategory === 'All') return true;
    return cert.category === activeCategory;
  });

  return (
    <section id="certifications" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">
          <Award size={16} />
          Verified Credentials
        </span>
        <h2 className="section-title">Certifications & Achievements</h2>
        <p className="section-subtitle">
          Official credentials, hackathon participation honors, and AI/ML training program certifications.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '10px',
          marginBottom: '40px',
        }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="btn"
            style={{
              padding: '8px 18px',
              fontSize: '0.85rem',
              borderRadius: '9999px',
              background: activeCategory === category ? 'var(--accent-gradient)' : 'var(--bg-card)',
              color: activeCategory === category ? '#ffffff' : 'var(--text-secondary)',
              border: activeCategory === category ? 'none' : '1px solid var(--border-subtle)',
              boxShadow: activeCategory === category ? '0 4px 18px rgba(79, 70, 229, 0.4)' : 'none',
              transition: 'all 0.3s ease',
            }}
          >
            {category === 'All' ? 'All Certificates' : category}
          </button>
        ))}
      </div>

      {/* Certificates Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
        }}
      >
        {filteredCertificates.map(cert => (
          <div
            key={cert.id}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '18px',
              overflow: 'hidden',
              border: '1px solid var(--border-subtle)',
              position: 'relative',
              transition: 'all 0.3s ease',
            }}
          >
            {/* Certificate Preview Image Box */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '200px',
                background: 'var(--bg-tertiary)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top',
                  transition: 'transform 0.5s ease',
                }}
                className="cert-img"
              />

              {/* Hover Overlay with Quick View */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.45)',
                  backdropFilter: 'blur(3px)',
                  opacity: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'opacity 0.3s ease',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
                className="cert-overlay"
              >
                <Maximize2 size={18} />
                Click to Inspect Certificate
              </div>

              {/* Badge Tag */}
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '0.725rem',
                  fontWeight: 700,
                  padding: '4px 10px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  zIndex: 2,
                }}
              >
                <ShieldCheck size={13} color="#10b981" />
                {cert.badge}
              </span>
            </div>

            {/* Content Details */}
            <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1, gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {cert.category}
                </span>

                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={12} />
                  {cert.issueDate}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, lineHeight: 1.35 }}>
                {cert.title}
              </h3>

              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <strong>Issuer:</strong> {cert.issuer}
              </p>

              {cert.credentialId && (
                <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', background: 'rgba(99, 102, 241, 0.08)', padding: '3px 8px', borderRadius: '6px', width: 'fit-content' }}>
                  ID: {cert.credentialId}
                </div>
              )}

              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.5, flex: 1 }}>
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                {cert.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.725rem',
                      padding: '3px 9px',
                      borderRadius: '9999px',
                      background: 'var(--bg-secondary)',
                      border: '1px solid var(--border-subtle)',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    #{skill}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', marginTop: '8px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="btn btn-secondary"
                  aria-label={`Inspect ${cert.title}`}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '0.825rem', gap: '6px' }}
                >
                  <Maximize2 size={15} /> Inspect
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  aria-label={`Download certificate document for ${cert.title}`}
                  style={{ flex: 1, padding: '8px 12px', fontSize: '0.825rem', gap: '6px' }}
                >
                  <Download size={15} /> Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Certificate Inspection */}
      {selectedCertificate && (
        <div className="modal-overlay" onClick={() => setSelectedCertificate(null)}>
          <div
            className="modal-content"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: '850px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '14px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    marginBottom: '6px',
                  }}
                >
                  <ShieldCheck size={13} />
                  {selectedCertificate.badge}
                </span>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{selectedCertificate.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                  {selectedCertificate.issuer} &nbsp;•&nbsp; {selectedCertificate.issueDate}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="btn-icon"
                style={{ width: '36px', height: '36px', flexShrink: 0 }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* High Res Certificate Image View */}
            <div
              style={{
                width: '100%',
                maxHeight: '480px',
                borderRadius: '14px',
                overflow: 'hidden',
                background: '#000000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid var(--border-subtle)',
                boxShadow: 'var(--shadow-md)',
              }}
            >
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '480px',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Modal Footer & Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '14px', paddingTop: '10px', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '560px', lineHeight: 1.5 }}>
                {selectedCertificate.description}
              </p>

              <a
                href={selectedCertificate.pdfUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '9px 20px', fontSize: '0.875rem' }}
              >
                <Download size={16} /> Download Document
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hover styling for image cards */}
      <style>{`
        .glass-panel:hover .cert-img {
          transform: scale(1.05);
        }
        .glass-panel:hover .cert-overlay {
          opacity: 1 !important;
        }
      `}</style>
    </section>
  );
};

