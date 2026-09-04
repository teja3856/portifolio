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
          Official credentials, hackathon honors, and industry AI/ML training certifications.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '50px',
        }}
      >
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className="btn"
            style={{
              padding: '10px 22px',
              fontSize: '0.9rem',
              borderRadius: '9999px',
              background: activeCategory === category ? 'var(--accent-gradient)' : 'var(--bg-card)',
              color: activeCategory === category ? '#ffffff' : 'var(--text-secondary)',
              border: activeCategory === category ? 'none' : '1px solid var(--border-subtle)',
              boxShadow: activeCategory === category ? '0 4px 20px rgba(79, 70, 229, 0.4)' : 'none',
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}
      >
        {filteredCertificates.map(cert => (
          <div
            key={cert.id}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '20px',
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
                height: '220px',
                background: 'var(--bg-tertiary)',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              onClick={() => setSelectedCertificate(cert)}
            >
              <img
                src={cert.image}
                alt={cert.title}
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
                  gap: '10px',
                  transition: 'opacity 0.3s ease',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                }}
                className="cert-overlay"
              >
                <Maximize2 size={20} />
                Click to Inspect Certificate
              </div>

              {/* Badge Tag */}
              <span
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  background: 'rgba(15, 23, 42, 0.75)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  zIndex: 2,
                }}
              >
                <ShieldCheck size={14} color="#10b981" />
                {cert.badge}
              </span>
            </div>

            {/* Content Details */}
            <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--accent-primary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {cert.category}
                </span>

                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <Calendar size={13} />
                  {cert.issueDate}
                </span>
              </div>

              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, lineHeight: 1.3 }}>
                {cert.title}
              </h3>

              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                <strong>Issuer:</strong> {cert.issuer}
              </p>

              {cert.credentialId && (
                <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', background: 'rgba(99, 102, 241, 0.08)', padding: '4px 10px', borderRadius: '6px', width: 'fit-content' }}>
                  ID: {cert.credentialId}
                </div>
              )}

              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.5, flex: 1 }}>
                {cert.description}
              </p>

              {/* Skills Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '4px' }}>
                {cert.skills.map(skill => (
                  <span
                    key={skill}
                    style={{
                      fontSize: '0.75rem',
                      padding: '3px 10px',
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
              <div style={{ display: 'flex', gap: '12px', marginTop: '12px', paddingTop: '16px', borderTop: '1px solid var(--border-subtle)' }}>
                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem', gap: '6px' }}
                >
                  <Maximize2 size={16} /> Inspect
                </button>

                <a
                  href={cert.pdfUrl}
                  download
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '0.85rem', gap: '6px' }}
                >
                  <Download size={16} /> Download
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
              maxWidth: '900px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Modal Header */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    marginBottom: '8px',
                  }}
                >
                  <ShieldCheck size={14} />
                  {selectedCertificate.badge}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{selectedCertificate.title}</h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                  {selectedCertificate.issuer} &nbsp;•&nbsp; {selectedCertificate.issueDate}
                </p>
              </div>

              <button
                onClick={() => setSelectedCertificate(null)}
                className="btn-icon"
                style={{ width: '40px', height: '40px', flexShrink: 0 }}
                aria-label="Close modal"
              >
                <X size={22} />
              </button>
            </div>

            {/* High Res Certificate Image View */}
            <div
              style={{
                width: '100%',
                maxHeight: '520px',
                borderRadius: '16px',
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
                  maxHeight: '520px',
                  objectFit: 'contain',
                }}
              />
            </div>

            {/* Modal Footer & Actions */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '600px' }}>
                {selectedCertificate.description}
              </p>

              <a
                href={selectedCertificate.pdfUrl}
                download
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.9rem' }}
              >
                <Download size={18} /> Download Document
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
