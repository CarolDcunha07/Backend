import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Taleem";
import "../components/Blog.css"; 

function Blog() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1630050525402-06c617847d27?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Explore Our Insights"
      />
      <section className="blog-posts">
        <div className="blog-post">
          <h2>Behind the Curtain</h2>
          <p>
          The Journey of a Drama Club Production" - This blog could focus on the process of putting together a school or community theater production, from auditions to closing night, offering insights into rehearsals, set design, costume creation, and more.       
          </p>
           </div>

        <div className="blog-post">
          <h2>Spotlight Stories: Tales from the Drama Club</h2>
          <p>
          This blog could feature interviews with members of the drama club, sharing their personal experiences, challenges, and memorable moments in the world of theater.    
          </p>    </div>
        <div className="blog-post">
          <h2>Drama Club Diaries: Exploring the Art of Performance</h2>
          <p>
          This blog could delve into various aspects of acting, directing, and stagecraft, offering tips, tutorials, and reflections on honing theatrical skills and techniques.          </p>
                  </div>
      </section>
      <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default Blog;
