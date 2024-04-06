import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Rachana";
import GalleryItem from "../components/GalleryItem";
import gallery_1 from "../assests/gallery_13.jpeg";
import gallery_2 from "../assests/gallery_14.jpeg";
import gallery_3 from "../assests/gallery_15.jpeg";
import gallery_4 from "../assests/gallery_16.jpeg";

function Gallery(){
    return (
      <>
        <Navbar />
        <Hero
          cName="hero"
          heroImg="https://plus.unsplash.com/premium_photo-1681884782372-77ac1182e73d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Journey Through Serenity: Our Gallery"
        />

        <div className="gallery-container">
          <GalleryItem
            imageUrl={gallery_1}
            description="Within the art club, members embark on a journey of self-expression and creativity. They use various mediums such as paint, clay, and digital tools to explore their inner worlds and external surroundings. Each stroke of the brush or manipulation of material is a chance to delve deeper into their emotions, ideas, and perspectives, creating works that reflect their unique voices and experiences."
          />
          <GalleryItem
            imageUrl={gallery_2}
            description="Art club members form a vibrant community of collaborators, united by their passion for artistic expression. They come together to share techniques, offer feedback, and inspire one another through their diverse styles and approaches. Whether working on group projects, hosting workshops, or participating in exhibitions, they foster an environment of support and camaraderie where everyone's creativity flourishes."
          />
          <GalleryItem
            imageUrl={gallery_3}
            description="Here, practitioners embrace the liberating energy of Bhujangasana, known as the Cobra Pose. With gentle grace, they rise from the earth, embodying the spirit of transformation and renewal. As they arch their backs and lift their hearts, they awaken the vitality of body and spirit."
          />
          <GalleryItem
            imageUrl={gallery_4}
            description="Through their art, club members explore empathy and understanding, using their creations as a means to connect with others and explore diverse perspectives. They delve into themes of identity, social justice, and the human experience, using their artistic voices to raise awareness and foster empathy within their community. Whether through collaborative murals, community outreach projects, or art therapy workshops, they harness the power of creativity to promote empathy, dialogue, and positive change."
          />
        </div>
        <footer className="footer">
          <p>&copy; Coruscate</p>
        </footer>
      </>
    );
}

export default Gallery;
