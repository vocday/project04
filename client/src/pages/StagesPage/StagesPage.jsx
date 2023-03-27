import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	Avatar,
	Badge,
	Breadcrumb,
	Button,
	ConfigProvider,
	Input,
	Space,
	Tabs,
} from "antd";

import classNames from "classnames/bind";
import React from "react";

import SiderLayout from "../../components/Sider/Sider";
import question from "../../resources/image/question.png";
import notification1 from "../../resources/image/notifications1.png";

import styles from "./StagesPage.module.scss";
import TabItem from "../../components/TabItem/TabItem";

const cx = classNames.bind(styles);

const StagesPage = () => {
	const tabsItem = [
		{
			key: 1,
			label: <h3>Chuẩn bị</h3>,
			children: <TabItem />,
		},
		{
			key: 2,
			label: <h3>Đang thực hiện</h3>,
			children: <TabItem />,
		},
		{
			key: 3,
			label: <h3>Tạm đình chỉ</h3>,
			children: <TabItem />,
		},
		{
			key: 4,
			label: <h3>Hoàn thành</h3>,
			children: <TabItem />,
		},
	];

	return (
		<div className={cx("wrap")}>
			<SiderLayout />
			<div className={cx("content")}>
				<div className={cx("header")}>
					<div>
						<Input
							placeholder="Tìm kiếm"
							prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
							id={cx("input")}
							style={{ backgroundColor: "#f3f4f6" }}
						/>
					</div>
					<Space size={10}>
						<ConfigProvider
							theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
						>
							<Button
								type="primary"
								icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
								className={cx("btn-add")}
							>
								Tạo công việc mới
							</Button>
						</ConfigProvider>

						<img src={question} alt="image" className={cx("icon")} />
						<Badge count={5}>
							<img src={notification1} alt="image" className={cx("icon")} />
						</Badge>

						<Avatar>Đ</Avatar>
					</Space>
				</div>
				<div>
					<div className={cx("name")}>
						<h2>Dự án 1</h2>
						<Breadcrumb
							items={[
								{
									title: "Trang chủ",
								},
								{
									title: <a href="">Dự án 1</a>,
								},
								{
									title: <a href="">Chi tiết dự án</a>,
								},
							]}
						/>
					</div>

					<div className={cx("table")}>
						<Tabs items={tabsItem} tabBarGutter={"200px"} centered />
					</div>
					<div>
						<h4>Đánh giá : </h4>
					</div>
				</div>
			</div>
		</div>
	);
};

export default StagesPage;
