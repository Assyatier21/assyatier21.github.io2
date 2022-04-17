import HotspotHero from "../assets/img/work/hotspoter/hotspoter-hero.png";
import WorkDesc from "../components/WorkDesc";

const Work = () => {
  return (
    <div>
      <div
        class="fadeIn row"
        style={{ width: `100vw`, height: `auto`, animationDuration: `1.5s` }}
      >
        <div class="col-md-12" id="left-hero">
          <h1 class="hero-tag contact-hero fadeInLeft">My Work.</h1>
          <p class="hero-des contact-des fadeIn delay-1s">
            Take a look at some of my projects I've done, apps or websites that
            I've made and my designs.
          </p>
        </div>
        <div class="animated bounceInUp delay-1s">
          {/*------------------ First Content ------------------ */}
          <div class="row" id="work-row">
            <div class="col-md-6 col-sm-12 bounceInLeft delay-2s">
              <center>
                <div class="work-hero">
                  <img class="work-hero-img" src={HotspotHero} />
                </div>
              </center>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="work-des">
                <WorkDesc />
              </div>
            </div>
          </div>
          {/*------------------ First Content ------------------ */}
        </div>
      </div>
    </div>
  );
};

export default Work;
