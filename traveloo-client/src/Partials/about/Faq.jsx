import React from "react";
import "./AboutBody.css";

const Faq = () => {
  return (
    <div>
      <div className="px-20 max-w-[70%] mx-auto mb-20">
        <h1 className="text-center my-10">FAQ</h1>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer"
            type="checkbox"
          />
          <label className="faq-drawer__title" htmlFor="faq-drawer">
            How do I book a trip through Traveloo?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
                At Traveloo, booking your dream trip is simple! Just navigate to
                our website, select your destination, preferred dates, and
                explore the available options. Our user-friendly interface
                ensures a seamless booking experience.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-2"
            type="checkbox"
          />
          <label className="faq-drawer__title" htmlFor="faq-drawer-2">
          Can I make changes to my booking after confirmation?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              Yes, you can make modifications to your booking, such as changing travel dates or accommodation preferences. Contact our customer support team, and they will assist you in making the necessary adjustments.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-3"
            type="checkbox"
          />
          <label className="faq-drawer__title" htmlFor="faq-drawer-3">
          What if I need assistance during my trip?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              Our dedicated customer support team is available 24/7 to assist you with any queries or concerns during your trip. You can reach out to us via phone, email, or live chat for immediate assistance.
              </p>
            </div>
          </div>
        </div>

        <div className="faq-drawer">
          <input
            className="faq-drawer__trigger"
            id="faq-drawer-4"
            type="checkbox"
          />
          <label className="faq-drawer__title" htmlFor="faq-drawer-4">
         How does Traveloo ensure safety and security during travel?
          </label>
          <div className="faq-drawer__content-wrapper">
            <div className="faq-drawer__content">
              <p>
              Your safety is our priority. We partner with reputable travel providers and accommodations while adhering to industry-standard safety protocols. Additionally, we provide travel advisories and updates for your chosen destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
