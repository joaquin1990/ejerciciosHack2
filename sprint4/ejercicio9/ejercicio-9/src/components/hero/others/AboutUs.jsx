import React from "react";
import { Link } from "react-router-dom";

function AboutUs() {
  return (
    <div>
      <main>
        <section class="about-section m-4">
          <h1 className="text-danger">About Us</h1>
          <p className="w-75">We are a team of movie enthusiasts who love to share our passion for cinema with others. Our goal is to provide the most comprehensive and up-to-date information on the latest movies, TV shows, and celebrities.</p>
        </section>
        <section class="team-section m-3">
          <h2>Our Team</h2>
          <ul>
            <li>
              <img src="img/profile-1.jpg" alt="Team Member 1" />
              <h3>John Doe</h3>
              <p>Co-Founder / Editor-in-Chief</p>
            </li>
            <li>
              <img src="img/profile-2.jpg" alt="Team Member 2" />
              <h3>Jane Smith</h3>
              <p>Co-Founder / Creative Director</p>
            </li>
            <li>
              <img src="img/profile-3.jpg" alt="Team Member 3" />
              <h3>Bob Johnson</h3>
              <p>Senior Writer / Critic</p>
            </li>
          </ul>
        </section>
      </main>
      <Link to="/" className="mt-5">
        <button className="btn btn-danger bg-transparent text-danger ms-5 fw-bold ">
          <i class="fa-solid fa-arrow-left"></i> Back{" "}
        </button>
      </Link>
    </div>
  );
}

export default AboutUs;
