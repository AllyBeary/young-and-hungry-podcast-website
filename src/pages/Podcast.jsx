import "./Podcast.css";
import logo from "../assets/young-and-hungry-logo.jpg";

const episodes = [
  {
    id: 1,
    title: "Episode 1: What Even Is AI (and What It Isn’t)?",
    summary:
      "A friendly, jargon-free intro to AI. We cover what AI can do today, what it can’t, and how to talk about it with K–12 kids.",
    thumb: "https://picsum.photos/600/340?random=101",
    tag: "Foundations",
    length: "18 min",
  },
  {
    id: 2,
    title: "Episode 2: AI at School—Cheating, Learning, or Both?",
    summary:
      "How to set expectations for responsible use. We discuss classroom norms, plagiarism vs. support tools, and simple policies families can agree on.",
    thumb: "https://picsum.photos/600/340?random=102",
    tag: "Guidelines",
    length: "22 min",
  },
  {
    id: 3,
    title: "Episode 3: Prompting 101 for Busy Adults",
    summary:
      "A practical prompt framework you can teach students: goal → context → constraints → examples. Includes kid-friendly examples for different grades.",
    thumb: "https://picsum.photos/600/340?random=103",
    tag: "Skills",
    length: "20 min",
  },
  {
    id: 4,
    title: "Episode 4: Fact-Checking in the Age of AI",
    summary:
      "AI can sound confident and still be wrong. Learn quick verification habits, source-checking routines, and how to model skepticism for students.",
    thumb: "https://picsum.photos/600/340?random=104",
    tag: "Media Literacy",
    length: "26 min",
  },
  {
    id: 5,
    title: "Episode 5: Bias, Fairness, and “Is This Output Okay?”",
    summary:
      "We explore how bias shows up in AI and what families and teachers can do: discussion prompts, reflection questions, and examples kids understand.",
    thumb: "https://picsum.photos/600/340?random=105",
    tag: "Ethics",
    length: "24 min",
  },
  {
    id: 6,
    title: "Episode 6: AI & Creativity—Using Tools Without Losing Your Voice",
    summary:
      "How students can brainstorm with AI while still owning the work. Includes simple rules of thumb and an activity you can do in 10 minutes.",
    thumb: "https://picsum.photos/600/340?random=106",
    tag: "Creativity",
    length: "19 min",
  },
  {
    id: 7,
    title: "Episode 7: Privacy for Kids—What to Share and What Not To",
    summary:
      "Practical privacy guidance: what counts as personal data, safe prompting habits, and how to choose age-appropriate tools and settings.",
    thumb: "https://picsum.photos/600/340?random=107",
    tag: "Safety",
    length: "21 min",
  },
  {
    id: 8,
    title: "Episode 8: AI for Teachers—Lesson Planning Without the Burnout",
    summary:
      "How educators can use AI to draft lesson ideas, differentiate materials, and create rubrics—while keeping pedagogy and judgment in the driver’s seat.",
    thumb: "https://picsum.photos/600/340?random=108",
    tag: "Teaching",
    length: "28 min",
  },
  {
    id: 9,
    title: "Episode 9: AI for Parents—Homework Help the Right Way",
    summary:
      "A guide for using AI as a tutor instead of an answer machine. Learn prompts that encourage thinking and how to spot when help becomes doing.",
    thumb: "https://picsum.photos/600/340?random=109",
    tag: "At Home",
    length: "23 min",
  },
  {
    id: 10,
    title: "Episode 10: Badges & Certificates—Motivation That Actually Works",
    summary:
      "We explain how episode checkpoints unlock badges/certificates for portfolios—and how to turn learning into real classroom or home routines.",
    thumb: "https://picsum.photos/600/340?random=110",
    tag: "Community",
    length: "17 min",
  },
];

function YouTubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8ZM10 15.2V8.8L15.5 12 10 15.2Z" />
    </svg>
  );
}

function SpotifyIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.6 14.5a.8.8 0 0 1-1.1.3c-3-1.8-6.7-2.2-11-.9a.8.8 0 1 1-.4-1.5c4.7-1.4 8.8-1 12.1 1a.8.8 0 0 1 .4 1.1Zm1-2.4a1 1 0 0 1-1.4.3c-3.4-2.1-8.6-2.7-12.6-1.5a1 1 0 1 1-.6-1.9c4.6-1.4 10.4-.7 14.3 1.7a1 1 0 0 1 .3 1.4Zm.1-2.6C14 9.2 7.7 9 3.8 10.2a1.2 1.2 0 0 1-.7-2.3c4.6-1.4 11.7-1.1 16.6 1.8a1.2 1.2 0 0 1-1.3 2Z" />
    </svg>
  );
}

export default function Podcast() {
  return (
    <main className="podcast">
      <header className="podcast-header">
        <div className="channel">
          <img src={logo} alt="Young & Hungry logo" className="avatar" />
          <div className="channel-info">
            <h1>Podcast</h1>
            <p>
              Bite-sized episodes for parents & teachers learning how to use AI
              responsibly with K–12 students. Each episode pairs with optional
              activities and resources you can use right away.
            </p>

            <div className="channel-meta">
              <span>{episodes.length} episodes</span>
              <span>•</span>
              <span>AI literacy</span>
              <span>•</span>
              <span>Practical + classroom-ready</span>
            </div>
          </div>
        </div>

        <div className="actions">
          <button className="pill">Notify me</button>
          <button className="pill dark">Subscribe</button>
        </div>
      </header>

      <section className="episodes">
        {episodes.map((ep) => (
          <article key={ep.id} className="card">
            <div className="thumb-wrap">
              <img className="thumb" src={ep.thumb} alt="" />
              <span className="length">{ep.length}</span>
            </div>

            <div className="card-body">
              <div className="tags">
                <span className="tag">{ep.tag}</span>
              </div>

              <h2 className="title">{ep.title}</h2>
              <p className="summary">{ep.summary}</p>

              <div className="card-actions">
                <button className="icon-btn youtube" aria-label="Watch on YouTube">
                  <YouTubeIcon className="icon" />
                  <span>YouTube</span>
                </button>

                <button className="icon-btn spotify" aria-label="Listen on Spotify">
                  <SpotifyIcon className="icon" />
                  <span>Spotify</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
