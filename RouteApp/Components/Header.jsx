import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav className={styles.header}>
      <ul>
        <li>
          {/* esse "end" é necessário pq deve *terminar* com /, sem ele a barra ainda seria reconhecida no endereço "/contato" */}
          <NavLink
            className={(navData) =>
              `${styles.link} ${navData.isActive ? styles.activeLink : ""}`
            }
            to="/"
            end
          >
            Produtos
          </NavLink>
        </li>
      </ul>
      <ul>
        <li>
          <NavLink
            className={(navData) =>
              styles.link + " " + (navData.isActive ? styles.activeLink : "")
            }
            to="contato"
          >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
