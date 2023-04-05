import { Breadcrumb, Button, ConfigProvider, Divider, Tabs } from "antd";

import classNames from "classnames/bind";
import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Comment from "../../components/Comment/Comment";
import Kanban from "../../components/Kanban/Kanban";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import styles from "./StagesPage.module.scss";

const cx = classNames.bind(styles);

const StagesPage = () => {
	const tabsItem = [
		{
			key: 1,
			label: <h3>Chuẩn bị</h3>,
			children: <Kanban />,
		},
		{
			key: 2,
			label: <h3>Đang thực hiện</h3>,
			children: <Kanban />,
		},
		{
			key: 3,
			label: <h3>Tạm đình chỉ</h3>,
			children: <Kanban />,
		},
		{
			key: 4,
			label: <h3>Hoàn thành</h3>,
			children: <Kanban />,
		},
	];

	return (
		<MasterLayout>
			<div className={cx("content")}>
				<div className={cx("breadcrum")}>
					<Breadcrumb
						className={cx("name")}
						items={[
							{
								title: "Trang chủ",
							},
							{
								title: <a href="">Dự án 1</a>,
							},
							{
								title: <a href="">Chi tiết trạng thái</a>,
							},
						]}
					/>

					<ConfigProvider
						theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
					>
						<Button
							type="primary"
							icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
							className={cx("btn--on")}
						>
							Thêm stages mới
						</Button>
					</ConfigProvider>
				</div>

				<Tabs
					animated={false}
					items={tabsItem}
					className={cx("table")}
					tabBarStyle={{
						backgroundColor: "#F1F1F3",
						color: "#333",
					}}
					hideAdd
				/>
			</div>
			<Divider />
			<Comment />
		</MasterLayout>
	);
};

export default StagesPage;
