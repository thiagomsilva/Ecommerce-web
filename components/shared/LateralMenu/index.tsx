import React from "react";
import Logo from "../Logo";
import styles from "../../../styles/MenuLateral.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faUser,
  faGamepad,
  faCheckSquare,
  faLaptop,
  faTicketAlt,
  faDollarSign,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const LateralMenu: React.FC = () => {
  return (
    <div className={styles.background}>
      <Logo />

      <div className={styles.list}>
        <Link href="/Admin">
          <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Painel Inicial
            <hr />
        </Link>

        <Link href="/Admin/Users/List">
          <FontAwesomeIcon
              icon={faUser}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Usuários
            <hr />
        </Link>

        <Link href="/Admin/Products/List">
          <FontAwesomeIcon
              icon={faGamepad}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Produtos
            <hr />
        </Link>

        <Link href="/Admin/Categories/List">
            <FontAwesomeIcon
              icon={faCheckSquare}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Categorias
            <hr />
        </Link>

        <Link href="/Admin/SystemRequirements/List">
          <FontAwesomeIcon
              icon={faLaptop}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Requisitos do sistema
            <hr />
        </Link>

        <Link href="/Admin/Coupons/List">
          <FontAwesomeIcon
              icon={faTicketAlt}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Cupons
            <hr />
        </Link>

        <Link href="/Admin/#">
          <FontAwesomeIcon
              icon={faDollarSign}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Financeiro
            <hr />
        </Link>

        <Link href="/Admin/#">
          <FontAwesomeIcon
              icon={faSignOutAlt}
              color="var(--color-gray-light)"
              className={styles.icon}
            />
            Sair
            <hr />
        </Link>
      </div>
    </div>
  );
};

export default LateralMenu;
