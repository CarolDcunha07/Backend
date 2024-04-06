import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Authorcraft";
import "../components/Blog.css";

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore Our Insights"
      />
      <section className="blog-posts">
        <div className="blog-post">
          <h2>Book Reviews and Recommendations</h2>
          <p>
          Members can write reviews of their favorite books, sharing what they loved about them and why others should read them too.          </p>
        </div>
        <div className="blog-post">
          <h2>Author Spotlights</h2>
          <p>
          Highlighting different authors and their works can be both informative and inspiring          </p>
        </div>
        <div className="blog-post">
          <h2>Literary Analysis and Discussions</h2>
          <p>
          This blog series can delve into in-depth analyses of literary works, discussing themes, characters, symbolism, and more.       
          </p>
           </div>
      </section>
      <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default Blog;
