import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React from "react";

import styles from "./TabItem.module.scss";

const cx = classNames.bind(styles);

const TabItem = () => {
	return (
		<div className={cx("wrap")}>
			<div className={cx("desc")}>
				<h5 className={cx("title")}>Tên giai đoạn : Dự án 1 </h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày bắt đầu : 20/05/2023
				</h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày kết thúc dự kiến :
					26/06/2024
				</h5>
				<h5>
					<FontAwesomeIcon icon={faCalendar} /> Ngày kết thúc thực tế :
					15/06/2019
				</h5>
			</div>
			<h5 className={cx("title--sub")}>Các công việc </h5>
			<div className={cx("table")}>
				<div>
					<h5 className={cx("one")}>Đang chuẩn bị</h5>
					<div className={cx("task")}>
						<div className={cx("task--item")}>
							<div className={cx("open")}>
								{" "}
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</div>
							<p>Tên CV : Chuẩn bị dụng cụ</p>
							<p>
								Loại : <span>Nhiệm vụ</span>{" "}
							</p>
							<p>
								Độ ưu tiên : <span>Cao nhất</span>{" "}
							</p>
							<p>Ngày bắt đầu: 26/06/2023</p>
							<p>Ngày kết thúc :26/06/2026 </p>
							<p>
								Người thực hiện : <span>David</span> <span>Adam</span>{" "}
							</p>
						</div>
					</div>
				</div>
				<div>
					<h5 className={cx("one")}>Đang thực hiện</h5>
					<div className={cx("task")}>
						<div className={cx("task--item")}>
							<div className={cx("open")}>
								{" "}
								<FontAwesomeIcon icon={faEllipsisVertical} />
							</div>
							<p>Tên CV : Chuẩn bị dụng cụ</p>
							<p>
								Loại : <span>Nhiệm vụ</span>{" "}
							</p>
							<p>
								Độ ưu tiên : <span>Cao nhất</span>{" "}
							</p>
							<p>Ngày bắt đầu: 26/06/2023</p>
							<p>Ngày kết thúc :26/06/2026 </p>
							<p>
								Người thực hiện : <span>David</span> <span>Adam</span>{" "}
							</p>
						</div>
					</div>
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
