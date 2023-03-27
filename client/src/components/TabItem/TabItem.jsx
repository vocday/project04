import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";

import styles from "./TabItem.module.scss";

const cx = classNames.bind(styles);

const TabItem = () => {
	return (
		<div className={cx("wrap")}>
			<div className={cx("desc")}>
				<h4 className={cx("title")}>Thông tin chung : </h4>
				<h5 className={cx("title")}>Tên giai đoạn : </h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày bắt đầu :{" "}
				</h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày kết thúc dự kiến :{" "}
				</h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày kết thúc thực tế :{" "}
				</h5>
				<h5 className={cx("title")}>Các công việc : </h5>
			</div>
			<div className={cx("table")}>
				<div>
					<h5 className={cx("one")}>Đang chuẩn bị</h5>
					<div className={cx("task")}></div>
				</div>
				<div>
					<h5 className={cx("one")}>Đang thực hiện</h5>
					<div className={cx("task")}></div>
				</div>
				<div>
					<h5 className={cx("one")}>Đang chờ đánh giá</h5>
					<div className={cx("task")}></div>
				</div>
				<div>
					<h5 className={cx("one")}>Hoàn thành</h5>
					<div className={cx("task")}></div>
				</div>
				<div>
					<h5 className={cx("two")}>Hủy bỏ</h5>
					<div className={cx("task")}></div>
				</div>
			</div>
		</div>
	);
};

export default TabItem;
