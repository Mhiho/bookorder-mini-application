import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";
import hat from "../assets/img/hat.png";

const menuLinks = [
  { name: "Strona główna", link: "/" },
  { name: "Koszyk", link: "/basket" },
  { name: "Zamawiam", link: "/order" },
];

function Layout({ children }) {

  return (
    <>
      <header>
        <nav className={`nav`}>
          <div
            className={`layout-logo`}
          >
            <img src={hat} alt="kapelusz" />
          </div>
          <ul className="layout-ul">
            {menuLinks.map((item, index) => {
              return (
                <li key={`menuLink-${index}`}>
                  <Link
                    className={`layout-a`}
                    to={item.link}
                  >
                    {item.name.toUpperCase()}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <main>
        <div className="layout-container">{children}</div>
      </main>
      <footer className=''>
        <span className="layout-footer-span">
          Autor aplikacji:{" "}
          <a
            className={`layout-footer-a`}
            href="https://github.com/mhiho"
          >
            <strong>&nbsp;Michał Pełka&nbsp;</strong>
          </a>
          &#169;{new Date().getFullYear()}
        </span>
      </footer>
    </>
  );
}
export default Layout;