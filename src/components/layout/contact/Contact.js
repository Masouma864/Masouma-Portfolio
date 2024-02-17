import PageHeaderContent from "../../partials/pageHeaderContent";
import "./Contact.css";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here, e.g., send data to backend
    console.log("Form submitted with data:", formData);
    // Reset form data after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };
  // Define an array of contact information
  const contactInfo = [
    {
      iconClassName: "bx bx-map",
      title: "My Address",
      text: "13th District, Kabul, Afghanistan",
    },
    {
      iconClassName: "bx bx-share-alt",
      title: "Social Profiles",
      links: [
        {
          href: "https://twitter.com/Masouma86",
          className: "twitter",
          iconClassName: "bi bi-twitter",
        },
        {
          href: "https://www.github.com/Masouma864",
          className: "github",
          iconClassName: "bi bi-github",
        },
        {
          href: "https://www.instagram.com/Masouma.Modarresi/",
          className: "instagram",
          iconClassName: "bi bi-instagram",
        },
        {
          href: "https://join.skype.com/invite/EfEfmMksYC2V",
          className: "skype",
          iconClassName: "bi bi-skype",
        },
        {
          href: "https://www.linkedin.com/in/masouma-modarresi/",
          className: "linkedin",
          iconClassName: "bi bi-linkedin",
        },
      ],
    },
    {
      iconClassName: "bx bx-envelope",
      title: "Email Me",
      text: "masouma2020@gmail.com",
    },
    {
      iconClassName: "bx bx-phone-call",
      title: "Call Me on Whatsup",
      text: "+93 744373134",
    },
  ];

  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <PageHeaderContent headerTitle="Contact" headerText="Contact Me" />

          <div className="row mt-2">
            {/* Map through the contact info array */}
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="col-md-6 mt-4 d-flex align-items-stretch"
              >
                <div className="info-box">
                  <i className={info.iconClassName}></i>
                  <h3>{info.title}</h3>
                  {/* If links are provided, map through them */}
                  {info.links ? (
                    <div className="social-links">
                      {info.links.map((link, idx) => (
                        <a
                          key={idx}
                          href={link.href}
                          className={link.className}
                        >
                          <i className={link.iconClassName}></i>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <p>{info.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <form
            method="post"
            role="form"
            className="php-email-form mt-4"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-md-6 form-group">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-control"
                  id="email"
                  placeholder="Your Email"
                  required
                />
              </div>
            </div>
            <div className="form-group mt-3">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="form-control"
                id="subject"
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group mt-3">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-control"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="my-3">
              {/* Add loading, error, and success messages here */}
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Contact;
