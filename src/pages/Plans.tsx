const plans = [
  {
    name: 'On-Demand',
    price: 'From $6,500',
    period: 'per project',
    desc: 'Perfect for one-off campaigns, websites, or brand refreshes with a clear scope.',
    features: [
      'Dedicated creative lead',
      '2 rounds of revisions',
      '2-week delivery',
      'Source files + guidelines',
    ],
  },
  {
    name: 'Partnership',
    price: '$9,800',
    period: '/month',
    desc: 'Ongoing creative partnership. Ideal for scaling brands that ship frequently.',
    features: [
      'Unlimited requests',
      'Priority queue',
      'Monthly strategy call',
      'Full asset library access',
      'Dedicated designer + art director',
    ],
    featured: true,
  },
  {
    name: 'Studio',
    price: 'Custom',
    period: '',
    desc: 'Embedded creative studio for ambitious companies and agencies.',
    features: [
      'Embedded team of 3-5',
      'Weekly alignment',
      'Brand guardianship',
      'Motion, 3D & film included',
      'First access to new work',
    ],
  },
]

export default function Plans() {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">Plans</h1>
        <p className="page-subtitle">
          Flexible ways to work together. All plans include the same obsessive attention to craft.
        </p>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
              <div>
                <div className="plan-name">{plan.name}</div>
                <div className="plan-price">
                  {plan.price} <span className="plan-period">{plan.period}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <a href="/contact" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                {plan.name === 'Studio' ? 'Talk to us' : 'Get started'}
              </a>
            </div>
          ))}
        </div>

        <p className="plans-note">
          All partnerships begin with a 15-minute call. No long contracts required to start.
        </p>
      </div>
    </main>
  )
}
