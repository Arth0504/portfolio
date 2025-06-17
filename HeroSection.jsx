import React from "react";

const HeroSection = () => {
  return (
    <section style={styles.hero} id="home" data-aos="fade-up">
      <div>
        <h2 style={styles.heading}>Hi, I'm <span style={styles.highlight}>Arth</span> 👋</h2>
        <p style={styles.subheading}>
          A passionate Frontend Developer crafting clean UI with <strong>React</strong>.
        </p>
        <a href="#projects" style={styles.btn}>🚀 View My Work</a>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    height: "90vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "2rem",
    background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
  },
  heading: {
    fontSize: "clamp(2rem, 6vw, 3rem)",
    color: "#ffffff",
    marginBottom: "1rem",
  },
  highlight: {
    color: "#f97316",
  },
  subheading: {
    fontSize: "1.2rem",
    color: "#cccccc",
    marginBottom: "2rem",
    maxWidth: "600px",
    marginInline: "auto",
  },
  btn: {
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "0.75rem 1.5rem",
    borderRadius: "8px",
    fontWeight: "bold",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(249, 115, 22, 0.2)",
    transition: "all 0.3s ease-in-out",
  },
};

export default HeroSection;
