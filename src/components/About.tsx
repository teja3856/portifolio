import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Layers, Zap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const pillars = [
    {
      icon: <Cpu size={24} color="#6366f1" />,
      title: 'Machine Learning & Data',
      description: 'Developing supervised learning models, data preprocessing pipelines, and exploratory data analysis using Python, Scikit-Learn, and SQL.'
    },
    {
      icon: <Layers size={24} color="#8b5cf6" />,
      title: 'Full-Stack Development',
      description: 'Building responsive, user-friendly web applications and interactive dashboards with React, TypeScript, and modern web technologies.'
    },
    {
      icon: <Zap size={24} color="#d946ef" />,
      title: 'Problem Solving & Collaboration',
      description: 'Tackling real-world challenges through national hackathons like Smart India Hackathon, active project coordination, and teamwork.'
    }
  ];

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">About & Focus</span>
        <h2 className="section-title">Academic & Technical Foundation</h2>
        <p className="section-subtitle">
          B.Tech AI/ML student at GITAM University combining machine learning fundamentals, data analysis, and full-stack software development.
        </p>
      </div>

      {/* Engineering & Learning Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}
      >
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '28px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '14px',
                background: 'rgba(99, 102, 241, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {pillar.icon}
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>{pillar.title}</h3>
            <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      {/* Interactive Skills Matrix */}
      <div id="skills" className="glass-panel" style={{ padding: '36px 28px' }}>
        <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '24px', textAlign: 'center' }}>
          Interactive Tech Stack Matrix
        </h3>

        {/* Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '36px',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className="btn"
              style={{
                padding: '9px 20px',
                fontSize: '0.875rem',
                borderRadius: '9999px',
                background: activeCategoryIndex === idx ? 'var(--accent-gradient)' : 'var(--bg-tertiary)',
                color: activeCategoryIndex === idx ? '#ffffff' : 'var(--text-secondary)',
                border: activeCategoryIndex === idx ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: activeCategoryIndex === idx ? '0 4px 16px rgba(99, 102, 241, 0.4)' : 'none',
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid (Clean tags/chips, no percentages or progress bars) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map(skill => (
            <div
              key={skill.name}
              style={{
                background: 'var(--bg-secondary)',
                padding: '22px 20px',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                transition: 'transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.4)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(99, 102, 241, 0.12)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={20} color="var(--accent-primary)" style={{ flexShrink: 0 }} />
                <h4 style={{ margin: 0, fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
                  {skill.name}
                </h4>
              </div>

              {/* Skill Tags/Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skill.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      padding: '5px 12px',
                      borderRadius: '9999px',
                      background: 'var(--bg-tertiary)',
                      fontSize: '0.8rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      border: '1px solid var(--border-subtle)',
                      display: 'inline-flex',
                      alignItems: 'center',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

