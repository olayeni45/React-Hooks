import React, { useMemo } from "react";

import styles from "./DemoList.module.css";

const DemoList = (props) => {
  const { title, items } = props;

  //const sortedList = items.sort((a, b) => a - b);

  const sortedList = useMemo(() => {
    console.log("Items sorted");
    return items.sort((a, b) => a - b);
  }, [items]);

  console.log("DemoList RUNNING");

  return (
    <div className={styles.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(DemoList);
