import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={styles.footer} data-aos="fade-up">
      <p style={styles.text}>© 2025 Arth Prajapati. Made with 💻 React</p>
      <div style={styles.icons}>
        <a
          href="https://github.com/Arth0504"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/arthprajapati"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.iconLink}
        >
          <FaLinkedin size={24} />
        </a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: "center",
    padding: "1.5rem 1rem",
    backgroundColor: "#1a1a1a",
    color: "#888",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "center",
  },
  text: {
    fontSize: "0.95rem",
  },
  icons: {
    display: "flex",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  iconLink: {
    color: "#f97316",
    transition: "transform 0.3s ease",
    textDecoration: "none",
  },
};

export default Footer;
