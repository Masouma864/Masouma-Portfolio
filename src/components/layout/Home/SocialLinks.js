import React from "react";
import { Animate } from "react-simple-animate";

const SocialLinks = () => {


  return (
    <Animate
      play
      duration={1.5}
      delay={0.5}
      start={{
        transform: "translateY(550px)",
      }}
      end={{
        transform: "translateX(0px)",
      }}
    >
          <div className="social-links">
            <a href="https://twitter.com/Masouma86" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="https://www.github.com/Masouma864" className="github"><i className="bi bi-github"></i></a>
            <a href="https://www.instagram.com/Masouma.Modarresi/" className="instagram"><i className="bi bi-instagram"></i></a>
            <a href="https://join.skype.com/invite/EfEfmMksYC2V" className="skype"><i className="bi bi-skype"></i></a>
            <a href="https://www.linkedin.com/in/masouma-modarresi/" className="linkedin"><i className="bi bi-linkedin"></i></a>
          </div>
    </Animate>
  );
};

export default SocialLinks;
