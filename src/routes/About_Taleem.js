import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Taleem";
import PersonCard from "../components/PersonCard";
function AboutUs() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1611673982064-7385a5d9574e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Dive into a world where every performance is a journey, and every actor a storyteller."
    btnClass="hide"
    />
     <div className="person-cards-container">
     <h2 className="heading">Meet Our Instructors</h2>

        <PersonCard
          name="Mr. Pradeep"
          imgSrc="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww"
          description="Pradeep, we admire your passion for painting and believe you'll find inspiration and camaraderie among fellow artists who share your love for brushstrokes and canvases."
        />
        <PersonCard
          name="Ms. Clara"
          imgSrc="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tZW58ZW58MHx8MHx8fDA%3D"
          description="Clara, your keen eye for capturing moments through photography adds a unique perspective to our club."
        />
        <PersonCard
          name="Ms. Aishwarya"
          imgSrc="https://images.unsplash.com/photo-1590649880765-91b1956b8276?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWVufGVufDB8fDB8fHww"
          description="Aishwarya as someone eager to delve into the world of art, we're excited to provide you with a supportive environment to nurture your creativity and discover new mediums and techniques"
        />
        </div>
        <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default AboutUs;