import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__social">
          <a
            href="https://www.instagram.com/mohmd_fayiz_/"
            className="footer__social-link"
            rel="noreferrer"
            target="_blank"
          >
            <i className="uil uil-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammedfayis/"
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
