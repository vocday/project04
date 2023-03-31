import React from "react";
import { Empty } from "antd";
import styles from "./Emptydata.module.css";

export const Emptydata = () => {
  return (
    <Empty description={false} className={styles.emptydataCtn}>
      <p>Bạn chưa tham gia dự án nào</p>
    </Empty>
  );
};
