import {
	faBookmark,
	faCalendar,
	faFolder,
	faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Divider, Rate, Space } from "antd";
import classNames from "classnames/bind";
import React from "react";

import { EditTwoTone } from "@ant-design/icons";
import styles from "./ModalItem.module.scss";

const cx = classNames.bind(styles);

const ModalItem = () => {
	const renderList = [
		{
			label: (
				<p>
					Mã công việc : <span>226556566566565</span>{" "}
				</p>
			),
		},
		{
			label: (
				<Space>
					<h3>Tên công việc</h3>
					<EditTwoTone className={cx("icon1")} />
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faChartLine} className={cx("icon1")} />
					<Space>
						<p>Độ ưu tiên :</p>
						<Rate />
					</Space>
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faBookmark} className={cx("icon1")} />
					<p>
						Loại công việc : <span>Nhiệm vụ</span>
					</p>
				</Space>
			),
		},

		{
			label: (
				<Space size={15}>
					<FontAwesomeIcon icon={faUser} className={cx("icon1")} />
					<p>
						Thành viên :{" "}
						<Avatar.Group maxCount={2} size="small" className={cx("icon")}>
							<Avatar>D</Avatar>
							<Avatar>D</Avatar>
							<Avatar>D</Avatar>
							<Avatar>D</Avatar>
						</Avatar.Group>
					</p>
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faFolder} className={cx("icon1")} />
					<p>
						Trạng thái : <span>Đang thực hiện</span>
					</p>
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faCalendar} className={cx("icon1")} />
					<p>
						Ngày bắt đầu : <span>26/06/2001</span>
					</p>
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faCalendar} className={cx("icon1")} />
					<p>
						Ngày kết thúc dự kiến : <span>26/06/2020</span>
					</p>
				</Space>
			),
		},
		{
			label: (
				<Space>
					<FontAwesomeIcon icon={faCalendar} className={cx("icon1")} />
					<p>
						Ngày kết thúc thực tế : <span>26/06/2023</span>
					</p>
				</Space>
			),
		},
	];

	return (
		<>
			<div className={cx("information")}>
				{renderList.map((item) => {
					return <>{item.label}</>;
				})}
			</div>

			<Divider />
			<div className={cx("desc")}>
				<h3>Mô tả</h3>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
					animi minus ipsam velit quibusdam id explicabo, labore magni, quidem
					voluptas error veniam molestiae necessitatibus, debitis sint maiores
					nostrum ipsum vel?
				</p>
			</div>
		</>
	);
};

export default ModalItem;
