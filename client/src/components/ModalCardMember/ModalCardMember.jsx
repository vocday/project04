import React, { useState } from "react";
import { Button, Modal, Space, Table, Tag, Input, Avatar } from "antd";
import Icon, { PhoneOutlined } from "@ant-design/icons";
import styles from "./ModalCardMember.module.css";

export const ModalCardMember = ({
  isModalCardMemberOpen,
  showModalCardMember,
  handleOkCardMember,
  handleCancelCardMember,
}) => {
  return (
    <Modal
      className={styles.modalCardMemberContainer}
      open={isModalCardMemberOpen}
      onOk={handleOkCardMember}
      onCancel={handleCancelCardMember}
      footer={[]}
    >
      <Avatar
        className={styles.CardMemberAvatar}
        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/200px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg  "
      />
      <div className={styles.name}>Nguyễn Đức Long</div>
      <div className={styles.joiningDay}>Ngày vào dự án : 21/2/2022</div>
      <div className={styles.joiningDay}>Vai trò : Quản lý dự án</div>
      <div className={styles.joiningDay}>
        <PhoneOutlined /> 0988776543
      </div>
      <div className={styles.joiningDay}>quy3@gmail.com</div>
    </Modal>
  );
};
