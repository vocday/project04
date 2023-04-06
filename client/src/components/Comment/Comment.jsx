import React from "react";
import classNames from "classnames/bind";
import { Avatar, Button, Input, Space, Divider } from "antd";

import styles from "./Comment.module.scss";

const cx = classNames.bind(styles);

const Comment = () => {
  return (
    <>
      <Divider />
      <div className={cx("comment")}>
        <h4>Đánh giá : </h4>
        <div className={cx("comment--display")}>
          <Space size={10}>
            <Avatar>Đ</Avatar>
            <p>Chúng tôi đang combat rồi !</p>
          </Space>

          <Space size={10}>
            <Avatar>B</Avatar>
            <p>Chúng tôi đang combat rồi !</p>
          </Space>
        </div>

        <div className={cx("comment--action")}>
          <Space>
            <Avatar>Đ</Avatar>
            <Input style={{ width: 700 }} />
            <Button type="primary"> Đánh giá</Button>
          </Space>
        </div>
      </div>
    </>
  );
};

export default Comment;
