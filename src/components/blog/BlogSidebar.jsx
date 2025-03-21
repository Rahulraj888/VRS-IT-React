import React from 'react';
import { Link } from 'react-router-dom';

export default function BlogSidebar() {
  return (
    <aside className="aside-blog">
      <h3>About Us</h3>
      <p>
        We are a leading laptop rental service dedicated to providing top-of-the-line laptops tailored
        to meet the needs of businesses, events, and individuals. Whether you're organizing a corporate
        event, a conference, or simply require temporary computing solutions, our extensive inventory ensures
        we have the right laptops for your requirements.
      </p>
      <p>
        Our rental options are flexible, offering short-term and long-term solutions to accommodate your
        specific project timelines. Each laptop in our inventory is meticulously maintained and regularly updated
        to ensure optimal performance and reliability.
      </p>
      <p>
        At VRS Technologies L.L.C, we pride ourselves on delivering exceptional customer service. Our
        knowledgeable team is available to assist you in selecting the perfect laptops that align with your
        technical specifications and budgetary constraints.
      </p>
      <p>
        Partner with us for your next event or project, and experience the convenience and efficiency of our
        premium laptop rental services. Contact us today to discuss your rental needs and discover why businesses
        and individuals trust us for their laptop rental solutions.
      </p>

      <h3>Contact</h3>
      <p>
        Email: info@laptoprentals.com<br />
        Phone: (555) 123-4567
      </p>
      <br />

      <h3>Recent Posts</h3>
      <ul>
        <li>
          <Link to="/laptop">Why Rent a Laptop for Your Next Business Trip?</Link>
        </li>
        <li>
          <Link to="/top">Top 5 Laptops for Rent in 2024</Link>
        </li>
        <li>
          <Link to="/rental-save-money">How Laptop Rentals Can Save Your Company Money</Link>
        </li>
      </ul>
    </aside>
  );
}
