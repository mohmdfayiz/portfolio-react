import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Mohammed Fayis</h1>
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://twitter.com/mohmd_fayis"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-twitter-alt"></i>
          </a>
          <a
            href="https://www.instagram.com/mohmd_fayiz_/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>

          <a
            href="http://www.linkedin.com/in/mohammed-fayis-869185250/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
        </div>
        <span className="footer__copy">
            © Mohammed Fayis. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
