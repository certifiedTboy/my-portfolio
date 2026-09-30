import React from "react";

const Footer = () => (
  <footer className="site-footer">
    <div className="page-shell footer-inner" data-scroll-reveal>
      <a className="footer-brand" href="#home">
        WebDev Portfolio<span>.</span>
      </a>
      <p>Designed with care. Built with purpose.</p>
      <a className="back-to-top" href="#home">
        Back to top <span aria-hidden="true">↑</span>
      </a>
      <span className="footer-copyright">
        © {new Date().getFullYear()} Emmanuel Tosin
      </span>
    </div>
  </footer>
);

export default Footer;
