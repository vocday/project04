import React, { useState } from "react";
import {
  CheckCircleOutlined,
  FontSizeOutlined,
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
  SmileOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Timeline, Typography, Steps, Button } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Projectdetails.module.css";
export const Projectdetails = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const { Paragraph } = Typography;
  const [nameProjectvalue, setNameProjectvalue] = useState("F81298312039");
  const [startDayvalue, setStartDayvalue] = useState("21/5/2021");
  const [endDayvalue, setEndDayvalue] = useState("28/5/2023");
  const [descProjectvalue, setDescProjectvalue] = useState(
    "Ứng dụng web quản lý công việc dự án được tạo ra nhằm giúp cho đội dự án phần mềm có thể dễ dàng và thuận tiên trong việc quản lý, phân công công việc và giao tiếp giữa các thành viên trong đội dự án."
  );
  const [statusProjectvalue, setStatusProjectvalue] =
    useState("Đang thực hiện");
  const onChangeSteps = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };
  const description = "This is a description.";
  return (
    <>
      <Timeline
        className={styles.timelineComponent}
        items={[
          {
            dot: <FontSizeOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Mã dự án :{" "}
                <Paragraph
                  className={styles.descProject}
                  editable={{
                    onChange: setNameProjectvalue,
                  }}
                >
                  {nameProjectvalue}
                </Paragraph>
              </div>
            ),
          },
          {
            dot: <CalendarOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Ngày bắt đầu :{" "}
                <Paragraph
                  className={styles.descProject}
                  editable={{
                    onChange: setStartDayvalue,
                  }}
                >
                  {startDayvalue}
                </Paragraph>
              </div>
            ),
          },
          {
            dot: <CalendarOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Ngày kết thúc :
                <Paragraph
                  className={styles.descProject}
                  editable={{
                    onChange: setEndDayvalue,
                  }}
                >
                  {endDayvalue}
                </Paragraph>
              </div>
            ),
          },
          {
            dot: <FileTextOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Mô tả dự án :
                <Paragraph
                  className={styles.descProject}
                  editable={{
                    onChange: setDescProjectvalue,
                  }}
                >
                  {descProjectvalue}
                </Paragraph>
              </div>
            ),
          },
          {
            dot: <CheckCircleOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Trạng thái :
                <Steps
                  className={styles.stepsComponent}
                  current={current}
                  onChange={onChangeSteps}
                  items={[
                    {
                      title: "Chuẩn bị",
                      description,
                    },
                    {
                      title: "Đang thực hiện",
                      description,
                    },
                    {
                      title: "Tạm Đình Chỉ",
                      description,
                    },
                    {
                      title: "Hoàn Thành",
                      description,
                    },
                  ]}
                />
              </div>
            ),
          },
          {
            dot: <TeamOutlined className={styles.iconTimeline} />,
            color: "black",
            children: (
              <div className={styles.nameProject}>
                Thành viên :
                <div className={styles.descProject}>
                  <SmileOutlined />
                  <SmileOutlined />
                  <SmileOutlined />
                  <SmileOutlined />
                  <EditOutlined
                    style={{
                      marginLeft: "40px",
                      fontWeight: "bold",
                      color: "#1677ff",
                    }}
                  />
                </div>
              </div>
            ),
          },
        ]}
      />
      <Button
        className={styles.buttonGoStages}
        onClick={() => {
          navigate("/projectdetails/detailedstage");
        }}
      >{`-> Xem chi tiết trạng thái dự án`}</Button>
    </>
  );
};
