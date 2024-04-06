import React from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import GalleryItem from "../components/GalleryItem";
import gallery_1 from "../assests/gallery_1.jpeg";
import gallery_2 from "../assests/gallery_2.jpeg";
import gallery_3 from "../assests/gallery_3.jpeg";
import gallery_4 from "../assests/gallery_4.jpeg";

function Gallery(){
    return (
      <>
        <Navbar />
        <Hero
          cName="hero"
          heroImg="https://images.unsplash.com/photo-1447452001602-7090c7ab2db3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          title="Journey Through Serenity: Our Gallery"
        />

        <div className="gallery-container">
          <GalleryItem
            imageUrl={gallery_1}
            description="This image pays tribute to Dr. Ajit Hebbale, a visionary in the field of yoga therapy. With unwavering dedication, he championed the integration of traditional yogic principles with modern therapeutic practices, transforming countless lives through his teachings and compassionate care."
          />
          <GalleryItem
            imageUrl={gallery_2}
            description="In this serene depiction, practitioners find solace in Vajrasana, or the Thunderbolt Pose. As they ground themselves firmly into the earth, they cultivate stability and resilience. With each breath, they honor the strength within, embracing the power of rootedness and balance."
          />
          <GalleryItem
            imageUrl={gallery_3}
            description="Here, practitioners embrace the liberating energy of Bhujangasana, known as the Cobra Pose. With gentle grace, they rise from the earth, embodying the spirit of transformation and renewal. As they arch their backs and lift their hearts, they awaken the vitality of body and spirit."
          />
          <GalleryItem
            imageUrl={gallery_4}
            description="Radiant and expansive, Chakrasana invites practitioners to embrace the transformative power of the Wheel Pose. As they arch their bodies gracefully, they open their hearts to the universe, symbolizing liberation and boundless potential. With each movement, they journey towards greater freedom and joy."
          />
        </div>
        <footer className="footer">
          <p>&copy; Coruscate</p>
        </footer>
      </>
    );
}

export default Gallery;
