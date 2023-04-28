import {
	AlignLeftOutlined,
	PushpinFilled,
	WechatFilled,
} from "@ant-design/icons";
import { Avatar, Card, Modal, Progress, Rate, Space, Tooltip } from "antd";
import classNames from "classnames/bind";
import { useState } from "react";
import ModalItem from "../ModalItem/ModalItem";
import styles from "./CardItem.module.scss";

const cx = classNames.bind(styles);

const CardItem = (props) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isTitle, setIsTitle] = useState(Math.floor(Math.random() * 2));
	console.log(isTitle);
	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	return (
		<Card className={cx("card")}>
			<Space size={0}>
				<Tooltip
					title={
						isTitle == 1
							? "Màu sắc : xanh lá cây - Loại : Nhiệm vụ"
							: "Màu sắc : đỏ - Loại : Vấn đề"
					}
				>
					<Progress
						percent={100}
						showInfo={false}
						strokeColor={isTitle == 1 ? "green" : "red"}
						className={cx("icon--title")}
					/>
				</Tooltip>
				<Rate count={5} className={cx("icon--rate")} />
			</Space>
			<Space className={cx("icon--opts")}>
				<Tooltip title="Chi tiết công việc">
					<AlignLeftOutlined onClick={showModal} />
				</Tooltip>
				<Tooltip title="Ghim">
					<PushpinFilled />
				</Tooltip>
				<Tooltip title="Bình luận">
					<WechatFilled />
				</Tooltip>
			</Space>

			<Modal open={isModalOpen} onCancel={handleCancel} footer={[]} centered>
				<ModalItem />
			</Modal>

			<p>Chuẩn bị hàng nhập kho số liệu cần thiết</p>
			<Avatar.Group maxCount={2} size="small" className={cx("team")}>
				<Avatar>D</Avatar>
				<Avatar>USER</Avatar>
				<Avatar>USER</Avatar>
			</Avatar.Group>
		</Card>
	);
};

export default CardItem;
