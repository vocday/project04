import React, { useState } from "react";
import {
  CheckCircleOutlined,
  FontSizeOutlined,
  CalendarOutlined,
  FileTextOutlined,
  TeamOutlined,
  SmileOutlined,
  EditOutlined,
  AntDesignOutlined,
  UserOutlined,
  ArrowRightOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import {
  Timeline,
  Typography,
  Input,
  Steps,
  Button,
  Divider,
  Tooltip,
  Avatar,
  message,
  Popconfirm,
} from "antd";
import { useNavigate } from "react-router-dom";
import { ModalMemberList } from "../ModalMemberList/ModalMemberList";
import styles from "./Projectdetails.module.css";
export const Projectdetails = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const { Paragraph } = Typography;
  const [member, setMember] = useState([
    {
      name: "Q",
    },
    {
      name: "W",
    },
    {
      name: "E",
    },
    {
      name: "R",
    },
  ]);
  const [idProjectvalue, setIdProjectvalue] = useState("F81298312039");
  const [nameProjectvalue, setNameProjectvalue] = useState("Dự án 1");
  const [startDayvalue, setStartDayvalue] = useState("21/5/2021");
  const [endDayvalue, setEndDayvalue] = useState("28/5/2023");
  const [descProjectvalue, setDescProjectvalue] = useState(
    "Ứng dụng web quản lý công việc dự án được tạo ra nhằm giúp cho đội dự án phần mềm có thể dễ dàng và thuận tiên trong việc quản lý, phân công công việc và giao tiếp giữa các thành viên trong đội dự án."
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onChangeSteps = (value) => {
    console.log("onChange:", value);
    setCurrent(value);
  };

  const [editableStr, setEditableStr] = useState(idProjectvalue);

  const confirm = (e) => {
    console.log(e);
    message.success("Đã kết thúc dự án");
    setTimeout(() => navigate("/"), 1500);
  };
  const cancel = (e) => {
    console.log(e);
    // message.error("Click on No");
  };

  return (
    <>
      <div className={styles.projectdetailContainer}>
        <div className={styles.projectdetailInfoContainer}>
          <div className={styles.projectdetailGeneralInfo}>
            <h3 className={styles.projectdetailTitle}>Thông tin chung</h3>
            <div className={styles.projectdetailLabel}>
              <b>Mã dự án: </b>
              <div>{`ㅤ${idProjectvalue}`}</div>
            </div>
            <Divider />
            <div className={styles.projectdetailLabel}>
              <b>Tên dự án: </b>
              <Typography.Title
                editable={{ onChange: setNameProjectvalue }}
                level={4}
                className={styles.projectdetailMargin}
              >
                {`${nameProjectvalue}`}
              </Typography.Title>
            </div>
            <Divider />

            {/* quản lý dự án-st */}

            <div className={styles.projectdetailLabel}>
              <b>Chủ dự án: </b>
              <div style={{ marginLeft: "20px", lineHeight: "35px" }}>
                <Avatar
                  src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                  size={30}
                  style={{ backgroundColor: "#87d068" }}
                ></Avatar>
                <span className={styles.projectdetailName}>
                  Nguyễn Tiến Đạt
                </span>
              </div>
            </div>
            <Divider />
            <div className={styles.projectdetailLabel}>
              <b>Quản lý dự án: </b>
              <div style={{ marginLeft: "20px", lineHeight: "35px" }}>
                <Avatar
                  src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3"
                  size={30}
                  style={{ backgroundColor: "blue" }}
                ></Avatar>
                <span className={styles.projectdetailName}>
                  Nguyễn Tiến Quý
                </span>
              </div>
            </div>
            <Divider />
            {/* quản lý dự án-end */}
            <div className={styles.projectdetailLabel}>
              <b>Mô tả dự án: </b>
              <Typography.Title
                editable={{
                  onChange: setDescProjectvalue,
                  // autoSize: { maxRows: 24, minRows: 3 },
                  // maxLength: 250,
                }}
                level={4}
                className={styles.projectdetailMargin}
              >
                {`${descProjectvalue}`}
              </Typography.Title>
            </div>

            <Divider />
          </div>
          <div className={styles.projectdetailGeneralInfo}>
            <h3 className={styles.projectdetailTitle}>Thông tin thực hiện</h3>
            <div className={styles.projectdetailLabel}>
              <b>Ngày bắt đầu: </b>
              <div>{`ㅤㅤ${startDayvalue}`}</div>
            </div>
            <Divider />
            <div className={styles.projectdetailLabel}>
              <b>Ngày kết thúc dự kiến: </b>
              <Typography.Title
                editable={{ onChange: setEndDayvalue }}
                level={4}
                className={styles.projectdetailMargin}
              >
                {`${endDayvalue}`}
              </Typography.Title>
            </div>
            <Divider />
            <div className={styles.projectdetailLabel}>
              <b>Danh sách thành viên: ㅤㅤ</b>
              {/* <div> */}
              {member.map((item, index) => {
                if (member.length > 2 && index < 2) {
                  return (
                    <>
                      <Avatar
                        style={{
                          backgroundColor: "#f56a00",
                          marginTop: "10px",
                        }}
                      >
                        {item.name}
                      </Avatar>
                    </>
                  );
                }
              })}

              {/* <span>ㅤ</span> */}
              {member.length > 2 ? (
                <div className={styles.showMember} onClick={() => showModal()}>
                  ...
                </div>
              ) : (
                ""
              )}

              {/* <Avatar
                  className={styles.showMemberList}
                  onClick={() => showModal()}
                >
                  <UnorderedListOutlined />
                </Avatar> */}
              <ModalMemberList
                isModalOpen={isModalOpen}
                showModal={showModal}
                handleOk={handleOk}
                handleCancel={handleCancel}
              />
              {/* </div> */}
            </div>
            <Divider />
          </div>
        </div>
        <div className={styles.projectdetailStepContainer}>
          <Steps
            className={styles.projectdetailSteps}
            current={current}
            onChange={onChangeSteps}
            direction="vertical"
            items={[
              {
                title: "Chuẩn bị",
                description:
                  "Dự án đang trong giai đoạn chuẩn bị, chưa được bắt đầu",
              },
              {
                title: "Đang thực hiện",
                description: "Dự án đang trong giai đoạn phát triển",
              },
              {
                title: "Tạm Đình Chỉ",
                description: "Dự án đã tạm đình chỉ",
              },
              {
                title: "Hoàn Thành",
                description: "Dự án đã hoàn thành",
              },
            ]}
          />
          <Button
            type="primary"
            className={styles.buttonGoStages}
            onClick={() => {
              navigate("/projectdetails/detailedstage");
            }}
          >
            {" "}
            {`Chi tiết giai đoạn`}
          </Button>

          <Popconfirm
            title="Kết thúc dự án"
            description="Bạn có muốn kết thúc dự án không?"
            onConfirm={confirm}
            onCancel={cancel}
            okText="Kết Thúc"
            cancelText="Hủy"
          >
            <Button
              className={styles.buttonFinishProject}
              // onClick={() => {
              //   navigate("/projectdetails/detailedstage");
              // }}
            >
              {" "}
              {`Kết thúc dự án`}
            </Button>
          </Popconfirm>
        </div>
      </div>
    </>
  );
};
