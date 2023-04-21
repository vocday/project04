import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  Divider,
  Image,
  Input,
  Layout,
  Popover,
  Space,
  Tooltip,
} from "antd";

import classNames from "classnames/bind";

import notifications1 from "../../assets/image/notifications1.png";
import question from "../../assets/image/question.png";
import styles from "./Header.module.scss";
import { useState } from "react";

const cx = classNames.bind(styles);

const HeaderLayout = () => {
  const { Header } = Layout;
  const content = (
    <div className={cx("notification")}>
      <h3>Thông báo</h3>
      <Divider />
      <Space className={cx("space")}>
        <Avatar>D</Avatar>
        <p>Dat đã đánh giá bài viết</p>
      </Space>
      <Space className={cx("space")}>
        <Avatar>D</Avatar>
        <p>Dat đã đánh giá bài viết</p>
      </Space>
    </div>
  );

  return (
    <Header className={cx("wrapper")}>
      <Input
        placeholder="Tìm kiếm"
        prefix={
          <Tooltip title="Tìm kiếm">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={cx("icon--search")}
            />
          </Tooltip>
        }
        className={cx("input")}
      />

      <Space size={15} className={cx("action")} align="center">
        <ConfigProvider
          theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
        >
          <Button
            type="primary"
            icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
            className={cx("btn--on")}
          >
            Tạo mới dự án
          </Button>
        </ConfigProvider>

        <Tooltip title="Câu hỏi thường gặp">
          <Image
            preview={false}
            width={"26px"}
            height={"26px"}
            src={question}
            alt="image"
            className={cx("icon")}
          />
        </Tooltip>
        <Popover content={content}>
          <Badge count={2}>
            <Image
              preview={false}
              width={"26px"}
              height={"26px"}
              src={notifications1}
              alt="image"
              className={cx("icon")}
            />
          </Badge>
        </Popover>

        <Avatar>Đ</Avatar>
      </Space>
    </Header>
  );
};

export default HeaderLayout;
