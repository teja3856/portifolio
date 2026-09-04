import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Cpu, Layers, Zap, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const pillars = [
    {
      icon: <Layers size={24} color="#6366f1" />,
      title: 'Scalable Architecture',
      description: 'Building modular, maintainable, and type-safe frontends & microservices that scale effortlessly.'
    },
    {
      icon: <Zap size={24} color="#8b5cf6" />,
      title: 'Lightning Speed Performance',
      description: 'Optimizing rendering pipelines, lazy loading, and bundle sizes to achieve 95+ Core Web Vitals.'
    },
    {
      icon: <Cpu size={24} color="#d946ef" />,
      title: 'AI & Data Integration',
      description: 'Empowering web apps with intelligent LLM features, agentic workflows, and real-time data pipelines.'
    }
  ];

  return (
    <section id="about" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">About & Expertise</span>
        <h2 className="section-title">Technical Mastery & Core Skills</h2>
        <p className="section-subtitle">
          Combining modern frontend craftsmanship with reliable backend infrastructure to build world-class products.
        </p>
      </div>

      {/* Engineering Pillars */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}
      >
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className="glass-panel"
            style={{
              padding: '32px',
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
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{pillar.title}</h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)' }}>{pillar.description}</p>
          </div>
        ))}
      </div>

      {/* Interactive Skills Matrix */}
      <div id="skills" className="glass-panel" style={{ padding: '40px' }}>
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
            marginBottom: '40px',
          }}
        >
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className="btn"
              style={{
                padding: '10px 20px',
                fontSize: '0.9rem',
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

        {/* Skill Progress Bars Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {SKILL_CATEGORIES[activeCategoryIndex].skills.map(skill => (
            <div
              key={skill.name}
              style={{
                background: 'var(--bg-secondary)',
                padding: '20px',
                borderRadius: '14px',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '10px',
                }}
              >
                <span style={{ fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <CheckCircle2 size={16} color="var(--accent-primary)" />
                  {skill.name}
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 700 }}>
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar Container */}
              <div
                style={{
                  height: '8px',
                  width: '100%',
                  background: 'rgba(255, 255, 255, 0.08)',
                  borderRadius: '9999px',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'var(--accent-gradient)',
                    borderRadius: '9999px',
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
