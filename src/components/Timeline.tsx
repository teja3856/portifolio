import React, { useState } from 'react';
import { TIMELINE } from '../data/portfolioData';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Timeline: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = TIMELINE.filter(item => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="experience" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">Career & Growth</span>
        <h2 className="section-title">Work Experience & Education</h2>
        <p className="section-subtitle">
          My professional journey across software engineering, tech leadership, and academic milestones.
        </p>
      </div>

      {/* Filter Tabs */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '50px' }}>
        <button
          onClick={() => setFilter('all')}
          className="btn"
          style={{
            padding: '8px 20px',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            background: filter === 'all' ? 'var(--accent-gradient)' : 'var(--bg-card)',
            color: filter === 'all' ? '#ffffff' : 'var(--text-secondary)',
            border: filter === 'all' ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          All Timeline
        </button>
        <button
          onClick={() => setFilter('work')}
          className="btn"
          style={{
            padding: '8px 20px',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            background: filter === 'work' ? 'var(--accent-gradient)' : 'var(--bg-card)',
            color: filter === 'work' ? '#ffffff' : 'var(--text-secondary)',
            border: filter === 'work' ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          Work Experience
        </button>
        <button
          onClick={() => setFilter('education')}
          className="btn"
          style={{
            padding: '8px 20px',
            fontSize: '0.85rem',
            borderRadius: '9999px',
            background: filter === 'education' ? 'var(--accent-gradient)' : 'var(--bg-card)',
            color: filter === 'education' ? '#ffffff' : 'var(--text-secondary)',
            border: filter === 'education' ? 'none' : '1px solid var(--border-subtle)',
          }}
        >
          Education
        </button>
      </div>

      {/* Vertical Timeline Tree Container */}
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          paddingLeft: '30px',
        }}
      >
        {/* Glowing Timeline Line */}
        <div
          style={{
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '11px',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary), transparent)',
          }}
        />

        {filteredItems.map(item => (
          <div
            key={item.id}
            style={{
              position: 'relative',
              marginBottom: '40px',
            }}
          >
            {/* Glowing Dot Node */}
            <div
              style={{
                position: 'absolute',
                left: '-30px',
                top: '4px',
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: 'var(--bg-primary)',
                border: '3px solid var(--accent-primary)',
                boxShadow: '0 0 12px var(--accent-glow)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />

            {/* Timeline Content Card */}
            <div className="glass-panel" style={{ padding: '28px' }}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  marginBottom: '12px',
                }}
              >
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '4px 12px',
                    borderRadius: '9999px',
                    background: 'rgba(99, 102, 241, 0.1)',
                    color: 'var(--accent-primary)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                >
                  <Calendar size={14} />
                  {item.period}
                </span>

                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <MapPin size={14} />
                  {item.location}
                </span>
              </div>

              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{item.role}</h3>
              <h4 style={{ fontSize: '1rem', color: 'var(--accent-secondary)', fontWeight: 600, marginBottom: '12px' }}>
                {item.company}
              </h4>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                {item.description}
              </p>

              {/* Achievements list */}
              {item.achievements.length > 0 && (
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {item.achievements.map((ach, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <Award size={16} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {ach}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
