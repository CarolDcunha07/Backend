import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home(){
    return(
<>
<Navbar/>
<Hero
cName="hero"
heroImg="https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Find Your Zen: Join Our Yoga Club Today!"
text="Experience peace, flexibility, and wellness with our expert-led yoga sessions. All levels welcome!"
buttonText="Register Today"
url="/"
btnClass="show"
/>
<footer className="footer">
        <p>&copy; Coruscate</p>
      </footer>
</>
    );
}

export default Home;