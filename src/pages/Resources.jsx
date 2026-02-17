import "./Resources.css";

const categories = [
  {
    title: "Getting Started with AI",
    description:
      "Quick guides and beginner-friendly explainers for parents and teachers learning what AI is and how it shows up in school and everyday life.",
    items: [
      { name: "AI Basics for Busy Adults (Guide)", type: "Guide", href: "#" },
      { name: "Responsible AI Use: Classroom Norms (Checklist)", type: "PDF", href: "#" },
      { name: "Family AI Agreement (Template)", type: "Template", href: "#" },
    ],
  },
  {
    title: "Episode Companion Activities",
    description:
      "Printable activities and discussion prompts tied to podcast topics—ready to use at home or in the classroom.",
    items: [
      { name: "Prompting Practice Worksheet (Grades 6–12)", type: "Worksheet", href: "#" },
      { name: "AI Fact-Check Challenge (All Grades)", type: "Activity", href: "#" },
      { name: "Bias & Fairness Reflection Cards", type: "Printable", href: "#" },
    ],
  },
  {
    title: "Interactive Tools & Games",
    description:
      "Hands-on experiences that make AI concepts more concrete through play and experimentation.",
    items: [
      { name: "Build-a-Prompt Mini Game", type: "Interactive", href: "#" },
      { name: "Spot the Hallucination", type: "Game", href: "#" },
      { name: "Privacy Detective", type: "Interactive", href: "#" },
    ],
  },
  {
    title: "Badges & Certificates",
    description:
      "Progress checkpoints that reward consistent learning. Perfect for professional portfolios and résumés.",
    items: [
      { name: "AI Literacy Badge: Foundations", type: "Badge", href: "#" },
      { name: "Responsible Use Certificate", type: "Certificate", href: "#" },
      { name: "Classroom Integration Badge", type: "Badge", href: "#" },
    ],
  },
];

export default function Resources() {
  return (
    <main className="resources">
      <header className="resources-hero">
        <h1>Resources</h1>
        <p className="lead">
          Supplemental tools that pair with the Young & Hungry K–12 Podcast.
          Everything here is designed to help parents and teachers turn AI
          learning into real classroom and home practices.
        </p>
      </header>

      <section className="resources-grid">
        {categories.map((cat, i) => (
          <article key={i} className="category">
            <h2>{cat.title}</h2>
            <p className="cat-desc">{cat.description}</p>

            <ul className="resource-list">
              {cat.items.map((item, j) => (
                <li key={j} className="resource-item">
                  <a href={item.href} className="resource-link">
                    {item.name}
                  </a>
                  <span className="pill">{item.type}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="resources-footer">
        <h2>Want something added?</h2>
        <p>
          Have a resource idea you want us to create or a tool you think should
          be featured? Send us a suggestion and we’ll consider it for a future
          episode and resource pack.
        </p>
      </section>
    </main>
  );
}
