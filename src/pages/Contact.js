import ContactSVG from "../assets/img/contact.svg";

const Contact = () => {
  return (
    <div>
      <div
        className="animated fadeIn row"
        style={{ width: `100vw`, animationDuration: `1.5s` }}
      >
        <div className="col-md-6" id="left-hero">
          <h1 className="hero-tag contact-hero animated fadeInLeft">
            Let's Get In Touch.
          </h1>
          <p className="hero-des contact-des animated fadeIn delay-1s">
            Want to discuss a project, an idea, an opportunity? Just fill up
            this form or write me an email{" "}
            <a
              target="_blank"
              href="mailto:ishandeveloper@outlook.com"
              rel="noreferrer"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </p>
          <form
            className="input-container"
            method="POST"
            action="https://script.google.com/macros/s/AKfycbxXnXVlCixiL89xlFlqgGmp3mQnQpR48x6CiZfHtw/exec"
          >
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                required=""
              />
            </div>
            <div className="form-group">
              <label for="email">Email Address</label>
              <input
                type="email"
                name="email"
                id="email"
                className="form-control"
                required=""
              />
            </div>
            <div className="form-group">
              <label for="message">Your Message</label>
              <textarea
                rows="3"
                id="message"
                name="message"
                className="form-control"
                required=""
              ></textarea>
            </div>
            <button
              type="submit"
              className="submit animated bounce delay-4s learn-btn"
            >
              Send Message
            </button>
          </form>
          <br />
        </div>

        <div className="col-md-6" id="hero-right">
          <img
            className="animated fadeInRight"
            id="hero-img"
            src={ContactSVG}
            alt="Kontak"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
