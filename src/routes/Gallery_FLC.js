import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_FLC";
import Card from "../components/Card";

function Gallery(){
    return (
      <>
        <Navbar />
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1475257026007-0753d5429e10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Journey Through Serenity: Our Gallery"
        />

        <div className="gallery-container">
          <Card
            imageUrl="https://www.finiteloop.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwfiisxz0%2Fimage%2Fupload%2Fv1706342520%2Fevent-uploads%2Fu1emc7tqjzuaau4wwu0u.jpg&w=1080&q=75"
            description="DSA Workshop is an interactive hands on experience to learn and understand the Basic of C++, STL & Problem Solving"
          />
          <Card
            imageUrl="https://www.finiteloop.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwfiisxz0%2Fimage%2Fupload%2Fv1706369679%2Fevent-uploads%2Ftxfjwmjgoarc3hgtctbq.jpg&w=1080&q=75"
            description="Hackloop - Internal Hackathon S02 invites first and second-year students to a 15-day coding challenge. The goal is to introduce students to computer science development, project-based learning, and Agile methodology. Students can form teams, choose tracks like Fintech or Healthcare, and solve real-world problems with technology. The event includes ideation, three development sprints, and prizes, fostering collaboration and skill development."
          />
          <Card
            imageUrl="https://www.finiteloop.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwfiisxz0%2Fimage%2Fupload%2Fv1675571246%2Fevent-uploads%2Fxabbwoz6i20jvmnrpt7b.jpg&w=1080&q=75"
            description="Finite Loop NMAMIT, Nitte, organized an event, 'Naari Tattva', on 13th of March, 2021. This event glorified the achievements of women in various fields. The session consisted of Inspirational talk by women achievers, Stand-up comedy, Poetry, Shayari, narrating short stories and The grand quiz."
          />
          <Card
            imageUrl="https://www.finiteloop.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwfiisxz0%2Fimage%2Fupload%2Fv1675571245%2Fevent-uploads%2Fh9quudnwpvs66qnz0a8c.png&w=1080&q=75"
            description="Finite Loop Club under the Centre for Student Innovation (CFSI) in association with the New Age Innovation Network (NAIN), KITS, Dept. of Electronics, IT, BT and S&T, Govt. of Karnataka organized “CODE INNOVATION SERIES - NMAMIT” hosted by IncubateIND under the GitHub Campus Program in collaboration with our college, and thus was a part of India's largest open source Hackathon."
          />
        </div>
        <footer className="footer">
          <p>&copy; Coruscate</p>
        </footer>
      </>
    );
}

export default Gallery;
