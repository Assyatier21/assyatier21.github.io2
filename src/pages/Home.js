const Home = () => {
  return (
    <div
      class="animated fadeIn row"
      style={{ width: `100vw`, animationDuration: `1.5s` }}
    >
      <div class="col-md-6" id="left-hero">
        <h1 class="hero-tag">
          <span
            class="typer"
            id="main"
            data-words="Hello, I'm Sholeh."
            data-delay="100"
            data-deleteDelay="1000"
            data-loop="1"
            style={{ color: `blue !important` }}
          ></span>
          &nbsp;
        </h1>
        <p class="hero-des">
          I make elegantly professional <b>web</b> apps and <b> flutter</b> apps
          for a living and also design
          <b>user experiences</b>. If you want me to do any one of these for
          you, get in touch with me here.
        </p>

        <button class="animated bounce delay-4s learn-btn">Learn More</button>
        <a href="contact.html">
          <button class="contact-btn">Contact Me</button>
        </a>
        <div class="social-icons">
          <a target="_blank" href="mailto:ishandeveloper@outlook.com">
            <i class="fas fa-envelope"></i>
          </a>
          <a target="_blank" href="https://instagram.com/developer.ishan">
            <i class="fab fa-instagram"></i>
          </a>
          <a target="_blank" href="https://hackerrank.com/ishandeveloper">
            <i class="fab fa-hackerrank"></i>
          </a>
          <a target="_blank" href="https://github.com/ishandeveloper">
            <i class="fab fa-github"></i>
          </a>
          <a target="_blank" href="https://linkedin.com/in/ishandeveloper">
            <i class="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
      <div class="col-md-6" id="hero-right">
        kanan
      </div>
    </div>
  );
};

export default Home;
