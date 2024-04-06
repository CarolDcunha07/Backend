import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import "../components/Blog.css"; 

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore Our Insights"
      />
      <section className="blog-posts">
        <div className="blog-post">
          <h2>Yoga Poses for Students: A Beginner's Guide</h2>
          <p>
          Provide a list of simple yoga poses that students can do in their dorm rooms or between classes to stretch, relax, and re-energize.
          </p>
        </div>
        <div className="blog-post">
          <h2>The Benefits of Yoga for College Students</h2>
          <p>
          Discuss how practicing yoga can help college students manage stress, improve concentration, and maintain overall well-being.
          </p>
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
