import React from "react";
import "../styles/Banner.css";
import Footer from '../components/Footer';
import Button from '../components/Button';

export default function Banner() {
  return (
    <section className="banner-root" aria-labelledby="banner-heading">
      <svg className="blob blob-1" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g transform="translate(300,300)">
          <path d="M120 -178C162 -145 193 -108 214 -62C236 -16 247 38 227 85C207 132 156 171 103 192C50 214 -6 218 -58 199C-110 180 -158 138 -190 86C-221 34 -236 -31 -217 -84C-198 -137 -145 -176 -94 -204C-43 -231 6 -247 59 -247C112 -247 78 -211 120 -178Z" />
        </g>
      </svg>

      <svg className="blob blob-2" viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg" aria-hidden>
        <g transform="translate(300,300)">
          <path d="M97 -128C129 -92 152 -55 174 -6C196 44 216 95 198 132C180 170 124 194 71 210C18 227 -34 236 -85 223C-135 210 -186 175 -205 123C-224 71 -210 1 -189 -48C-168 -98 -140 -132 -101 -165C-62 -197 -31 -218 12 -230C55 -242 66 -164 97 -128Z" />
        </g>
      </svg>

      <div className="banner-container">
        <header className="banner-topcard" role="region" aria-label="app summary">
          <div className="top-left">
            <span className="badge">New • Group Polls</span>
            <h2 className="mini-title">Voting, made delightful</h2>
            <p className="mini-desc">Fast polls, clear results — invite the group, decide together.</p>
          </div>
          <div className="top-right">
            <div className="stat">
              <div className="stat-number">98%</div>
              <div className="stat-label">Decision speedup</div>
            </div>
            <div className="stat stat-soft">
              <div className="stat-number">5s</div>
              <div className="stat-label">Avg response time</div>
            </div>
          </div>
        </header>

        <main className="banner-content">
          <div className="left-block">
            <h1 id="banner-heading" className="banner-title large">
              Start a poll. Gather opinions. Get things done.
            </h1>
            <p className="banner-description lead">
              Create a poll in seconds and notify everyone in your group. Real-time responses,
              anonymous options, and instant tallying — perfect for teams, families, and communities.
            </p>

            <ul className="features">
              <li>
                <strong>Instant notifications</strong> — everyone in the group receives the poll.
              </li>
              <li>
                <strong>Flexible responses</strong> — multiple choice, ranked, and open replies.
              </li>
              <li>
                <strong>At-a-glance results</strong> — live charts and summary cards.
              </li>
            </ul>

            <div className="cta-row">
              {/* <button className="btn-primary">Create a Poll</button> */}
              <Button variant="tertiary">Create a Poll</Button>
            </div>
          </div>

          <aside className="right-block" aria-hidden>
            <div className="card poll-preview">
              <div className="poll-header">
                <div className="dot live" />
                <div className="poll-title">Lunch spot — Quick vote</div>
              </div>
              <div className="choices">
                <div className="choice">
                  <div className="choice-label">Sushi</div>
                  <div className="choice-bar" style={{ width: "48%" }} />
                  <div className="choice-count">24</div>
                </div>
                <div className="choice">
                  <div className="choice-label">Pizza</div>
                  <div className="choice-bar" style={{ width: "32%" }} />
                  <div className="choice-count">16</div>
                </div>
                <div className="choice">
                  <div className="choice-label">Salad</div>
                  <div className="choice-bar" style={{ width: "20%" }} />
                  <div className="choice-count">10</div>
                </div>
              </div>
              <div className="poll-footer">
                <div className="avatars">
                  <div className="avatar">A</div>
                  <div className="avatar">M</div>
                  <div className="avatar">S</div>
                  <div className="avatar more">+7</div>
                </div>
                <div className="time">Ends in 2h</div>
              </div>
            </div>

            <div className="slogan-card">
              <h3 className="slogan">Your voice, faster.</h3>
              <p className="slogan-sub">Decide together. Move forward.</p>
            </div>
          </aside>
        </main>

      </div>
      <Footer/>
    </section>
  );
}
