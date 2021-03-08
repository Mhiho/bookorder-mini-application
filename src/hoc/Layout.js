import React from "react";
import { Link } from "react-router-dom";
import "../style/main.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const home = <FontAwesomeIcon icon={faHome} />
const basket = <FontAwesomeIcon icon={faShoppingBasket} />
const order = <FontAwesomeIcon icon={faStoreAlt} />

function Layout({ children }) {
  const {selectedBooks} = useSelector(state => state.selectedBooks);
  const menuLinks = [
    { name: home, link: "/", alternative: null },
    { name: basket, link: "/basket",alternative: `(${selectedBooks.length})` },
    { name: order, link: "/order", alternative: null },
  ];
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
                    {item.alternative}
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