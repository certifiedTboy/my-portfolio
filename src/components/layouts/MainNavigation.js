import React, { useState } from "react";

const navigationItems = [
  ["About", "about"],
  ["Services", "services"],
  ["Experience", "experience"],
  ["Projects", "projects"],
];

const MainNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Main navigation">
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
          aria-label="Adebisi Tosin home"
        >
          <span className="brand-mark">ET</span>
          <span className="brand-name">
            WebDev Portfolio<span>.</span>
          </span>
        </a>
        <button
          className={`menu-toggle${menuOpen ? " is-open" : ""}`}
          type="button"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="primary-menu"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
        </button>
        <div
          className={`nav-links${menuOpen ? " is-open" : ""}`}
          id="primary-menu"
        >
          {navigationItems.map(([label, target]) => (
            <a href={`#${target}`} key={target} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
