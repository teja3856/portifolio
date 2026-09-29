import React, { useState } from 'react';
import { PROJECTS, type Project } from '../data/portfolioData';
import { ExternalLink, X, CheckCircle, Search } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI / Machine Learning', 'Full-Stack Web App'];

  const filteredProjects = PROJECTS.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
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
          Explore my real-world applications, AI platforms, and hackathon solutions.
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
          }}
        >
          <Search
            size={18}
            color="var(--text-muted)"
            style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }}
          />
          <input
            type="text"
            placeholder="Search projects or tags..."
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '32px',
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
            }}
            onClick={() => setActiveModalProject(project)}
          >
            {/* Image Header with Badge */}
            <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
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
                  top: '16px',
                  left: '16px',
                  padding: '4px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--accent-primary)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                {project.category}
              </span>
            </div>

            {/* Content Body */}
            <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>{project.title}</h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.5 }}>
                  {project.description}
                </p>
              </div>

              {/* Tags and Links */}
              <div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        padding: '3px 10px',
                        borderRadius: '6px',
                        background: 'var(--bg-tertiary)',
                        fontSize: '0.75rem',
                        fontFamily: 'var(--font-mono)',
                        color: 'var(--text-muted)',
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
                    paddingTop: '16px',
                  }}
                >
                  <span style={{ fontSize: '0.85rem', color: 'var(--accent-primary)', fontWeight: 600 }}>
                    Click for details →
                  </span>
                  <div style={{ display: 'flex', gap: '8px' }} onClick={e => e.stopPropagation()}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '36px', height: '36px' }}
                      title="GitHub Repository"
                    >
                      <GithubIcon size={16} />
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-icon"
                      style={{ width: '36px', height: '36px' }}
                      title="Live Demo"
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
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div style={{ position: 'relative', height: '300px' }}>
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveModalProject(null)}
                className="btn-icon"
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  color: 'var(--text-primary)',
                }}
              >
                <X size={20} />
              </button>
            </div>

            <div style={{ padding: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <span
                  style={{
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    background: 'rgba(79, 70, 229, 0.08)',
                    color: 'var(--accent-primary)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
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

              <h2 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: '16px' }}>
                {activeModalProject.title}
              </h2>

              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: 1.7 }}>
                {activeModalProject.longDescription}
              </p>

              <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '12px' }}>Key Highlights</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {activeModalProject.highlights.map((h, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                    <CheckCircle size={18} color="var(--accent-primary)" style={{ marginTop: '2px', flexShrink: 0 }} />
                    {h}
                  </li>
                ))}
              </ul>

              <div style={{ display: 'flex', gap: '16px' }}>
                <a href={activeModalProject.liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
                  Launch Live App <ExternalLink size={18} />
                </a>
                <a href={activeModalProject.githubUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
                  View Source <GithubIcon size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
