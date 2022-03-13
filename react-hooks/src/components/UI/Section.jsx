import React from "react";
import styles from "./Section.module.css";

const Section = (props) => {
  const { children } = props;

  return <div className={styles.section}>{children}</div>;
};

export default Section;
