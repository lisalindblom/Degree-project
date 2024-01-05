import sewingWomen from "../../assets/pana.png";
import guy from "../../assets/character-2.png";
import laptop from "../../assets/character-2guyWithLaptop.png";

export const FilterGraphics = () => {
  return (
    <>
      <div className="graphics-container">
        <img src={laptop} alt="" />
        <img src={sewingWomen} alt="" />
        <img src={guy} alt="" />
      </div>
    </>
  );
};
