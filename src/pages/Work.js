import WorkDesc from "../components/WorkDesc";
import OtherWork from "../components/OtherWork";
import MyFooter from "../components/MyFooter";

const Work = () => {
  return (
    <div>
      <div
        className="fadeIn row"
        style={{ width: `100vw`, height: `auto`, animationDuration: `1.5s` }}
      >
        <WorkDesc />
        <OtherWork />
      </div>
      <MyFooter />
    </div>
  );
};

export default Work;
