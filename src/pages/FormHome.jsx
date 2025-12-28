import { useEffect, useState } from "react";
import "./FormHome.css";

export default function FormHome() {

    return (
        <div className="body-container">
            <div className="home-container">

                <header className="home-hero">
                    <h1 className="hero-title">Event Registration</h1>
                    <p className="hero-subtitle">
                        Choose how you’d like to participate
                    </p>
                </header>

                <section className="registration-options">

                    <a href="/CarRegistrationForm" className="registration-card">
                        <div className="card-icon">🚗</div>
                        <h2 className="card-title">Car Show Registration</h2>
                        <p className="card-description">
                            Register your vehicle to be showcased at the event.
                        </p>
                        <span className="card-cta">Register Vehicle →</span>
                    </a>

                    <a href="/VendorRegistrationForm" className="registration-card">
                        <div className="card-icon">🍔</div>
                        <h2 className="card-title">Vendor Registration</h2>
                        <p className="card-description">
                            Food trucks, pop-ups, and merchandise vendors.
                        </p>
                        <span className="card-cta">Register as Vendor →</span>
                    </a>

                    <a href="/SponsorRegistrationForm" className="registration-card">
                        <div className="card-icon">🤝</div>
                        <h2 className="card-title">Sponsor Registration</h2>
                        <p className="card-description">
                            Support the event and gain visibility as a sponsor.
                        </p>
                        <span className="card-cta">Become a Sponsor →</span>
                    </a>

                </section>

            </div>
        </div>
    )
}