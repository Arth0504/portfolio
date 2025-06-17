import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>Arth</h1>

      <div style={styles.hamburger} onClick={toggleMenu}>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
        <div style={styles.bar}></div>
      </div>

      <ul style={{ ...styles.navList, ...(menuOpen ? styles.navListMobile : {}) }}>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: "#1a1a1a",
    padding: "1rem 2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    position: "sticky",
    top: 0,
    zIndex: 1000,
  },
  logo: {
    color: "#f97316",
    fontWeight: "bold",
    fontSize: "1.5rem",
  },
  navList: {
    display: "flex",
    gap: "1.5rem",
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "1rem",
  },
  hamburger: {
    display: "none",
    flexDirection: "column",
    cursor: "pointer",
  },
  bar: {
    width: "25px",
    height: "3px",
    backgroundColor: "#fff",
    margin: "4px 0",
    borderRadius: "2px",
  },
  navListMobile: {
    position: "absolute",
    top: "60px",
    right: "20px",
    backgroundColor: "#1a1a1a",
    flexDirection: "column",
    gap: "1rem",
    padding: "1rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.4)",
    display: "flex",
  },
};

 

export default Navbar;
