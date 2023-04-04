import { Avatar, Badge, Card, Progress, Space, Tooltip } from "antd";
import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const CardItem = (props) => {
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
				<Tooltip title="Màu sắc : đỏ - Độ ưu tiên : Cao nhất">
					<Progress
						percent={100}
						showInfo={false}
						strokeColor={"red"}
						className={cx("icon--title")}
					/>
				</Tooltip>
			</Space>
			<Tooltip title="Chi tiết công việc">
				<FontAwesomeIcon icon={faPen} className={cx("icon--opts")} />
			</Tooltip>

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
