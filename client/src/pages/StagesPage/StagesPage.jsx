import { Avatar, Breadcrumb, Button, Input, Space, Tabs } from "antd";

import classNames from "classnames/bind";
import React from "react";

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

				<Tabs
					type="card"
					items={tabsItem}
					tabBarGutter={"100px"}
					className={cx("table")}
					tabBarStyle={{
						backgroundColor: "#026AA7",
						color: "#fff",
						padding: "5px",
					}}
					centered
					hideAdd
				/>

				<div className={cx("comment")}>
					<h4>Đánh giá : </h4>
					<div className={cx("comment--display")}>
						<Space size={10}>
							<Avatar>Đ</Avatar>
							<p>Chúng tôi đang combat rồi !</p>
						</Space>

						<Space size={10}>
							<Avatar>B</Avatar>
							<p>Chúng tôi đang combat rồi !</p>
						</Space>
					</div>

					<div className={cx("comment--action")}>
						<Space>
							<Avatar>Đ</Avatar>
							<Input style={{ width: 700 }} />
							<Button type="primary"> Đánh giá</Button>
						</Space>
					</div>
				</div>
			</div>
		</MasterLayout>
	);
};

export default StagesPage;
