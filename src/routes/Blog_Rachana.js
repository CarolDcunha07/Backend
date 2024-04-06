import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Rachana";
import "../components/Blog.css"; 

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://plus.unsplash.com/premium_photo-1664105111034-33e24dc90a78?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore Our Insights"
      />
      <section className="blog-posts">
        <div className="blog-post">
          <h2>Palette Perspectives: Exploring Artistic Horizons</h2>
          <p>
          Join Palette Perspectives, where creativity knows no bounds! Our art club is a vibrant community of artists and art enthusiasts alike, coming together to explore the endless possibilities of artistic expression.          </p>
        </div>
        <div className="blog-post">
          <h2>Artistry Avenue: Where Creativity Flourishes</h2>
          <p>
          Welcome to Artistry Avenue, where every stroke tells a story and every sculpture whispers secrets of the soul.           </p>
        </div>
        <div className="blog-post">
          <h2>Mindfulness Meditation: A Tool for Academic Success</h2>
          <p>
          Explore how incorporating mindfulness meditation techniques into daily routines can enhance academic performance and reduce anxiety.          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default Blog;
