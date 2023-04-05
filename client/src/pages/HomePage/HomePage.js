import React from "react";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import { ProjectList } from "../../components/ProjectList/ProjectList";
import { Emptydata } from "../../components/Empty/Emptydata";

export const HomePage = () => {
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

  return (
    <MasterLayout>
      {data.length > 0 ? <ProjectList data={data} /> : <Emptydata />}
    </MasterLayout>
  );
};
