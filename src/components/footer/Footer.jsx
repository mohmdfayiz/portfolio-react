import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h2 className="footer__title">Mohammed Fayis</h2>
      
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
            href="http://www.linkedin.com/in/mohammed-fayis-869185250/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a
            href="https://github.com/mohmdfayiz/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
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
