import React from "react";
import { Row, Col } from "react-bootstrap";
import TitleAndPath from "./TitleAndPath";
import SearchAndIcon from "./SearchAndIcon";
import styles from "../../../styles/AdminTitle.module.css";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface TitleAdminPanelProps {
  title: String;
  path: String;
  icon?: IconProp;
  newPath?: string;
}

const TitleAdminPanel: React.FC<TitleAdminPanelProps> = ({
  title,
  path,
  icon,
  newPath = '#'
}) => {
  return (
    <Row className="mt-4">
      {icon ? (
        <>
          <Col lg={6} xs={4} className={styles.title_and_path}>
            <TitleAndPath title={title} path={path} />
          </Col>

          <Col lg={{ span: 4, offset: 2 }} xs={8}>
            <SearchAndIcon icon={icon} newPath={newPath} />
          </Col>
        </>
      ) : (
        <TitleAndPath title={title} path={path} />
      )}
    </Row>
  );
};

export default TitleAdminPanel;
