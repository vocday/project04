import React from "react";
import { Space, Table, Tag, Typography } from "antd";
const { Title } = Typography;
const columns = [
  {
    title: "Tên dự án",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
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
    render: (_, { tags }) => <>Đang thực hiện</>,
  },
];

export const ProjectList = ({ data }) => {
  return (
    <div>
      <Title style={{ marginTop: "5%" }}>
        <div
          style={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "500px",
          }}
        >
          CÁC DỰ ĐANG THAM GIA
        </div>
      </Title>
      <Table
        style={{ marginTop: "5%" }}
        pagination={{ pageSize: 10, defaultPageSize: 10 }}
        columns={columns}
        dataSource={data}
      />
    </div>
  );
};
