import { useState } from 'react'

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most brand or digital projects land between 3–8 weeks depending on scope. We move fast without sacrificing craft.',
  },
  {
    q: 'What does the process look like?',
    a: 'Discovery call → proposal → kickoff → concepts → refinement → final delivery + guidelines. You\'re involved at every meaningful step.',
  },
  {
    q: 'Do you work with startups or only big brands?',
    a: 'We love working with ambitious founders at any stage. Many of our favorite projects started as two-person teams.',
  },
  {
    q: 'How many rounds of revisions are included?',
    a: 'Two thoughtful rounds are built into every project. Additional rounds are available if needed.',
  },
  {
    q: 'Can we start with a small test project?',
    a: 'Absolutely. Many long-term partners began with a single campaign, icon set, or landing page.',
  },
  {
    q: 'What tools do you use for collaboration?',
    a: 'Figma, Notion, and Slack or email. We adapt to whatever you already use.',
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">Frequently Asked Questions</h1>
        <p className="page-subtitle">Everything you might want to know before we work together.</p>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className={`faq-question ${openIndex === i ? 'open' : ''}`}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className="faq-icon">{openIndex === i ? '–' : '+'}</span>
              </button>
              {openIndex === i && (
                <div className="faq-answer">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="page-cta" style={{ marginTop: 60 }}>
          <a href="/contact" className="btn-primary">Still have questions? Let’s chat.</a>
        </div>
      </div>
    </main>
  )
}
