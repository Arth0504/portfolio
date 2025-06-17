import React from "react";

const AboutSection = () => {
  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.heading}>🎓 My Education & Learning Journey</h2>
      <div style={styles.timeline}>
        {timelineData.map((item, index) => (
          <div
            key={index}
            style={{
              ...styles.container,
              flexDirection: index % 2 === 0 ? "row" : "row-reverse",
            }}
          >
            <div
              style={styles.card}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"} // ✅ Animation
            >
              <h3 style={styles.title}>{item.title}</h3>
              <p style={styles.desc}>{item.description}</p>
              <span style={styles.year}>{item.year}</span>
            </div>
          </div>
        ))}
        <div style={styles.verticalLine}></div>
      </div>
    </section>
  );
};

const timelineData = [
  {
    title: "📚 Swastik School (12th Commerce - GSEB)",
    description: "Completed with 60% in 2021 (Commerce stream).",
    year: "2021",
  },
  {
    title: "🎓 Kadi Sarva Vishwavidyalaya – BCA",
    description: "Currently pursuing BCA with 70%.",
    year: "2022 - 2025",
  },
  {
    title: "💻 Full Stack Developer @ Red & White Institute",
    description: "Learning MERN stack – React, Node.js, MongoDB, etc.",
    year: "2024 - Present",
  },
  {
    title: "🧑‍💼 Internship",
    description: "No internship experience yet. Open to opportunities!",
    year: "—",
  },
];

const styles = {
  section: {
    backgroundColor: "#0f0f0f",
    padding: "4rem 1rem",
    color: "#fff",
    position: "relative",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    marginBottom: "3rem",
    color: "#f97316",
  },
  timeline: {
    position: "relative",
    maxWidth: "1000px",
    margin: "auto",
  },
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "3rem",
    position: "relative",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "12px",
    width: "45%",
    boxShadow: "0 0 12px rgba(249, 115, 22, 0.2)",
  },
  title: {
    color: "#f97316",
    fontSize: "1.2rem",
    marginBottom: "0.5rem",
  },
  desc: {
    color: "#ccc",
    fontSize: "1rem",
    marginBottom: "0.5rem",
  },
  year: {
    fontSize: "0.85rem",
    color: "#888",
  },
  verticalLine: {
    content: '""',
    position: "absolute",
    top: 0,
    left: "50%",
    width: "2px",
    height: "100%",
    backgroundColor: "#f97316",
    transform: "translateX(-50%)",
    zIndex: 1,
  },
};

export default AboutSection;
