
import React from "react";

const About = () => {
  const aboutStyle = {
    backgroundColor: "#519595",
    color: "white",
    padding: "20px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    maxWidth: "60rem",
    margin: '0 auto'
  };

  const headerStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "2rem 0",
    textAlign:'left'
  };

  const paraStyle = {
    fontSize: "16px",
    lineHeight: "1.6",
  };

  return (
    <div style={aboutStyle}>
      <h2 style={headerStyle}>About iNotebook</h2>
      <p style={paraStyle}>
        iNotebook is a simple and intuitive note-taking application that allows
        you to keep track of your thoughts, ideas, and to-do lists. Whether you
        need to jot down a quick reminder or organize your thoughts into
        multiple categories, iNotebook has got you covered.
      </p>
      <p style={paraStyle}>
        With iNotebook, you can create, edit, and delete notes effortlessly.
        Stay productive and never forget important tasks or ideas again. The
        user-friendly interface makes it easy to get started, and the beautiful
        design enhances your note-taking experience.
      </p>
      <p style={paraStyle}>
        So, go ahead and start using iNotebook to keep your notes organized and
        your thoughts in order. Happy note-taking!
      </p>
    </div>
  );
};

export default About;
