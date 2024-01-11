import { useState, useEffect } from "react";

export const MaterialGuide = () => {
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
      <div className="fabric-guide-main-content">
        <div className="presentation-container">
          <h1>Fabric Guide</h1>
          <p>
            Before you start its important to know what kind of fabric you are
            working with. Different kinds of fabric needs different solutions.
            How the fabric is vowen, if its elastic and if it has a plastic
            layer all plays in on how to best work with it.
          </p>
        </div>
        <div className="fabric-guides-container">
          <div className="fabric-type-knit">
            <div className="fabric-guide-text">
              <h2>Knitted fabric</h2>
              <p>
                Knitted fabrics are created by interlocking loops of yarn,
                resulting in a flexible and stretchy material.
              </p>
              <p>
                When working with knitted fabrics, keep in mind their inherent
                stretchiness. Use a ballpoint needle to prevent snags, and
                consider reinforcing seams with stretch stitches to accommodate
                movement without compromising durability.
              </p>
              <p>
                Knitted fabrics are ideal for comfortable, form-fitting projects
                like sweaters and activewear.
              </p>
            </div>
          </div>

          <div className="fabric-type-woven">
            <div className="fabric-guide-text">
              <h2>Woven fabrics</h2>
              <p>
                Woven fabrics are constructed by interlacing two sets of yarn at
                right angles, creating a stable and structured textile.
              </p>
              <p>
                When dealing with woven fabrics, consider their lack of stretch
                compared to knits. Use a universal or sharp needle for woven
                materials and pay attention to the fabric's grain for precise
                cutting and sewing.
              </p>
              <p>
                Woven fabrics are suitable for a wide range of projects,
                including dresses, shirts, and tailored garments
              </p>
            </div>
          </div>

          <div className="fabric-type-jersey">
            <div className="fabric-guide-text">
              <h2>Jersey fabric</h2>
              <p>
                Jersey is a type of knitted fabric known for its elasticity and
                soft drape.
              </p>
              <p>
                It is commonly used in T-shirts and casual wear. When working
                with jersey, use a ballpoint needle to avoid snags and choose a
                stretch stitch or a serger for a professional finish.
              </p>
              <p>
                Take care not to overstretch the fabric during sewing, and
                consider stabilizing hems and seams with interfacing to prevent
                distortion.
              </p>
            </div>
          </div>

          <div className="fabric-type-denim">
            <div className="fabric-guide-text">
              <h2>Denim</h2>
              <p>
                Denim is a sturdy cotton twill fabric known for its durability
                and versatility.
              </p>
              <p>
                When working with denim, consider its thickness and the
                potential strain on your sewing machine. Use a heavy-duty needle
                to sew through multiple layers and employ a strong polyester
                thread for added durability. Denim often benefits from a
                combination of straight and zigzag stitches for sturdy seams.
                Take advantage of denim's textured appearance by incorporating
                decorative topstitching.{" "}
              </p>
              <p>
                Pre-washing denim can help prevent shrinkage and color bleeding.
                Whether crafting jeans, jackets, or accessories, denim's
                timeless appeal and rugged nature make it a classic choice for
                various projects.
              </p>
            </div>
          </div>

          <div className="fabric-type-pvc">
            <div className="fabric-guide-text">
              <h2>PVC-coated</h2>
              <p>
                PVC-coated fabric is a woven material with a layer of polyvinyl
                chloride (PVC) on one side, providing water resistance and
                durability.
              </p>
              <p>
                When working with PVC-coated fabric, use a heavy-duty needle and
                adjust your machine for thicker materials. To avoid sticking,
                use clips instead of pins for pattern placement.
              </p>
              <p>
                Consider finishing edges with bias tape to maintain flexibility
                while preventing fraying. PVC-coated fabric is commonly used for
                raincoats, bags, and outdoor gear.
              </p>
            </div>
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
