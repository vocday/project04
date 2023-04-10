import { AlignLeftOutlined } from "@ant-design/icons";
import { Avatar, Card, Modal, Progress, Rate, Space, Tooltip } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import ModalItem from "../ModalItem/ModalItem";
import styles from "./CardItem.module.scss";

const cx = classNames.bind(styles);

const CardItem = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Card className={cx("card")}>
			<Space size={0}>
				<Tooltip title="Màu sắc : xanh lá cây - Loại : Nhiệm vụ">
					<Progress
						percent={100}
						showInfo={false}
						strokeColor={"green"}
						className={cx("icon--title")}
					/>
				</Tooltip>
				<Rate count={5} className={cx("icon--rate")} />
			</Space>
			<Tooltip title="Chi tiết công việc">
				<AlignLeftOutlined className={cx("icon--opts")} onClick={showModal} />
			</Tooltip>

			<Modal open={isModalOpen} onCancel={handleCancel} footer={[]} centered>
				<ModalItem />
			</Modal>

			<p>Chuẩn bị hàng nhập kho số liệu cần thiết</p>
			<Avatar.Group maxCount={2} size="small" className={cx("team")}>
				<Avatar>ADMIN</Avatar>
				<Avatar>USER</Avatar>
				<Avatar>USER</Avatar>
			</Avatar.Group>
		</Card>
	);
};

export default CardItem;
