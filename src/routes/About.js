import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import PersonCard from "../components/PersonCard";
function AboutUs() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1522075782449-e45a34f1ddfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Meet the Yogis: Discover Our Community"
    btnClass="hide"
    />
     <div className="person-cards-container">
     <h2 className="heading">Meet Our Yoga Instructors</h2>

        <PersonCard
          name="Dr. AJIT M. HEBBALE"
          imgSrc="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Dr. AJIT M. HEBBALE is an experienced yogi with a passion for teaching and promoting health and wellness through yoga."
        />
        <PersonCard
          name="Mr. Raju"
          imgSrc="https://images.unsplash.com/photo-1598096969068-7f52cac10c83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Mr. Raju is a certified yoga instructor specializing in Vinyasa flow and meditation techniques."
        />
        <PersonCard
          name="Mr. Sen"
          imgSrc="https://images.unsplash.com/photo-1623053434406-befaaad987d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Mr. Sen is a dedicated practitioner of Hatha yoga and leads group classes for all levels."
        />
        </div>
        <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default AboutUs;