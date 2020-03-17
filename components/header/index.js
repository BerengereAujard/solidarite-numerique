import React from 'react';
import Link from 'next/link';

import constants from '../../constants';

export const HEADER_PAGE = { CONTACT: 2, ABOUT: 1 };

const HEADER = [
  {
    href: '/a-propos',
    txt: 'Qui sommes-nous ?',
    key: HEADER_PAGE.ABOUT,
  },
  {
    href: '/contact',
    txt: 'Nous contacter',
    key: HEADER_PAGE.CONTACT,
  },
];

const Header = ({ headerKey = 'home' }) => {
  return (
    <>
      <header role="navigation">
        <nav className="nav content-container">
          <input
            className="menu-btn"
            type="checkbox"
            id="menu-btn"
            aria-label="ouverture-menu"
          />
          <label className="hamburger-menu" htmlFor="menu-btn">
            <span />
            <span />
            <span />
          </label>
          <div className="container">
            <Link href="/">
              <a className="logo-wrapper">
                <img
                  className="logo"
                  src="/images/bloc_marque.svg"
                  alt="Accueil de solidarite-numerique.fr"
                />
              </a>
            </Link>
            <div id="site-title">Solidarité numériques</div>

            <ul className="links">
              {HEADER.map(item => (
                <li
                  key={item.href}
                  id={item.id || ''}
                  className={`${headerKey === item.key ? 'current' : ''}`}
                >
                  <a className="dont-apply-link-style" href={`${item.href}`}>
                    {item.txt}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
      <style jsx>{`
        header {
          top: 0;
          z-index: 1000;
          width: 100%;
          background: #fff;
        }

        a {
          text-decoration: none;
          cursor: pointer;
          color: #333;
        }

        a:hover {
          color: #333;
        }

        .nav {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin: auto;
          height: 100%;
          z-index: 100;
        }

        .nav .container {
          display: flex;
          flex-direction: row;
          flex: 1;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
          height: 100%;
        }

        #site-title {
          font-size: 2rem;
          font-weight: 600;
          flex-grow: 1;
          text-align: left;
        }
        a.logo-wrapper {
          display: flex;
          align-items: center;
          margin: 0 14px;
        }

        a.logo-wrapper .logo {
          height: 170px;
          width: auto;
          padding: 0;
          box-sizing: content-box;
        }

        .links {
          display: inline-flex;
          margin: 0;
          padding: 0em 1em;
          list-style-type: none;
          align-items: center;
          height: 100%;
        }

        .links a {
          padding: 8px 10px;
          margin: 0 5px;
          border-radius: 3px;
        }
        .links a:after {
          content: none;
        }

        .links > li {
          position: relative;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          height: 100%;
        }
        .links > li:after {
          content: '';
          position: absolute;
          bottom: 0;
          margin: auto;
          width: 0%;
          height: 3px;
          background-color: ${constants.colors.blue};
          transition: width 200ms ease-in-out, opacity 200ms ease-in-out;
          opacity: 0;
        }
        .links > li.current:after {
          width: 58%;
          opacity: 1;
        }
        .links > li:not(.current):hover:after {
          width: 58%;
          opacity: 1;
        }

        .menu-btn {
          display: none;
        }

        @media (max-width: 1024px) {
          font-size: 18px;

          .nav > .container > .links {
            opacity: 0;
            display: none;
            height: auto;
          }

          .menu-btn:checked ~ .container {
            height: 100vh;
            width: 100%;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background-color: #fff;
          }
          .menu-btn:checked ~ .container .links {
            display: block;
            opacity: 1;
            display: flex;
            flex-direction: column;
          }
          .menu-btn:checked ~ .container .links > li {
            margin: 10px 0;
          }

          .menu-btn:checked ~ .container .links .logo-wrapper {
            display: none;
          }

          /* menu icon */

          .hamburger-menu {
            display: block;
            width: 60px;
            height: 60px;
            position: absolute;
            top: 0px;
            right: 0px;
            cursor: pointer;
          }

          .hamburger-menu:focus {
            outline: none;
          }

          .hamburger-menu span {
            display: block;
            position: absolute;
            height: 3px;
            width: 30px;
            background: ${constants.colors.blue};
            opacity: 1;
            right: 0;
            transform: rotate(0deg);
            transition: 250ms ease-in-out;
            right: 20px;
          }

          .hamburger-menu span:nth-child(1) {
            top: 18px;
            width: 30px;
          }

          .hamburger-menu span:nth-child(2) {
            top: 29px;
            width: 30px;
            right: 20px;
          }

          .hamburger-menu span:nth-child(3) {
            top: 40px;
            width: 30px;
          }

          .menu-btn:checked + .hamburger-menu {
            position: fixed;
          }

          .menu-btn:checked + .hamburger-menu > span:nth-child(1) {
            width: 35px;
            top: 32px;
            transform: rotate(135deg);
          }

          .menu-btn:checked + .hamburger-menu > span:nth-child(2) {
            opacity: 0;
            right: 80px;
          }

          .menu-btn:checked + .hamburger-menu > span:nth-child(3) {
            width: 35px;
            top: 32px;
            transform: rotate(-135deg);
          }
        }
      `}</style>
    </>
  );
};

export default Header;