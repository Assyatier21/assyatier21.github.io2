import heroImg from "../assets/img/undraw_developer_activity.svg";
import { Link } from "react-router-dom";
import MediaSosial from "../components/MediaSosial";

const Home = () => {
  return (
    <div>
      <div
        className="animated fadeIn row"
        style={{ width: `100vw`, animationDuration: `1.5s` }}
      >
        <div className="col-md-6" id="left-hero">
          <h1 className="hero-tag">
            <span
              className="typer blue"
              id="main"
              data-words="Hello, I'm Sholeh."
              data-delay="100"
              data-deleteDelay="1000"
              data-loop="1"
              style={{ color: `#5584ac` }}
            ></span>
            &nbsp;
          </h1>
          <p className="hero-des">
            I'm a Software Engineer with experience in{" "}
            <b className="blue">Website Development</b>, specializing in{" "}
            <b className="blue">Frontend Development</b>. I use my skill in
            website development to solve technological problem in businesses.
          </p>

          <button className="animated bounce delay-4s learn-btn">
            Learn More
          </button>
          <Link to="/contact">
            <button className="contact-btn">Contact Me</button>
          </Link>

          <div className="social-icons">
            <MediaSosial />
          </div>
        </div>
        <div className="col-md-6 " id="hero-right">
          <img id="hero-img" alt="Hero-IMG" src={heroImg} />
        </div>
      </div>
    </div>
  );
};

export default Home;
