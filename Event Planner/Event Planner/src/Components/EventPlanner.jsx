import React from 'react';
import './EventPlanner.css'; // Import CSS file for styling
import Footer from './Footer.jsx'; // Import Footer component
const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            <header>
                <h2>Welcome to Event Planner By </h2><h1>"JJ"</h1>
            </header>


            <section className="description">
            {/* Brief introduction or marketing message */}
            <p>
                    Plan and organize your events effortlessly with Event Planner. From 
                    birthdays to corporate meetings, we've got you covered.
            </p>
            {/* Primary call-to-action button */}
            <button className="get-started-button">Get Started</button>
            </section>


            {/* Section to list or categorize different types of events */}
            <section className="events_categories">
            {/* Social event types */}
            <ul>
                <h2>The Social Event: </h2>
                <li>Birthday Parties</li>
                <li>Anniversary celebrations</li>
                <li>Weddings</li>
                <li>Baby showers</li>
                <li>Graduation parties</li>
                <li>Family reunions</li>
                <li>Social Gatherings</li>

            </ul>

            {/* Entertainment-based event types */}
            <ul>
                <h2>Entertainment Events:</h2>
                <li>Concerts</li>
                <li>Music festivals</li>
                <li>Film screenings</li>
                <li>Comedy shows</li>
                <li>Art exhibitions</li>
                <li>Cultural events</li>
            </ul>
            {/* Community-focused event types */}
            <ul>
                <h2>Community Events:</h2>
                <li>Fundraising events</li>
                <li>Charity galas</li>
                <li>Volunteer drives</li>
                <li>Neighborhood block parties</li>
                <li>Community festivals</li>
                <li>Cultural celebrations</li>
                <li>Public forums</li>
            </ul>
            </section>

            {/* Section to highlight app features or functionalities */}
            <section className="features">
            {/* Section heading */}
            <h2>Features</h2>
            {/* List of key platform features */}
            <ul>
                <li>Easy event creation and management</li>
                <li>Customizable event templates</li>
                <li>Guest list management</li>
                <li>Real-time collaboration</li>
                <li>Reminders and notifications</li>
            </ul>
            </section>

            {/* Section to showcase user reviews or testimonials */}
            <section className="testimonials">
            {/* Section heading */}
            <h2>testimonials</h2>
            {/* Individual testimonial block */}
            <div className="testimonial">
                <p>"Event Planner made organizing my wedding a breeze! Highly recommend it."</p>
                <p className='auther'>- JJ.</p>
            </div>
            {/*Another testimonial block*/}
            <div className="testimonial">
                <p>"The guest list management feature saved me so much time for my birthday party."</p>
                <p className='auther'>- Yehya J.</p>
            </div>
            </section>

            {/* Section to provide contact information or a contact form */}
            <section className="contact">
            {/* Section heading */}
            <h2>Contact Us</h2>
            {/* Contact form with input fields */}
            <form>
                {/*Name input field*/}
                <input type="text" placeholder="Your Name" required />
                {/*Email input field*/}
                <input type="email" placeholder="Your Email" required />
                {/*Msg textarea*/}
                <textarea placeholder="Your Message" required></textarea>
                {/*Submit button*/}
                <button type="submit">Send Message</button>
            </form>
            </section>
            <Footer />
        </div>
        
    );
};

export default EventPlanner;
