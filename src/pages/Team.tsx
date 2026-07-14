const team = [
  {
    name: 'Elena Voss',
    role: 'Founder & Creative Director',
    bio: 'Former design lead at Framer and Figma. Obsessed with typography, systems, and the quiet details that make work feel alive.',
    img: 'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png',
  },
  {
    name: 'Marcus Hale',
    role: 'Design Director',
    bio: '10 years crafting identities and digital products for ambitious founders. Previously at Linear and Webflow.',
    img: 'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png',
  },
  {
    name: 'Sofia Reyes',
    role: 'Motion & Film',
    bio: 'Directs and edits all video work. Background in documentary and brand film. Makes complex ideas feel human.',
    img: 'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png',
  },
  {
    name: 'Leo Park',
    role: 'Product Designer',
    bio: 'Builds interfaces that disappear. Specializes in design systems and the intersection of craft and scale.',
    img: 'https://framerusercontent.com/images/hfneFL6CHBi5BnNvCeOaqU9HqE4.png',
  },
]

export default function Team() {
  return (
    <main className="page">
      <div className="page-container">
        <h1 className="page-title">The Team</h1>
        <p className="page-subtitle">
          A small studio of obsessive craftspeople. We work with a handful of partners at a time so every project receives real attention.
        </p>

        <div className="team-grid">
          {team.map((member, i) => (
            <div key={i} className="team-card">
              <img src={member.img} alt={member.name} className="team-avatar" />
              <div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <p className="team-bio">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
