import Hero from "../components/Hero";
import Navbar from "../components/Navbar_FLC";
function Home_FLC(){
    return(
<>
<Navbar/>
<Hero
cName="hero"
heroImg="https://images.unsplash.com/photo-1537111261224-6fa49cecda2f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
title="Unlock the World of Code: Join Our Coding Community!"
text="Unlock Your Coding Potential"
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

export default Home_FLC;