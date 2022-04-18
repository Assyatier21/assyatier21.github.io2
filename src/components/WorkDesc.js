import logoKisel from "../assets/img/work/alea/logo-kisel-tp.png";

import { Link } from "react-router-dom";

const WorkDesc = () => {
  return (
    <div>
      <h1>ALEA</h1>
      <p>
        ALEA is an asset auction application that performs its function as a
        forum for online-based auction activities belonging to Kisel Indonesia.
        This application is an innovation in the implementation of auctions
        which were previously still manual.
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
            <img id="partner-logo" src={logoKisel} style={{ padding: `2px` }} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default WorkDesc;
