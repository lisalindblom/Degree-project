import { Link } from "react-router-dom";
import needle from "../assets/sewing-needle.png";
import leaf from "../assets/leaf.png";
import earth from "../assets/earth.png";
import { useEffect, useState } from "react";
export const LandingPage = () => {
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
      <div className="startpage">
        <div className="hero">
          <h1>Embracing sustainability, one stitch at a time</h1>
        </div>
        <div className="content-card">
          <img src={needle} alt="" />
          <h2>Explore creative guides</h2>
          <p>
            Dive into a world of DIY fashion! Browse guides on repairing,
            remaking, and reusing clothing.
          </p>
          <Link to="/posts">
            Read more<i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="content-card">
          <img src={leaf} alt="" />
          <h2>Fabric insights</h2>
          <p>
            Uncover the different fabrics, their characteristics, and how to
            care for them.
          </p>
          <Link to="/material-guide">
            Read more<i className="bi bi-arrow-right"></i>
          </Link>
        </div>
        <div className="content-card">
          <img src={earth} alt="" />
          <h2>Environmental Impact</h2>
          <p>
            Explore our resources that shed light on the environmental
            consequences of our clothing consumption.
          </p>
          <Link to="/climate-impact">
            Read more<i className="bi bi-arrow-right"></i>
          </Link>
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
