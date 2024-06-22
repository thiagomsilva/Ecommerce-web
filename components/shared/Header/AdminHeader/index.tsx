import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "../../../../styles/AdminHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignal,
  faUser,
  faGamepad,
  faCheckSquare,
  faLaptop,
  faTicketAlt,
  faDollarSign,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

interface AdminHeaderProps {
  name: string;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  return (
    <Row className={styles.background}>
      <Col lg={6} xs>
        <Link href="/Admin">
          <FontAwesomeIcon
              icon={faSignal}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="/Admin/Users/List">
          <FontAwesomeIcon
              icon={faUser}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="/Admin/Products/List">
          <FontAwesomeIcon
              icon={faGamepad}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="/Admin/Categories/List">
            <FontAwesomeIcon
              icon={faCheckSquare}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="/Admin/SystemRequirements/List">
          <FontAwesomeIcon
              icon={faLaptop}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="/Admin/Coupons/List">
          <FontAwesomeIcon
              icon={faTicketAlt}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
        <Link href="#">
          <FontAwesomeIcon
              icon={faDollarSign}
              color="var(--color-gray-light)"
              className="ml-3"
            />
        </Link>
      </Col>

      <Col lg={6} xs>
        <div className="float-right">
          <span className={styles.name}>
            {name}
          </span>
          <FontAwesomeIcon
            icon={faUserCircle}
            color="var(--color-gray-light)"
          />
        </div>
      </Col>
    </Row>
  );
};

export default AdminHeader;
