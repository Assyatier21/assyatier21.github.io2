import logoKisel from "../assets/img/work/alea/logo-kisel-tp.png";
import heroAlea from "../assets/img/work/alea/hero-alea.png";
import { Link } from "react-router-dom";

const WorkDesc = () => {
  return (
    <div>
      <div className="col-md-12" id="left-hero">
        <h1 className="hero-tag contact-hero fadeInLeft">My Work.</h1>
        <p className="hero-des contact-des fadeIn delay-1s">
          Take a look at some of my projects I've done, apps or websites that
          I've made and my designs.
        </p>
      </div>
      <div className="animated bounceInUp delay-1s">
        <div className="row" id="work-row">
          <div className="col-md-6 col-sm-12 bounceInLeft delay-2s">
            <center>
              <div className="work-hero">
                <img className="work-hero-img" src={heroAlea} alt="hero" />
              </div>
            </center>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="work-des">
              <h1>ALEA</h1>
              <p>
                ALEA is an asset auction application that performs its function
                as a forum for online-based auction activities belonging to
                Kisel Indonesia. This application is an innovation in the
                implementation of auctions which were previously still manual.
              </p>
              <div className="technologies">
                <h2>Technologies Used</h2>
                <span className="tech-stack"> NextJS </span>
                <span className="tech-stack"> React-Bootstrap </span>
              </div>
              <div className="technologies featured">
                <h2>Featured On</h2>
                <span className="partners">
                  <Link
                    onClick={() =>
                      (window.location = "http://alea.kiselindonesia.com:8083/")
                    }
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      id="partner-logo"
                      src={logoKisel}
                      style={{ padding: `2px` }}
                      alt="hero"
                    />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDesc;
