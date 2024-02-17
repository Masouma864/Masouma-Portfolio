import React  from "react";

const Testimonials = () => {
  const testimonialsData = [
  
    {
      quote:
      "As a developer, I've had the pleasure of working with a variety of clients, but none have been as impressive as Masouma. Their attention to detail and dedication to delivering high-quality results exceeded my expectations. I highly recommend their services!",
      image: "./img/testimonials/testimonials-3.jpg",
      name: "Mozhda Karimi",
      designation: "Store Owner",
    },
    {
      quote:
      "Working with Masouma on my frontend development project was an absolute pleasure. They took the time to understand my vision and brought it to life with precision and creativity. Their communication skills and professionalism made the entire process seamless, and I couldn't be happier with the results.",
      image: "./img/testimonials/testimonials-4.jpg",
      name: "Micheal Oguntayo",
      designation: "Freelancer",
    },
    {
      quote:
        "Masouma she's a great learner, very open-minded to advise and an adroit researcher. I really enjoyed mentoring her, she would go beyond her limits just to try to understand something. All the time she would come up with a simple way of learning something. One other aspect I liked about her is her time management she would split time in a way that would help her team to finish their project in time.",
      image: "./img/testimonials/testimonials-5.jpg",
      name: "Josphat Nkonde",
      designation: "Entrepreneur",
    },
  ];

  return (
   
        <>
          {testimonialsData.map((testimonial, index) => (
            <div className="swiper-slid" key={index}>
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img
                  src={testimonial.image}
                  className="testimonial-img"
                  alt=""
                />
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.designation}</h4>
              </div>
            </div>
          ))}
        </>
  
  );
};

export default Testimonials;
