import { Link } from "react-router-dom";
import "./Main_Home.css";

export default function Home() {
  return (
    <div className="home">
      <h1>Welcome to Coruscate</h1>
      
      <div className="club-section">
        <div className="club-details">
          <h2>FLC</h2>
          <p>Step into the world of innovation and problem-solving with our Programming Club. Whether you're a seasoned coder or just starting your journey, our club offers a vibrant community where you can learn, collaborate, and create cutting-edge software solutions. From coding workshops to hackathons, we provide opportunities to sharpen your skills and unleash your creativity in the ever-evolving field of technology.</p>
          <div className="explore-button-container">
            <Link to="/home_flc" className="explore-button">Explore</Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1585079542156-2755d9c8a094?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="FLC" className="club-image" />
      </div>
      
      <div className="club-section alternate">
        <img src="https://images.unsplash.com/photo-1593810451056-0acc1fad48c5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Yoga" className="club-image" />
        <div className="club-details">
          <h2>Yoga</h2>
          <p>Embark on a journey of self-discovery and holistic well-being with our Yoga Club. Immerse yourself in the ancient practice of yoga, where mind, body, and spirit unite in harmony. Whether you're seeking physical fitness, mental clarity, or spiritual growth, our club offers a sanctuary for relaxation, rejuvenation, and inner peace. Join us for invigorating yoga sessions, mindfulness practices, and community gatherings that nourish the soul and uplift the spirit.</p>
          <div className="explore-button-container">
            <Link to="/home_yoga" className="explore-button">Explore</Link>
          </div>
        </div>
      </div>
      
      <div className="club-section">
        <div className="club-details">
          <h2>Authorcraft</h2>
          <p>Unlock the power of effective communication and elevate your confidence with our Public Speaking Club. Whether you're a seasoned orator or new to the art of public speaking, our club provides a supportive environment where you can polish your presentation skills, refine your delivery techniques, and conquer the stage with poise and charisma. Join us for engaging workshops, speech contests, and networking events that empower you to articulate your ideas, captivate audiences, and make a lasting impact in both professional and personal spheres.</p>
          <div className="explore-button-container">
            <Link to="/home_authorcraft" className="explore-button">Explore</Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Authorcraft" className="club-image" />
      </div>
      
      <div className="club-section alternate">
        <img src="https://images.unsplash.com/photo-1593408995262-1d8933c37afc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Taleem" className="club-image" />
        <div className="club-details">
          <h2>Taleem</h2>
          <p>Enter the realm of imagination and expression with our Drama Club. Dive into the captivating world of theater, where stories come alive through the power of performance. Whether you're an aspiring actor, director, or behind-the-scenes enthusiast, our club welcomes all who share a passion for storytelling. Join us for exhilarating rehearsals, mesmerizing productions, and unforgettable experiences that celebrate the magic of theater.</p>
          <div className="explore-button-container">
            <Link to="/home_taleem" className="explore-button">Explore</Link>
          </div>
        </div>
      </div>
      
      <div className="club-section">
        <div className="club-details">
          <h2>Rachana</h2>
          <p>Unleash your inner artist and explore the boundless possibilities of creativity with our Art Club. From painting to sculpture, digital art to photography, our club provides a nurturing environment where you can hone your skills and express yourself through various mediums. Join us for inspiring workshops, collaborative projects, and exhibitions that showcase the beauty and diversity of artistic expression.</p>
          <div className="explore-button-container">
            <Link to="/home_rachana" className="explore-button">Explore</Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1490814525860-594e82bfd34a?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Rachana" className="club-image" />
      </div>
      <footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
    </div>
  );
}
