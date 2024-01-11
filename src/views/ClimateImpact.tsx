import { useState, useEffect } from "react";
import climate from "../assets/climate.png";

export const ClimateImpact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <>
      <div className="climate-container ">
        <div className="hero-container">
          <div className="text-container">
            <h1>Clothes and the climate</h1>
            <p>
              Our clothing choices have a profound impact on the environment.
              The fashion industry is a major contributor to carbon emissions,
              water pollution, and resource depletion.
            </p>
            <p>
              From the production of textiles to the disposal of garments, each
              stage in the fashion lifecycle plays a role in the environmental
              footprint.
            </p>
            <p>
              Fast fashion, characterized by rapid production cycles and
              disposable trends, exacerbates these issues.
            </p>
          </div>
          <img src={climate} alt="" />
        </div>
        <div className="content-container">
          <div className="content-card">
            <h2>Textile Production: </h2>
            <p>
              The cultivation of raw materials, such as cotton, requires vast
              amounts of water and often involves the use of pesticides.
            </p>
            <p>
              Synthetic fibers, derived from petroleum, contribute to resource
              depletion and release harmful emissions during manufacturing.
            </p>
          </div>
          <div className="content-card">
            <h2>Why should we mend clothes?</h2>
            <h3>Raw Material and Water:</h3>
            <p>
              Mending a pair of jeans avoids the need for purchasing a new one,
              saving the raw materials (cotton, etc.) and the associated water
              required for its production.
            </p>
            <h3>Manufacturing:</h3>
            <p>
              By extending the lifespan of the jeans, you reduce the demand for
              new manufacturing processes and the emissions associated with
              them.
            </p>
            <h3>Transportation:</h3>
            <p>
              If you're mending your jeans instead of purchasing new ones,
              there's no need for transportation emissions related to the
              delivery of a new product.
            </p>
          </div>
          <div className="content-card">
            <h2>
              Did you know that washing and drying clothes contribute to their
              environmental impact?
            </h2>
            <p>
              When synthetic fabrics like polyester or nylon are washed, they
              release tiny plastic particles called microfibers into the water.
              These microfibers can make their way into oceans and waterways,
              contributing to plastic pollution.
            </p>
            <p>
              To reduce this impact, you can use a Guppyfriend bag or similar
              products designed to capture microfibers during washing.
            </p>
          </div>
        </div>
        {isVisible && (
          <button className="top-of-page" onClick={scrollToTop}>
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
};
