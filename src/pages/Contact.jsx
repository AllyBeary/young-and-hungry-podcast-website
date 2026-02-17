import "./Contact.css";

const contacts = [
  {
    name: "General Inquiries",
    email: "youngandhungryk12@gmail.com",
    description:
      "Questions about the podcast, resources, or collaborations.",
  },
  {
    name: "Guest Applications",
    email: "guests.youngandhungry@gmail.com",
    description:
      "Interested in appearing on the podcast or sharing your story.",
  },
  {
    name: "Research & Partnerships",
    email: "research.youngandhungry@gmail.com",
    description:
      "Educational partnerships, schools, and research collaborations.",
  },
];

export default function Contact() {
  return (
    <main className="contact">
      <header className="contact-hero">
        <h1>Contact</h1>
        <p className="lead">
          We'd love to hear from parents, teachers, students, and partners.
          Reach out using the emails below and we'll get back to you soon.
        </p>
      </header>

      <section className="contact-grid">
        {contacts.map((c, i) => (
          <article key={i} className="contact-card">
            <h2>{c.name}</h2>
            <p className="desc">{c.description}</p>

            <a className="email" href={`mailto:${c.email}`}>
              {c.email}
            </a>

            <a className="email-button" href={`mailto:${c.email}`}>
              Send Email
            </a>
          </article>
        ))}
      </section>

      <section className="contact-footer">
        <p>
          Prefer social media? You can also reach us through our Linktree for
          additional contact options and updates.
        </p>

        <a
          href="https://linktr.ee/youngandhungryk_12"
          target="_blank"
          rel="noreferrer"
          className="linktree-btn"
        >
          Visit Linktree
        </a>
      </section>
    </main>
  );
}
