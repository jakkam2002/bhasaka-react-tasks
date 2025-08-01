import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>

      <div className="about-wrapper">
        {/* Snapshot
        <div className="profile-image">
          <img src="/profile.jpg" alt="Profile" />
        </div> */}

        {/* Lyrical Biography */}
        <div className="bio-text">
          <p>
            I’m a developer who codes like a poet—each semicolon a heartbeat, each component a verse.
            In my world, logic dances with aesthetics, and pixels respond to intention.
            I don't just build apps—I craft experiences where users feel seen and systems flow like prose.
          </p>
          <p>
            Fueled by curiosity and guided by vision, I believe in clean code, open collaboration,
            and creating tech that matters. Software is not just a tool—it's a mirror of how we imagine tomorrow.
          </p>
        </div>
      </div>

      {/* Why I Code */}
      <div className="why-code">
        <h3>Why I Code</h3>
        <ul>
          <li>🔍 To solve problems with precision and empathy</li>
          <li>🎨 To merge creativity with computation</li>
          <li>🌱 To keep learning, always—line by line</li>
          <li>🌍 To build for people, not just platforms</li>
          <li>🧩 To turn abstract ideas into functional beauty</li>
        </ul>
      </div>

      {/* Contact Snippet */}
      <div className="signature">
        {/* <p><strong>Based in:</strong> Hyderabad, India</p>
        <p><strong>Email:</strong> your.email@example.com</p> */}
      </div>
    </section>
  );
};

export default About;
