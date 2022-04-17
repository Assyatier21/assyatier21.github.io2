import { Link } from "react-router-dom";

const MediaSosial = () => {
  return (
    <div>
      <Link
        onClick={() =>
          (window.location = "mailto:muhammadsholeh.dev@gmail.com")
        }
        target="_blank"
        rel="noreferrer"
      >
        <i className="fas fa-envelope"></i>
      </Link>
      <Link
        onClick={() =>
          (window.location = "https://web.facebook.com/baabud.sholeh.9/")
        }
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-facebook"></i>
      </Link>
      <Link
        onClick={() =>
          (window.location = "https://www.hackerrank.com/Assyatier11")
        }
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-hackerrank"></i>
      </Link>
      <Link
        onClick={() => (window.location = "https://github.com/Assyatier21")}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
      </Link>
      <Link
        onClick={() =>
          (window.location = "https://linkedin.com/in/muhammad-sholeh11")
        }
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin"></i>
      </Link>
    </div>
  );
};

export default MediaSosial;
