import { Breadcrumb, Button, ConfigProvider, Divider, Tabs } from "antd";

import classNames from "classnames/bind";
import React from "react";
import { Route, Routes, Outlet, useNavigate } from "react-router-dom";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "../../components/Comment/Comment";
import Kanban from "../../components/Kanban/Kanban";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import styles from "./StagesPage.module.scss";
import { Projectdetails } from "../../components/Projectdetails/Projectdetails";

const cx = classNames.bind(styles);

const StagesPage = () => {
  const navigate = useNavigate();
  const tabsItem = [
    {
      key: 1,
      label: <h3>Chuẩn bị</h3>,
      children: <Kanban />,
    },
    {
      key: 2,
      label: <h3>Đang thực hiện</h3>,
      children: <Kanban />,
    },
    {
      key: 3,
      label: <h3>Tạm đình chỉ</h3>,
      children: <Kanban />,
    },
    {
      key: 4,
      label: <h3>Hoàn thành</h3>,
      children: <Kanban />,
    },
  ];
  const namePath = window.location.pathname;
  return (
    <MasterLayout>
      <div className={cx("content")}>
        <div className={cx("breadcrum")}>
          <Breadcrumb
            className={cx("name")}
            items={[
              {
                title: (
                  <span
                    className={cx("hover")}
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    Trang chủ
                  </span>
                ),
              },
              {
                title: (
                  <span
                    className={cx("hover")}
                    onClick={() => {
                      navigate("/projectdetails");
                    }}
                  >
                    Dự án 1
                  </span>
                ),
              },
              namePath !== "/projectdetails"
                ? {
                    title: (
                      <span
                        className={cx("hover")}
                        onClick={() => {
                          navigate("/projectdetails/detailedstage");
                        }}
                      >
                        Chi tiết trạng thái
                      </span>
                    ),
                  }
                : " ",
            ]}
          />

          <ConfigProvider
            theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
          >
            <Button
              type="primary"
              icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
              className={cx("btn--on")}
            >
              Thêm trạng thái mới
            </Button>
          </ConfigProvider>
        </div>
        <Routes>
          <Route
            path="/detailedstage"
            element={
              <Tabs
                animated={false}
                items={tabsItem}
                className={cx("table")}
                tabBarStyle={{
                  backgroundColor: "#F1F1F3",
                  color: "#333",
                }}
                hideAdd
              />
            }
          />
          <Route path="/" element={<Projectdetails />} />
        </Routes>
      </div>

      <Routes>
        <Route path="/detailedstage" element={<Comment />} />
      </Routes>
    </MasterLayout>
  );
};

export default StagesPage;
