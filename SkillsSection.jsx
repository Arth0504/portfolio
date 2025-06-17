import React from "react";

const SkillsSection = () => {
  const skills = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
    Backend: ["Node.js", "Express.js", "MongoDB", "JSON Server"],
    Tools: ["Git", "GitHub", "VS Code", "Netlify", "Postman"],
  };

  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>🛠️ My Skills</h2>
      <div style={styles.container}>
        {Object.entries(skills).map(([category, list], index) => (
          <div key={index} style={styles.card}>
            <h3 style={styles.category}>{category}</h3>
            <div style={styles.skillList}>
              {list.map((skill, idx) => (
                <span key={idx} style={styles.skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  section: {
    backgroundColor: "#0f0f0f",
    padding: "4rem 1rem",
    color: "#fff",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#f97316",
    marginBottom: "2rem",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    backgroundColor: "#1a1a1a",
    padding: "1.5rem",
    borderRadius: "12px",
    width: "300px",
    boxShadow: "0 0 10px rgba(249, 115, 22, 0.1)",
  },
  category: {
    fontSize: "1.2rem",
    color: "#f97316",
    marginBottom: "1rem",
    textAlign: "center",
  },
  skillList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
    justifyContent: "center",
  },
  skill: {
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "0.4rem 0.8rem",
    borderRadius: "20px",
    fontSize: "0.9rem",
  },
};

export default SkillsSection;
