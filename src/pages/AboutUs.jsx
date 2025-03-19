import React from 'react';
import '../styles/aboutus.css'; // Make sure this file contains your about-us-specific styles

function AboutUs() {
  return (
    <>
      {/* Header Section for About Us */}
      <div className="header-aboutus">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </div>

      {/* Main Content */}
      <div className="container-aboutus">
        <h2>Embracing The Essence Of Value Added, Customer Centric Services</h2>
        <p>
          When it comes to delivering an Outstanding and Unprecedented Rental Services of Digital
          Equipments such as IPads, Laptops and MacBooks, VRS IT Smart Solutions Pvt. Ltd, based
          out of Hyderabad is one of the Pioneers in delivering and retaining the same. The company
          has it's Grounds rooted in one of the most Fabricated and Streamlined IT Equipments Rental
          Services domain, which creates the "Out of the Box" Edge for our organization on a Holistic
          Platform as well as it uplifts the Brand name of the company.
        </p>
        <p>
          Whether it is any of the three Digital Equipments, our team is Evergreen to serve the Best
          Rental Offers at every comerstone and prove the Excellence in Quality and Eminence in terms
          of the Services. The Catch lies in the fact that not only do we assert ourselves the Pride
          in our Brand Name, but also do we prove the Best from the Better in our Services at every
          Stepping Stone II
        </p>
        <h2>Scaling Up Your Digital Needs, At Your Choice, In The Best Rental Price !!</h2>
        <p>
          The Odyssey was Indeed long, which commenced near and around 11 years before and then onwards,
          our Incessant Rental Services never proved a Damp Squlb II It commenced initially in Dubal and
          now we have already and is in the process of establishing and grounding our Roots in Hyderabad.
        </p>
        <p>
          Whether it is any sort of MacBook, IPad or Laptop, the fact revolves around the corner that
          every Vertical of our Services is aligned to take the utmost level of Professional Care,
          whether it is the Timely Delivery, Repair and Replacement, the Installation process or else
          the Maintenance of these Digital Equipments. An added advantage is that our Technical team is
          Cent Percent Certified and they hold the Immense levels of Cognizance when it comes to resolving
          any sort of Technical glitches on site
        </p>
        <p>
          In fact, it might make you feel more compatible and Logical, when you know the Rates offered for
          our Rental Amenities. Yess, It is qulet feasible II What you are able to avall at VRS IT Smart
          Solutions Pvt. Ltd is the most advanced and upgraded Versions of the Software and Operating Systems
          at a very affordable Budget
        </p>
        <p>
          After all, these are in the process of Incessant Transitional Developments and you as a Client would
          not prefer hopefully, to purchase a new, more Robust and Vehement IPad or else the typical Sleeky
          Vibrant MacBook or a Laptop, every three to six months, which is having the most Updated Software.
          This is the Loophole, which is always cemented from our End by providing the most Stellar Rental Services.
        </p>

        <div className="missback">
          <h2>Company Mission</h2>
          <p>
            Fragmenting your Business and Academic needs, to Greater Heights, and at the same time,
            Leveraging those needs at a Customized Platform. In turn, we are keen to imbibe that so called,
            Digital Space, which is not only Accessible readily, but also, Flexible, Instantly.
          </p>
          <div className="row row-aboutus">
            <div className="column-2">
              <div className="card">
                <div className="img-container">
                  <img src="/images/about-us/shakehand.jpeg" alt="Broader Array" />
                </div>
                <h2>Broader Array</h2>
                <p>
                  Every Service works with profuse variations within the Quality and Quantity to be served.
                </p>
              </div>
            </div>
            <div className="column-2">
              <div className="card">
                <div className="img-container">
                  <img src="/images/about-us/clientwithsuit.png" alt="Tailor Made" />
                </div>
                <h2>Tailor Made</h2>
                <p>
                  Serves every Client at the Spur of the Moment, needlessly of the Time, Manpower and Expense Factor.
                </p>
              </div>
            </div>
            <div className="column-2">
              <div className="card">
                <div className="img-container">
                  <img src="/images/about-us/barcodetag.png" alt="Stupendous Quality" />
                </div>
                <h2>Stupendous Quality</h2>
                <p>
                  Offering Stellar Quality at a Price, which is Feasible and the most Redefined Version of Technology.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <h2>Company Vision</h2>
          <p>
            Expanding our Rental Services beyond the Boundaries to an extent that we retain a Symbiotic
            Relation with Clients.
          </p>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-container">
                  <img src="/images/about-us/clientwithsuit.png" alt="Integrity" />
                  <p>Integrity</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-container">
                  <img src="/images/about-us/clientwithsuit.png" alt="Professionalism" />
                  <p>Professionalism</p>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="card">
                <div className="icon-container">
                  <img src="/images/about-us/clientwithsuit.png" alt="Client Focused" />
                  <p>Client Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
