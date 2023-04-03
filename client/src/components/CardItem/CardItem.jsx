import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "antd";
import classNames from "classnames/bind";
import styles from "./CardItem.module.scss";

const cx = classNames.bind(styles);

const CardItem = (props) => {
	return (
		<Card className={cx("card")}>
			<FontAwesomeIcon icon={faEllipsisVertical} className={cx("icon--opts")} />
			<h4>Chuẩn bị hàng</h4>
			<h4>
				Loại : <span>Nhiệm vụ</span>{" "}
			</h4>
			<h4>
				Độ ưu tiên : <span>Cao nhất</span>
			</h4>
			<h4>Ngày bắt đầu : 26/06/1997 </h4>
			<h4>Ngày kết thúc : 26/06/2025</h4>
			<h4>
				Người thực hiện : <span>datdev</span>
			</h4>
		</Card>
	);
};

export default CardItem;
