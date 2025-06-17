import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" style={styles.section}>
      <h2 style={styles.heading}>📬 Contact Me</h2>
      <div style={styles.container}>
        <form style={styles.form}>
          <input type="text" placeholder="Your Name" style={styles.input} />
          <input type="email" placeholder="Your Email" style={styles.input} />
          <textarea placeholder="Your Message" rows="5" style={styles.textarea} />
          <button type="submit" style={styles.button}>Send Message</button>
        </form>
        <div style={styles.info}>
          <p><strong>Email:</strong> Prajapatiarth20@gmail.com</p>
          <p><strong>Phone:</strong> +91-8849415037</p>
          <p><strong>Location:</strong> Gujarat, India</p>
        </div>
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
    marginBottom: "2rem",
    color: "#f97316",
  },
  container: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "space-between",
  },
  form: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "none",
    fontSize: "1rem",
  },
  textarea: {
    padding: "0.8rem",
    borderRadius: "6px",
    border: "none",
    fontSize: "1rem",
    resize: "none",
  },
  button: {
    backgroundColor: "#f97316",
    color: "#fff",
    padding: "0.8rem",
    fontSize: "1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  info: {
    flex: "1 1 300px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    fontSize: "1rem",
    backgroundColor: "#1a1a1a",
    borderRadius: "12px",
    padding: "1.5rem",
    boxShadow: "0 0 10px rgba(249, 115, 22, 0.1)",
  },
};

export default ContactSection;
