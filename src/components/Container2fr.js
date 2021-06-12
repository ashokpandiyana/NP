import "./Container2fr.css";
import Highlights from "./Highlights";
import Experience from "./Experience";
const Container2fr = () => {
  return (
    <>
      <div className="title">ASHOK PANDIYAN A</div>
      <div className="designation-container">
        <div className="designation">Front End Developer</div>
        <div className="experience">Experience - 2.2 Years</div>
      </div>
      <Highlights />
      <Experience />
    </>
  );
};

export default Container2fr;
