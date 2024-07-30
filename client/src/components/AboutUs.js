import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="AboutUs-body">

      <div className="AboutUs-div">
        <header className='AboutUs-header'>
          <nav className='AboutUs-nav'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className='AboutUs-main'>
          <section className="history-section">
            <h2>Our History</h2>
            <p>
              Al-Salam Hospital is a leading healthcare provider in Egypt, serving
              the local community since 1990. Our hospital was founded by Dr. Ahmed
              Hassan, a renowned surgeon with over 30 years of experience in the
              medical field. Since our establishment, we have been committed to
              providing the highest quality healthcare services to our patients,
              with a focus on patient-centered care, innovation, and clinical
              excellence.
            </p>
          </section>
          <section className="mission-section">
            <h2>Our Mission</h2>
            <p>
              At Al-Salam Hospital, our mission is to provide comprehensive,
              compassionate, and patient-centered healthcare services to our
              patients. We are committed to meeting the healthcare needs of our
              community by delivering high-quality medical care, improving health
              outcomes, and promoting wellness and disease prevention. We strive to
              create a welcoming and supportive environment where our patients feel
              valued and cared for.
            </p>
          </section>
          <section className="facilities-section">
            <h2>Our Facilities</h2>
            <div className="facilities">
              <div className="facility">
                <h3>Emergency Department</h3>
                <p>
                  Our emergency department is staffed by experienced emergency
                  medicine physicians and nurses who are available 24/7 to respond
                  to medical emergencies. We have state-of-the-art equipment and
                  technology to ensure that our patients receive prompt and
                  effective care.
                </p>
              </div>
              <div className="facility">
                <h3>Intensive Care Unit</h3>
                <p>
                  Our intensive care unit (ICU) is staffed by a team of critical
                  care specialists who provide round-the-clock care to our most
                  critically ill patients. We have advanced monitoring equipment,
                  ventilators, and other life-saving technologies to ensure that
                  our patients receive the highest level of care.
                </p>
              </div>
              <div className="facility">
                <h3>Diagnostic Imaging</h3>
                <p>
                  Our diagnostic imaging department offers a full range of imaging
                  services, including X-rays, CT scans, MRI scans, and ultrasound.
                  Our imaging equipment is state-of-the-art and staffed by highly
                  trained radiologists and technicians to ensure that our patients
                  receive accurate and timely diagnoses.
                </p>
              </div>
              <div className="facility">
                <h3>Pharmacy</h3>
                <p>
                  Our pharmacy is staffed by licensed pharmacists and technicians
                  who work closely with our physicians to ensure that our patients
                  receive the right medications at the right time, with the right
                  dosage and instructions. We also have an in-house compounding
                  pharmacy that can create customized medications for our patients.
                </p>
              </div>
            </div>
          </section>
          <section className="doctors-section">
            <h2>Our Doctors</h2>
            <p>
              At Al-Salam Hospital, we have a team of highly trained and experienced
              physicians who are dedicated to providing the best possible care to our
              patients. Our doctors come from a variety of specialties, including
              cardiology, gastroenterology, neurology, oncology, pediatrics, and
              surgery. We also have a team of resident physicians who are undergoing
              advanced training in their respective specialties.
            </p>
          </section>
          <section className="awards-section">
            <h2>Awards and Recognition</h2>
            <p>
              Al-Salam Hospital has been recognized for its commitment to clinical
              excellence and patient-centered care. We have received numerous awards
              and accreditations, including the Joint Commission International
              (JCI) Accreditation, which is considered the gold standard in global
              healthcare quality. We are also a member of the Egyptian Private
              Hospitals Association and the International Society for Quality in
              Healthcare (ISQua).

            </p>

          </section>
        </main>
        <footer className="AboutUs-footer">
          <p>&copy; 2023 Al-Salam Hospital. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default AboutUs;

