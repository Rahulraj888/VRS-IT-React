import React, { useState } from 'react';
import '../styles/blog.css'; 

function Blog() {
  
  // State for toggling "Read More" on each blog post
  const [showBusinessTrip, setShowBusinessTrip] = useState(false);
  const [showTopLaptops, setShowTopLaptops] = useState(false);
  const [showSaveMoney, setShowSaveMoney] = useState(false);

  return (
    <div className="container-blog content-wrapper">
      <main className="blog-description">
        <article id="business-trip" className="blog-post">
          <h2>Why Rent a Laptop for Your Next Business Trip?</h2>
          <div className="meta">Posted on May 1, 2024 by Admin</div>
          <img
            src="/images/blog/macbook.jpg"
            alt="Business Traveler with Laptop"
            className="blog-image"
          />
          <p>
            Business trips can be stressful, especially when it comes to managing your technology
            needs. Renting a laptop for your next business trip can offer numerous advantages...
          </p>
          {showBusinessTrip && (
            <div className="full-content">
              <p>Here are some key benefits of renting a laptop for your next business trip:</p>
              <ol>
                <li>
                  <strong>Lightweight Travel:</strong> Most rental companies offer lightweight, portable
                  laptops that are perfect for travel.
                </li>
                <li>
                  <strong>Up-to-date Technology:</strong> Rental laptops are usually equipped with the
                  latest software and hardware.
                </li>
                <li>
                  <strong>Cost-Effective:</strong> For short trips, renting can be more economical than
                  purchasing a new laptop.
                </li>
                <li>
                  <strong>Technical Support:</strong> Many rental services offer 24/7 technical support,
                  ensuring you're never left stranded.
                </li>
                <li>
                  <strong>Flexibility:</strong> Choose the exact specifications you need for your
                  particular trip or project.
                </li>
              </ol>
              <p>
                By choosing to rent a laptop, you can focus on your business objectives without worrying
                about technology logistics. It's a smart choice for the modern business traveler.
              </p>
            </div>
          )}
          <button className="cta-button" onClick={() => setShowBusinessTrip(!showBusinessTrip)}>
            {showBusinessTrip ? 'Read Less' : 'Read More'}
          </button>
        </article>

        <article id="top-laptops" className="blog-post">
          <h2>Top 5 Laptops for Rent in 2024</h2>
          <div className="meta">Posted on April 15, 2024 by Admin</div>
          <img src="/images/blog/rental.jpg" alt="Modern Laptops" className="blog-image" />
          <p>
            With technology advancing rapidly, it's crucial to stay up-to-date with the latest laptop
            models. Here are our top 5 picks for laptop rentals in 2024...
          </p>
          {showTopLaptops && (
            <div className="full-content">
              <ol>
                <li>
                  <strong>MacBook Pro M3:</strong> Perfect for creative professionals with its powerful
                  M3 chip and stunning Retina display.
                </li>
                <li>
                  <strong>Dell XPS 15:</strong> A great all-rounder with a beautiful 4K display and strong
                  performance for business users.
                </li>
                <li>
                  <strong>Lenovo ThinkPad X1 Carbon:</strong> Known for its durability and excellent keyboard,
                  ideal for heavy typists and business travelers.
                </li>
                <li>
                  <strong>ASUS ROG Zephyrus G14:</strong> A compact powerhouse for gamers and content creators
                  who need performance on-the-go.
                </li>
                <li>
                  <strong>Microsoft Surface Laptop 5:</strong> Sleek, lightweight, and perfect for those who
                  prefer a touch screen and Windows OS.
                </li>
              </ol>
              <p>
                Each of these laptops offers unique features to cater to different needs. When renting,
                consider your specific requirements to choose the best option for your work or project.
              </p>
            </div>
          )}
          <button className="cta-button" onClick={() => setShowTopLaptops(!showTopLaptops)}>
            {showTopLaptops ? 'Read Less' : 'Read More'}
          </button>
        </article>

        <article id="save-money" className="blog-post">
          <h2>How Laptop Rentals Can Save Your Company Money</h2>
          <div className="meta">Posted on March 30, 2024 by Admin</div>
          <img src="/images/blog/rent.jpg" alt="Cost Savings Graph" className="blog-image" />
          <p>
            In today's fast-paced business world, staying ahead of the technology curve is crucial.
            But constantly upgrading your company's laptops can be expensive. Here's how laptop rentals can
            help...
          </p>
          {showSaveMoney && (
            <div className="full-content">
              <p>
                Laptop rentals can lead to significant cost savings for your company in several ways:
              </p>
              <ul>
                <li>
                  <strong>Reduced Capital Expenditure:</strong> Avoid large upfront costs for purchasing new
                  laptops.
                </li>
                <li>
                  <strong>Scalability:</strong> Easily scale up or down based on your current needs without
                  wastage.
                </li>
                <li>
                  <strong>No Maintenance Costs:</strong> Rental companies often handle repairs and maintenance.
                </li>
                <li>
                  <strong>Tax Benefits:</strong> Rental costs can often be deducted as business expenses.
                </li>
                <li>
                  <strong>Always Up-to-Date:</strong> Access to the latest technology without the cost of
                  constant upgrades.
                </li>
              </ul>
              <p>
                By opting for laptop rentals, companies can allocate their resources more efficiently,
                focusing on core business activities while still ensuring their team has access to the
                technology they need.
              </p>
            </div>
          )}
          <button className="cta-button" onClick={() => setShowSaveMoney(!showSaveMoney)}>
            {showSaveMoney ? 'Read Less' : 'Read More'}
          </button>
        </article>
      </main>

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
            <a href="laptop.html">Why Rent a Laptop for Your Next Business Trip?</a>
          </li>
          <li>
            <a href="top.html">Top 5 Laptops for Rent in 2024</a>
          </li>
          <li>
            <a href="rental-save-money.html">How Laptop Rentals Can Save Your Company Money</a>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default Blog;
