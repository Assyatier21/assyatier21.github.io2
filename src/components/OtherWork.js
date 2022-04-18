import heroSifalib from "../assets/img/work/sifalib/sifalib-hero.png";
import heroPorto from "../assets/img/work/portofolio/portofolio-hero.png";
import heroDilan from "../assets/img/work/dilan/dilan-hero.png";
import heroMilea from "../assets/img/work/milea/milea-hero.png";

const OtherWork = () => {
  return (
    <>
      <div className="row mt-4 work-double-row">
        <div className="col-md-6 col-sm-12 delay-3s">
          <div className="work-hero-card">
            <img className="work-card-hero-img" src={heroSifalib} alt="hero" />
            <h1>SIFALIB (SIFA DIGITAL LIBRARY)</h1>
            <div className="d-flex justify-content-center">
              <hr className="w-75 m-0 mb-1 justify-content-center" />
            </div>
            <div id="work-text">WEB APPLICATION</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 delay-3s mtup">
          <div className="work-hero-card">
            <img className="work-card-hero-img" src={heroPorto} alt="hero" />
            <h1>MY PORTOFOLIO</h1>
            <div className="d-flex justify-content-center">
              <hr className="w-75 m-0 mb-1 justify-content-center" />
            </div>
            <div id="work-text">PORTOFOLIO</div>
          </div>
        </div>
      </div>
      <div className="row work-double-row mt-5" id="row-3">
        <div className="col-md-6 col-sm-12 delay-3s">
          <div className="work-hero-card">
            <img className="work-card-hero-img" src={heroMilea} alt="hero" />
            <h1>MILEA (MITRA LEWAT DUNIA MAYA)</h1>
            <div className="d-flex justify-content-center">
              <hr className="w-75 m-0 mb-1 justify-content-center" />
            </div>
            <div id="work-text">WEB APPLICATION</div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 delay-3s mtup">
          <div className="work-hero-card">
            <img className="work-card-hero-img" src={heroDilan} alt="hero" />
            <h1>SI-DILAN </h1>
            <div className="d-flex justify-content-center">
              <hr className="w-75 m-0 mb-1 justify-content-center" />
            </div>
            <div id="work-text">WEB APPLICATION</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtherWork;
