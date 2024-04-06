import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Taleem";
function Home(){
    return(
<>
<Navbar/>
<Hero
cName="hero"
heroImg="https://images.unsplash.com/photo-1643651577200-d5438cd71eff?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Spotlight Ensemble: Where Stories Unfold"
text="Step into the limelight and let your emotions take center stage with Drama Club."
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