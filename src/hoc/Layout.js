import React from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';

const home = <FontAwesomeIcon icon={faHome} />
const basket = <FontAwesomeIcon icon={faShoppingBasket} />
const order = <FontAwesomeIcon icon={faStoreAlt} />
const menuLinks = [
  { name: home, link: "/" },
  { name: basket, link: "/basket" },
  { name: order, link: "/order" },
];

function Layout({ children }) {

  return (
    <>
      <header>
        <nav className={`nav`}>
          <div
            className={`layout-logo`}
          >
         
          </div>
          <ul className="layout-ul">
            {menuLinks.map((item, index) => {
              return (
                <li key={`menuLink-${index}`}>
                  <Link
                    className={`layout-a`}
                    to={item.link}
                  >
                    {item.name}
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