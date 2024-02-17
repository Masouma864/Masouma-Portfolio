
import "./Home.css";
import SocialLinks from "./SocialLinks";

function Home() {
  return (
    <section id="home">
      
        <div class="container">
          <h1 className="home-h">
            Masouma Modarresi
          </h1>
          <h2>
            I'm a passionate <span>Software Developer</span> from Afghanistan
          </h2>
          <SocialLinks/>
        </div>
      
    </section>
  );
}
export default Home;
