import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Classic Tours & Travels",
      description:
        "A responsive HTML/CSS/JS website for a travel company with smooth scroll and sectioned layout.",
      tech: "HTML, CSS, JavaScript",
      github: "https://github.com/Arth0504/Classic-Tours-.git",
    },
    {
      title: "College Attendance System",
      description:
        "A full-stack React app with JSON Server for managing student & teacher attendance, marks, and department-wise reporting.",
      tech: "React, JSON Server, Axios",
      github: "https://github.com/Arth0504/Collage-Attandance-System-.git",
    },
    {
      title: "Hospital Management System",
      description:
        "A React + Redux app to manage patients, doctors, assignments, and reports. Includes export, filters, and role-based views.",
      tech: "React, Redux, Axios",
      github: "https://github.com/Arth0504/Hospital-Managment-System.git",
    },
    {
      title: "Blog Website (CRUD)",
      description:
        "A blog platform built with React where users can add, edit, delete, and search blogs using a fake backend.",
      tech: "React, JSON Server",
      github: "https://github.com/Arth0504/Blog-.git",
    },
  ];

  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>💼 My Projects</h2>
      <div style={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={index}
            style={styles.card}
            data-aos="zoom-in" // ✅ Animation here
          >
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.desc}>{project.description}</p>
            <p style={styles.tech}><strong>Tech:</strong> {project.tech}</p>
            <div style={styles.buttons}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.btn}
              >
                GitHub
              </a>
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
    marginBottom: "3rem",
    color: "#f97316",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "2rem",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 0 10px rgba(249, 115, 22, 0.15)",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    transition: "transform 0.3s",
  },
  title: {
    fontSize: "1.3rem",
    color: "#f97316",
  },
  desc: {
    fontSize: "1rem",
    color: "#ccc",
  },
  tech: {
    fontSize: "0.9rem",
    color: "#aaa",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    marginTop: "auto",
  },
  btn: {
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "0.5rem 1rem",
    borderRadius: "6px",
    textDecoration: "none",
  },
};

export default ProjectsSection;
