import Hero from "../components/Hero";
import Navbar from "../components/Navbar_Rachana";
function Home(){
    return(
<>
<Navbar/>
<Hero
cName="hero"
heroImg="https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Where colors collide and imaginations thrive."
text="Capturing moments, emotions, and dreams on a blank canvas."
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