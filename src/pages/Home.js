import heroImg from "../assets/img/undraw_developer_activity.svg";

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
              className="typer"
              id="main"
              data-words="Hello, I'm Sholeh."
              data-delay="100"
              data-deleteDelay="1000"
              data-loop="1"
              style={{ color: `#5584ac   !important` }}
            ></span>
            &nbsp;
          </h1>
          <p className="hero-des">
            I'm a Software Engineer with experience in{" "}
            <b>Website Development</b>, specializing in{" "}
            <b>Frontend Development</b>. I use my skill in website development
            to solve technological problem in businesses.
          </p>

          <button className="animated bounce delay-4s learn-btn">
            Learn More
          </button>
          <a href="contact.html">
            <button className="contact-btn">Contact Me</button>
          </a>
          <div className="social-icons">
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:muhammadsholeh.dev@gmail.com"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://web.facebook.com/baabud.sholeh.9/"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.hackerrank.com/Assyatier11"
            >
              <i className="fab fa-hackerrank"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/Assyatier21"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/muhammad-sholeh11"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6" id="hero-right">
          <img id="hero-img" src={heroImg} />
        </div>
      </div>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li>
                  <a href="#" style={{ textDecoration: `line-through` }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="work.html">Work</a>
                </li>
                <li>
                  <a href="#">Uses</a>
                </li>
                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
