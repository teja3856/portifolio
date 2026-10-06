import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ExternalLink, X, CheckCircle, Search, Eye } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / Machine Learning', 'Full-Stack Web App'];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="section-container">
      {/* Section Header */}
      <div className="section-header">
        <span className="section-badge">Featured Work</span>
        <h2 className="section-title">Projects & Applications</h2>
        <p className="section-subtitle">
          Real-world applications, machine learning workflows, and hackathon solutions focused on problem-solving and software architecture.
        </p>
      </div>

      {/* Filter and Search Bar Container */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '40px',
        }}
      >
        {/* Category Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="btn"
              style={{
                padding: '8px 18px',
                fontSize: '0.85rem',
                borderRadius: '9999px',
                background: selectedCategory === cat ? 'var(--accent-gradient)' : 'var(--bg-card)',
                color: selectedCategory === cat ? '#ffffff' : 'var(--text-secondary)',
                border: selectedCategory === cat ? 'none' : '1px solid var(--border-subtle)',
                boxShadow: selectedCategory === cat ? '0 4px 14px var(--accent-glow)' : 'none',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input Box */}
        <div
          style={{
            position: 'relative',
            minWidth: '240px',
            flex: '1',
            maxWidth: '360px',
          }}
        >
          <Search
            size={18}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search projects or technologies..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 16px 10px 42px',
              borderRadius: '9999px',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-primary)',
              outline: 'none',
              fontSize: '0.9rem',
            }}
          />
        </div>
      </div>

      {/* Projects Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '28px',
        }}
      >
        {filteredProjects.map(project => (
          <div
            key={project.id}
            className="glass-panel"
            style={{
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              cursor: 'pointer',
              borderRadius: '18px',
              border: '1px solid var(--border-subtle)',
            }}
            onClick={() => setActiveModalProject(project)}
          >
            {/* Image Header with Badge */}
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
              <img
                src={project.image}
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
              />
              <span
                style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Content Body */}
            <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '16px' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  {project.description}
                </p>
              </div>

              {/* Tags and Action Bar */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 9px',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '14px',
                    gap: '12px',
                  }}
                >
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="btn btn-secondary"
                    aria-label={`View details for ${project.title}`}
                    style={{
                      flex: '1',
                      padding: '8px 16px',
                      fontSize: '0.85rem',
                      borderRadius: '9999px',
                      color: 'var(--accent-primary)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      background: 'rgba(99, 102, 241, 0.04)',
                      fontWeight: 700,
                      gap: '6px',
                    }}
                  >
                    <Eye size={15} />
                    View Details
                  </button>

                  <div style={{ display: 'flex', gap: '8px' }} onClick={e => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '36px', height: '36px' }}
                      title="GitHub Repository"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '36px', height: '36px', color: 'var(--accent-primary)' }}
                      title="Live Demo"
                      aria-label={`Open Live Demo for ${project.title}`}
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="modal-overlay" onClick={() => setActiveModalProject(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()} style={{ maxWidth: '850px' }}>
            <div style={{ position: 'relative', height: '260px' }}>
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-icon"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  color: 'var(--text-primary)',
                }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Category & Metric */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
                <span
                  style={{
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(79, 70, 229, 0.08)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                  }}
                >
                  {activeModalProject.category}
                </span>
                {activeModalProject.metrics && (
                  <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 600 }}>
                    ⚡ {activeModalProject.metrics}
                  </span>
                )}
              </div>

              <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>
                {activeModalProject.title}
              </h2>

              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                {activeModalProject.longDescription}
              </p>

              {/* Problem & Solution */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                  gap: '16px',
                }}
              >
                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#ef4444', marginBottom: '6px' }}>
                    Problem
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {activeModalProject.problem}
                  </p>
                </div>

                <div
                  style={{
                    background: 'var(--bg-secondary)',
                    padding: '16px',
                    borderRadius: '12px',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#10b981', marginBottom: '6px' }}>
                    Solution
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {activeModalProject.solution}
                  </p>
                </div>
              </div>

              {/* My Contribution */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '10px' }}>My Contribution</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeModalProject.contribution.map((c, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle size={16} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '8px' }}>Technologies</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {activeModalProject.technologies.map(tech => (
                    <span
                      key={tech}
                      style={{
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.08)',
                        border: '1px solid rgba(99, 102, 241, 0.2)',
                        color: 'var(--accent-primary)',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        fontWeight: 600,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '12px', borderTop: '1px solid var(--border-subtle)' }}>
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.9rem' }}
                >
                  <ExternalLink size={17} /> Live Demo / Preview
                </a>
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                  style={{ padding: '10px 22px', fontSize: '0.9rem', border: '1px solid var(--border-subtle)' }}
                >
                  <GithubIcon size={17} /> GitHub Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

