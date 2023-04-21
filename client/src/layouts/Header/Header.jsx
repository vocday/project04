import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Avatar,
  Badge,
  Button,
  ConfigProvider,
  Image,
  Input,
  Layout,
  Space,
  Tooltip,
} from "antd";

import classNames from "classnames/bind";

import notifications1 from "../../assets/image/notifications1.png";
import question from "../../assets/image/question.png";
import styles from "./Header.module.scss";

const cx = classNames.bind(styles);

const HeaderLayout = () => {
  const { Header } = Layout;
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
        // style={{ width: "300px" }}
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
            Tạo dự án mới
          </Button>
          <Tooltip title="Thêm công việc mới">
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
              className={cx("btn--off")}
            ></Button>
          </Tooltip>
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
        <Badge count={5}>
          <Tooltip title="Thông báo">
            <Image
              preview={false}
              width={"26px"}
              height={"26px"}
              src={notifications1}
              alt="image"
              className={cx("icon")}
            />
          </Tooltip>
        </Badge>

        <Avatar>Đ</Avatar>
      </Space>
    </Header>
  );
};

export default HeaderLayout;
