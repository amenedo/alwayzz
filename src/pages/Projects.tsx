const projects = [
  {
    title: 'Nova — Full Brand System',
    client: 'Nova Labs',
    category: 'Brand Identity',
    desc: 'Complete identity, motion system and digital guidelines for a new climate-tech platform.',
  },
  {
    title: 'Flux Mobile App',
    client: 'Flux',
    category: 'App Development',
    desc: 'End-to-end product design and development for a collaborative creative tool used by 80k+ designers.',
  },
  {
    title: 'Atelier Campaign Films',
    client: 'Atelier Paris',
    category: 'Creative Video',
    desc: 'Series of cinematic brand films exploring craft, material and the future of luxury.',
  },
  {
    title: 'Linear Design System',
    client: 'Linear',
    category: 'Visual Design',
    desc: 'Scalable component system and iconography refresh across web and desktop applications.',
  },
  {
    title: 'Pinnacle Icon Set',
    client: 'Pinnacle',
    category: 'Iconography',
    desc: 'A 420-icon design system used in productivity software adopted by leading startups.',
  },
  {
    title: 'Studio Rebrand',
    client: 'Studio 38',
    category: 'Brand Identity',
    desc: 'New positioning, visual language and website for an independent architecture practice.',
  },
]

export default function Projects() {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">Selected Projects</h1>
        <p className="page-subtitle">
          A selection of recent work with founders and brands who value craft, clarity, and speed.
        </p>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div key={i} className="project-card">
              <div className="project-meta">
                <span className="project-category">{p.category}</span>
                <span className="project-client">{p.client}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="page-cta">
          <a href="/contact" className="btn-primary">Start a project</a>
        </div>
      </div>
    </main>
  )
}
