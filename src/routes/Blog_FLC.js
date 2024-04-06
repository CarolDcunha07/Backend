import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_FLC";
import "../components/Blog.css"; 

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore Our Insights"
      />
      <section className="blog-posts">
        <div className="blog-post">
          <h2>Introduction to Data Structures and Algorithms</h2>
          <p>
          A series of blog posts introducing fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs, along with common algorithms like sorting, searching, and traversal.          </p>
        </div>
        <div className="blog-post">
          <h2>Web Development Tutorials</h2>
          <p>
          A step-by-step guide to building web applications using popular frontend frameworks like React.js or Vue.js, backend frameworks like Node.js or Django, and databases like MongoDB or MySQL.          </p>
        </div>
        <div className="blog-post">
          <h2>Machine Learning Basics</h2>
          <p>
          Beginner-friendly tutorials on machine learning concepts such as linear regression, logistic regression, decision trees, and neural networks, along with practical examples using Python and libraries like TensorFlow or PyTorch.
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
