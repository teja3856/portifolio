import React from 'react';
import { ArrowRight, Mail, Terminal, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      style={{
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ width: '100%', paddingTop: '115px', paddingBottom: '30px' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'flex-start',
          }}
        >
          {/* Main Headline & Intro */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Status Badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: '#10b981',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                }}
              >
                <span
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#10b981',
                    boxShadow: '0 0 10px #10b981',
                  }}
                />
                {PERSONAL_INFO.availability}
              </span>
            </div>

            {/* Title & Tagline */}
            <h1
              style={{
                fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: '-0.03em',
              }}
            >
              Hi, I'm <span className="gradient-text">{PERSONAL_INFO.name}</span>
              <br />
              <span style={{ fontSize: '0.7em', color: 'var(--text-secondary)', fontWeight: 600 }}>
                {PERSONAL_INFO.title}
              </span>
            </h1>

            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', maxWidth: '580px', lineHeight: 1.6 }}>
              {PERSONAL_INFO.tagline}
            </p>

            {/* CTA Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginTop: '8px' }}>
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Teja_Santosh_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
                style={{ boxShadow: '0 4px 20px rgba(99, 102, 241, 0.5)' }}
              >
                Download Resume <Download size={18} />
              </a>

              <a href="#projects" className="btn btn-secondary">
                Explore Projects <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                Let's Talk <Mail size={18} />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn-icon"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>

          {/* Profile Card & Stats Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Main Interactive Profile Card */}
            <div className="glass-panel" style={{ padding: '28px', position: 'relative', overflow: 'hidden' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '20px',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '16px',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'var(--accent-gradient)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    boxShadow: '0 8px 24px rgba(99, 102, 241, 0.4)',
                    flexShrink: 0,
                  }}
                >
                  <Terminal size={28} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{PERSONAL_INFO.name}</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{PERSONAL_INFO.location}</p>
                </div>
              </div>

              {/* Bio summary in card */}
              <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.6 }}>
                {PERSONAL_INFO.bio}
              </p>

              {/* Quick Tech Pill Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['Python', 'Machine Learning', 'SQL', 'React', 'TypeScript', 'Data Analysis'].map(tech => (
                  <span
                    key={tech}
                    style={{
                      padding: '4px 12px',
                      borderRadius: '9999px',
                      background: 'rgba(99, 102, 241, 0.1)',
                      border: '1px solid rgba(99, 102, 241, 0.2)',
                      color: 'var(--accent-primary)',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-mono)',
                      fontWeight: 600,
                    }}
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Metrics & Statistics Grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
              }}
            >
              {PERSONAL_INFO.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '18px 12px',
                    textAlign: 'center',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div
                    className="gradient-text"
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 800,
                      fontFamily: 'var(--font-heading)',
                      lineHeight: 1.2,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

