import group from "../../assets/footergroup.png";
import lady from "../../assets/footerlady.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="text">
            <h3>Want to contribute?</h3>
            <p>
              We are happily accepting contributions from our creative
              community. It could be anything from a guide or inspirational post
              to an idea. We would love to hear from you!
            </p>
          </div>

          <div className="graphics">
            <img className="group" src={group} alt="" />
            <img className="lady" src={lady} alt="" />
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact">
            <h3>Contact:</h3>
            <div className="mail">
              <a href="mailto: lisa.manssonlindblom@medieinstitutet.se">
                mend@mail.com
              </a>
            </div>
          </div>
          <div className="social">
            <h3>Follow us:</h3>
            <div className="icons">
              <div className="github">
                <a href="https://github.com/lisalindblom">
                  <i className="bi bi-github"></i>
                </a>
              </div>
              <div className="instagram">
                <a href="https://github.com/lisalindblom">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
