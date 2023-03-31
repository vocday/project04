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
const data = [
  {
    key: "1",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "4",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "5",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "6",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "7",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "8",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "9",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "10",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "11",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "12",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "13",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "14",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "15",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "16",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "17",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "18",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
  {
    key: "19",
    name: "Làm web quản lý dự án",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "20",
    name: "Làm tiktok",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "21",
    name: "Làm shopee",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];
export const ProjectList = () => {
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
