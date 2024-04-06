import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Rachana";
import PersonCard from "../components/PersonCard";
function AboutUs() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://plus.unsplash.com/premium_photo-1664110691109-6558cb5ea476?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Discover Art"
    btnClass="hide"
    />
     <div className="person-cards-container">
     <h2 className="heading">Meet Our Yoga Instructors</h2>

        <PersonCard
          name="LMN"
          imgSrc=""
          description="LMN, we admire your passion for painting and believe you'll find inspiration and camaraderie among fellow artists who share your love for brushstrokes and canvases."
        />
        <PersonCard
          name="ABC"
          imgSrc=""
          description="ABC, your keen eye for capturing moments through photography adds a unique perspective to our club."
        />
        <PersonCard
          name="XYZ"
          imgSrc="https://example.com/alice-johnson.jpg"
          description="XYZ as someone eager to delve into the world of art, we're excited to provide you with a supportive environment to nurture your creativity and discover new mediums and techniques"
        />
        </div>
        <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default AboutUs;