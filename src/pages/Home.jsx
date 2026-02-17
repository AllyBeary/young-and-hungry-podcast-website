import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const slides = [
  {
    img: "https://picsum.photos/1600/900?random=11",
    title: "AI for Parents & Teachers",
    subtitle:
      "Practical guidance for using AI responsibly to support K–12 learning—without the overwhelm.",
  },
  {
    img: "https://picsum.photos/1600/900?random=12",
    title: "Short Episodes. Big Takeaways.",
    subtitle:
      "A podcast built for busy adults: what AI is, how it works, and how to teach kids to use it well.",
  },
  {
    img: "https://picsum.photos/1600/900?random=13",
    title: "Turn Learning Into Action",
    subtitle:
      "Worksheets, activities, and interactive tools connected to each episode—ready for home or classroom.",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const active = slides[index];

  return (
    <main className="home">
      {/* PODCAST */}
      <section
        className="hero"
        style={{ backgroundImage: `url(${active.img})` }}
        aria-label="Podcast hero slideshow"
      >
        <div className="hero-overlay">
          <p className="eyebrow">Young & Hungry Podcast</p>
          <h1>{active.title}</h1>
          <p className="sub">{active.subtitle}</p>

          <div className="hero-actions">
            <Link to="/podcast" className="cta-button">
              Take me to the podcast!
            </Link>
          </div>

          <div className="dots" aria-label="Slideshow controls">
            {slides.map((_, i) => (
              <button
                key={i}
                className={i === index ? "dot active" : "dot"}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="split">
        <img
          src="https://picsum.photos/800/600?random=21"
          alt="A parent and teacher collaborating"
        />
        <div className="text">
          <h2>About</h2>
          <p>
            Our goal is to make AI education more accessible by centralizing
            guidance for parents and teachers. This website supports a podcast
            designed for busy working adults who want to help K–12 students
            become confident, responsible users of AI.
          </p>
          <p>
            On the About page, you’ll find the purpose behind the project and
            the stories of the creators—why we care about AI literacy and how
            we’re building resources that actually fit into real schedules.
          </p>
          <Link to="/about" className="text-link">
            Learn more about the creators →
          </Link>
        </div>
      </section>

      {/* RESEARCH */}
      <section className="split reverse">
        <div className="text">
          <h2>Research</h2>
          <p>
            AI is changing what it means to learn, create, and evaluate
            information. But families and educators often face a gap: lots of
            AI content exists, yet it’s scattered, inconsistent, or too
            technical to apply.
          </p>
          <p>
            Our Research page explains the background and significance of AI
            resources for K–12, highlights what existing solutions do well, and
            points to what’s still missing—clear, practical guidance paired with
            ready-to-use learning activities.
          </p>
          <Link to="/research" className="text-link">
            Read our research and rationale →
          </Link>
        </div>

        <img
          src="https://picsum.photos/800/600?random=22"
          alt="A classroom learning environment"
        />
      </section>

      {/* RESOURCES */}
      <section className="split">
        <img
          src="https://picsum.photos/800/600?random=23"
          alt="Worksheets and learning tools"
        />
        <div className="text">
          <h2>Resources</h2>
          <p>
            Every episode links to extra materials—activity worksheets,
            discussion prompts, and interactive games that help kids understand
            AI concepts in age-appropriate ways.
          </p>
          <p>
            After listening, parents and teachers can immediately apply what
            they learned at home or in the classroom. Over time, learners can
            also earn badges or certificates for professional portfolios after
            reaching checkpoints in the podcast experience.
          </p>
          <Link to="/resources" className="text-link">
            Explore tools and activities →
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact-preview">
        <h2>Contact</h2>
        <p>
          Want to suggest an episode topic, share a classroom challenge, or
          collaborate on resources? Reach out—we’d love to hear from parents,
          teachers, and community partners.
        </p>
        <Link to="/contact" className="cta-button small">
          Contact us
        </Link>
      </section>
    </main>
  );
}
