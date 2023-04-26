import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Space, Table, Tag, Typography } from "antd";
import styles from "./ProjectList.module.css";
import { DataProcessing } from "../../context/dataProcessingcontext/dataProcessingcontext";

export const ProjectList = ({ data, dataProcessing }) => {
  const Datacontext = useContext(DataProcessing);
  const navigate = useNavigate();
  const { Title } = Typography;
  const columnsProcessing = [
    {
      title: "Tên dự án",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a
          onClick={() => {
            navigate("/projectdetails");
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "startday",
      key: "startday",
      // render: (text) => <p>20/3/2023</p>,
    },
    {
      title: "Hạn hoàn thành",
      dataIndex: "endday",
      key: "endday",
      // render: (text) => <p>25/5/2023</p>,
    },
    {
      title: "Trạng thái",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          <Tag color="green">Đang thực hiện</Tag>
        </>
      ),
    },
  ];

  const columnsDone = [
    {
      title: "Tên dự án",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a
          onClick={() => {
            navigate("/projectdetails");
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "start",
      key: "start",
      render: (text) => <p>20/3/2023</p>,
    },
    {
      title: "Hạn hoàn thành",
      dataIndex: "end",
      key: "end",
      render: (text) => <p>25/5/2023</p>,
    },
    {
      title: "Trạng thái",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          <Tag color="blue">Đã hoàn thành</Tag>
        </>
      ),
    },
  ];
  const columnsCancel = [
    {
      title: "Tên dự án",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a
          onClick={() => {
            navigate("/projectdetails");
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Ngày bắt đầu",
      dataIndex: "start",
      key: "start",
      render: (text) => <p>20/3/2023</p>,
    },
    {
      title: "Hạn hoàn thành",
      dataIndex: "end",
      key: "end",
      render: (text) => <p>25/5/2023</p>,
    },
    {
      title: "Trạng thái",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          <Tag color="red">Đã hủy</Tag>
        </>
      ),
    },
  ];

  return (
    <div>
      <Title style={{ marginTop: "3%", marginBottom: "3%" }}>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "700px",
            paddingLeft: "20px",
          }}
        >
          Danh sách dự án
        </div>
      </Title>

      <Title level={3} className={styles.titleLabel}>
        Đang thực hiện
      </Title>
      <Table
        className="tableList"
        style={{ padding: "0 20px" }}
        pagination={{ pageSize: 5, defaultPageSize: 10 }}
        columns={columnsProcessing}
        dataSource={Datacontext.dataProcessing}
      />

      <Title level={3} className={styles.titleLabel}>
        Đã hoàn thành
      </Title>
      <Table
        className="tableList"
        style={{ padding: "0 20px" }}
        pagination={{ pageSize: 5, defaultPageSize: 10 }}
        columns={columnsDone}
        dataSource={data}
      />

      <Title level={3} className={styles.titleLabel}>
        Đã hủy
      </Title>
      <Table
        className="tableList"
        style={{ padding: "0 20px" }}
        pagination={{ pageSize: 5, defaultPageSize: 10 }}
        columns={columnsCancel}
        dataSource={data}
      />
    </div>
  );
};
