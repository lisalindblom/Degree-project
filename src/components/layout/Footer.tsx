export const Footer = () => {
  return (
    <>
      <footer className="outline flex-col footer">
        <div id="contact">
          Vill du se fler av mina projekt eller komma i kontakt med mig?
        </div>
        <div id="contact__links">
          <div className="mail">
            <a href="mailto: lisa.manssonlindblom@medieinstitutet.se">
              <i className="bi bi-envelope"></i>
              lisa.manssonlindblom@medieinstitutet.se
            </a>
          </div>

          <div className="github">
            <a href="https://github.com/lisalindblom">
              <i className="bi bi-github"></i>
              lisalindblom
            </a>
          </div>

          <div className="linkedin">
            <a href="https://www.linkedin.com/in/lisa-lindblom-49940b254/">
              <i className="bi bi-linkedin"></i>
              lisa-lindblom-49940b254
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
