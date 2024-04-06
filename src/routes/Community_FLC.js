import React, { Component } from 'react';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar_FLC";
import "../components/Community_FLC.css"; 

class Community_FLC extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventsRegistration: {
                event1: false,
                event2: false,
                event3: false,
            }
        };
    }

    handleRegistration = (eventName) => {
        this.setState(prevState => ({
            eventsRegistration: {
                ...prevState.eventsRegistration,
                [eventName]: !prevState.eventsRegistration[eventName]
            }
        }));
    }

    render() {
        return (
            <>
                <Navbar />
                <Hero
                    cName="hero"
                    heroImg="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    title="Coding Nexus"
                />

                <div className="container">
                    <section className="event-section">
                        <h2>Event 1: Workshop on Web Development</h2>
                        <p>Description: Join us for an interactive workshop on web development where you'll learn the basics of HTML, CSS, and JavaScript.</p>
                        <p>Registration Deadline: March 30, 2024</p>
                        <button onClick={() => this.handleRegistration('event1')}>
                            {this.state.eventsRegistration.event1 ? 'Unregister' : 'Register'}
                        </button>
                    </section>

                    <section className="event-section">
                        <h2>Event 2: Coding Competition</h2>
                        <p>Description: Test your coding skills in our annual coding competition and stand a chance to win exciting prizes!</p>
                        <p>Registration Deadline: April 15, 2024</p>
                        <button onClick={() => this.handleRegistration('event2')}>
                            {this.state.eventsRegistration.event2 ? 'Unregister' : 'Register'}
                        </button>
                    </section>

                    <section className="event-section">
                        <h2>Event 3: Guest Lecture on Machine Learning</h2>
                        <p>Description: Don't miss this opportunity to attend a guest lecture on machine learning by industry experts.</p>
                        <p>Registration Deadline: April 20, 2024</p>
                        <button onClick={() => this.handleRegistration('event3')}>
                            {this.state.eventsRegistration.event3 ? 'Unregister' : 'Register'}
                        </button>
                    </section>

                    {}
                </div>

                <footer className="footer">
                    <p>&copy; Coruscate</p>
                </footer>
            </>
        );
    }
}

export default Community_FLC;
