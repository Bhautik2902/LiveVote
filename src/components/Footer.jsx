import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__brand">
          <h3 className="footer__logo">LiveVote</h3>
          <p className="footer__desc">
            Simple, fast, and beautiful polls. Built for instant engagement.
          </p>
        </div>

        <div className="footer__links">
          <a href="#" className="footer__link">About</a>
          <a href="#" className="footer__link">Contact</a>
          <a href="#" className="footer__link">Privacy Policy</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p>
          © {new Date().getFullYear()} LiveVote. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
