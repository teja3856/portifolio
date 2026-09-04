import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Code2 } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        padding: '40px 24px',
        marginTop: '60px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
        }}
      >
        {/* Brand & Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              background: 'var(--accent-gradient)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
            }}
          >
            <Code2 size={18} />
          </div>
          <span style={{ fontWeight: 700, fontFamily: 'var(--font-heading)' }}>{PERSONAL_INFO.name}</span>
          <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} All rights reserved.
          </span>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="btn-icon"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
};
