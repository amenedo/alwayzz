import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate send
    setTimeout(() => {
      setSubmitted(true)
    }, 420)
  }

  if (submitted) {
    return (
      <main className="page">
        <div className="page-container" style={{ textAlign: 'center', maxWidth: 520 }}>
          <h1 className="page-title">Thank you.</h1>
          <p className="page-subtitle" style={{ marginBottom: 40 }}>
            We received your note and will reply within 24 hours. In the meantime, feel free to explore the work.
          </p>
          <a href="/" className="btn-primary">Back to homepage</a>
        </div>
      </main>
    )
  }

  return (
    <main className="page">
      <div className="page-container contact-layout">
        <div>
          <h1 className="page-title">Get in Touch</h1>
          <p className="page-subtitle">
            Tell us about your project, timeline, or just say hello. We read every message.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} />
            </div>
            <div className="form-field">
              <label htmlFor="message">What are you working on?</label>
              <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary" style={{ marginTop: 8 }}>
              Send message
            </button>
          </form>
        </div>

        <div className="contact-info">
          <div>
            <div className="info-label">Email</div>
            <a href="mailto:hello@alwayzz.com">hello@alwayzz.com</a>
          </div>
          <div>
            <div className="info-label">Based in</div>
            <div>New York + Remote</div>
          </div>
          <div>
            <div className="info-label">Response time</div>
            <div>Usually within a day</div>
          </div>
        </div>
      </div>
    </main>
  )
}
