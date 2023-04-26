import React, { useState, useEffect } from "react";
import { Button, Modal, Space, Table, Tag, Input } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { ModalCardMember } from "../ModalCardMember/ModalCardMember";
export const ModalMemberList = ({
  isModalOpen,
  showModal,
  handleOk,
  handleCancel,
}) => {
  const [isModalCardMemberOpen, setIsModalCardMemberOpen] = useState(false);
  const showModalCardMember = () => {
    setIsModalCardMemberOpen(true);
  };
  const handleOkCardMember = () => {
    setIsModalCardMemberOpen(false);
  };
  const handleCancelCardMember = () => {
    setIsModalCardMemberOpen(false);
  };
  const [data, setData] = useState();
  const [nameMember, setNameMember] = useState();
  const [email, setEmail] = useState();
  const [dayofparticipation, setDayofparticipation] = useState();

  useEffect(() => {
    setNameMember("");
    setEmail("");
    setDayofparticipation("");
    setData([
      {
        key: "1",
        name: "John Brown",
        email: "quy1@gmail.com",
        dayofparticipation: "1/1/2022",
      },
      {
        key: "2",
        name: "Jim Green",
        email: "quy2@gmail.com",
        dayofparticipation: "2/3/2023",
      },
      {
        key: "3",
        name: "Joe Black",
        email: "quy3@gmail.com",
        dayofparticipation: "5/4/2022",
      },
    ]);
  }, []);
  function setValueCardMember(name) {
    const user = data.filter((item) => item.name === name);
    setNameMember(user[0].name);
    setEmail(user[0].email);
    setDayofparticipation(user[0].dayofparticipation);
  }

  const columns = [
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
      render: (text) => (
        <a
          onClick={() => {
            showModalCardMember();
            setValueCardMember(text);
          }}
        >
          {text}
        </a>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: <div style={{ whiteSpace: "nowrap" }}>Ngày tham gia dự án</div>,
      dataIndex: "dayofparticipation",
      key: "dayofparticipation",
    },

    {
      title: "",
      key: "key",
      render: (text) => (
        <a
          onClick={() => {
            setData(data.filter((item) => item.key != text.key));
            // console.log(text);
          }}
        >
          <DeleteOutlined />
        </a>
      ),
    },
  ];

  return (
    <div>
      <>
        <Modal
          footer={[
            <Input placeholder="Nhập email thành viên bạn cần tìm" />,
            <Button key="ok" type="primary">
              Thêm thành viên
            </Button>,
          ]}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Table columns={columns} dataSource={data} />
          <ModalCardMember
            dayofparticipation={dayofparticipation}
            name={nameMember}
            email={email}
            isModalCardMemberOpen={isModalCardMemberOpen}
            handleOkCardMember={handleOkCardMember}
            handleCancelCardMember={handleCancelCardMember}
          />
        </Modal>
      </>
    </div>
  );
};
