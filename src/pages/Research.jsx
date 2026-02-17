import "./Research.css";

export default function Research() {
  return (
    <main className="research">

      {/* HERO */}
      <header className="research-hero">
        <h1>Research</h1>
      </header>

      {/* BACKGROUND */}
      <section className="research-section">
        <h2>Background & Significance</h2>

        <p>
          AI usage is rapidly growing in the United States, with approximately
          85–86% of students and teachers reporting AI use during the 2024–2025
          school year <sup>(1)</sup>. However, increased usage has not been matched
          by adequate instruction. Surveys from Spring 2025 indicate that nearly
          80% of teachers are not properly teaching students how to use AI tools
          <sup>(2)</sup>.
        </p>

        <p>
          This imbalance creates confusion and hesitation. Teachers worry about
          cheating and plagiarism, while students use AI without understanding
          responsible practices. Parents and educators also struggle to find
          trustworthy learning resources. Fewer than half of teachers have
          participated in AI literacy or professional development training
          <sup>(3)</sup>.
        </p>

        <p>
          As AI continues integrating into daily life, the lack of accessible
          training risks leaving students unprepared for a future where AI is a
          normal collaborative tool. Our project aims to bridge this gap by
          creating a centralized learning space combining educational resources
          and a podcast tailored for parents and teachers.
        </p>
      </section>

      {/* EXISTING SOLUTIONS */}
      <section className="research-section alt">
        <h2>Existing Solutions</h2>

        <p>
          Several platforms already introduce AI concepts. Educational resources
          such as Khan Academy and Code.org discuss responsible technology use,
          and large language models like ChatGPT, Gemini, and Claude are widely
          used in classrooms and everyday learning.
        </p>

        <p>
          Although helpful, these tools lack structured frameworks specifically
          designed for K–12 learning environments. Even formal AI literacy
          programs remain limited—studies suggest only about 43% of teachers
          have received any training related to AI education <sup>(4)</sup>.
        </p>
      </section>

      {/* GAP ANALYSIS */}
      <section className="research-section">
        <h2>Gap Analysis</h2>

        <p>
          Current resources are fragmented and disconnected. Educators and
          parents may encounter information about AI, but rarely in a cohesive
          experience that explains not only what AI is, but how to use it
          effectively and ethically with children.
        </p>

        <ul className="gap-list">
          <li>No centralized platform designed for parents + teachers</li>
          <li>Little practical classroom or home implementation guidance</li>
          <li>Lack of real-world examples tied to everyday learning</li>
          <li>Insufficient support for ethical and responsible AI use</li>
        </ul>

        <p>
          This gap creates a knowledge divide between adults guiding students
          and the students themselves, making proper AI integration difficult.
        </p>
      </section>

      {/* REFERENCES */}
      <section className="references">
        <h2>References</h2>
        <ol>
          <li>
            Laird E, Dwyer M, Quay-De La Vallee H. Hand in Hand Schools’ Embrace
            of AI Connected to Increased Risks to Students (2025).
          </li>
          <li>
            Doss CJ, Bozick R, Schwartz HL, Chu L, Rainey LR, Woo A, et al.
            AI Use in Schools Is Quickly Increasing but Guidance Lags Behind:
            Findings from the RAND Survey Panels (2025).
          </li>
          <li>
            Vilcarino J, Langreo L. Rising Use of AI in Schools Comes With Big
            Downsides for Students (Education Week, 2025).
          </li>
          <li>
            Langreo L. Teacher AI training is rising fast, but still has a long
            way to go (Education Week, 2025).
          </li>
        </ol>
      </section>

    </main>
  );
}
