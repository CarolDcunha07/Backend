import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Authorcraft";
import PersonCard from "../components/PersonCard";
function AboutUs() {
  return (
    <>
    <Navbar/>
    <Hero
    cName="hero-mid"
    heroImg="https://images.unsplash.com/photo-1626287935075-3275d2d9025e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="Magic and Us"
    btnClass="hide"
    />
     <div className="person-cards-container">
     <h2 className="heading">Meet Our Speakers</h2>

        <PersonCard
          name="Mr. Joy"
          imgSrc="https://images.unsplash.com/photo-1480429370139-e0132c086e2a?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Joy, a lover of words, finds solace in their cozy corner, surrounded by books and dreams."
        />
        <PersonCard
          name="Karl"
          imgSrc="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Karl spends his free time exploring different worlds through stories and imagining his adventures."
        />
        <PersonCard
          name="Shingi"
          imgSrc="https://plus.unsplash.com/premium_photo-1686244745070-44e350da9d37?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          description="Shingi loves to create characters and imagine exciting plots for her tales."
        />
        </div>
        <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </>
  );
}

export default AboutUs;