import {
	Breadcrumb,
	Button,
	ConfigProvider,
	Form,
	Input,
	Modal,
	Select,
	Tabs,
} from "antd";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Comment from "../../components/Comment/Comment";
import Kanban from "../../components/Kanban/Kanban";
import { Projectdetails } from "../../components/Projectdetails/Projectdetails";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";
import styles from "./StagesPage.module.scss";

const cx = classNames.bind(styles);

const StagesPage = () => {
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	const renderModal = [
		{
			label: "Tên trạng thái",
			type: (
				<Select
					defaultValue="Tạm đình chỉ"
					options={[
						{ label: "Chuẩn bị", value: "Chuẩn bị" },
						{ label: "Đang thực hiện", value: "Đang thực hiện" },
						{ label: "Tạm đình chỉ", value: "Tạm đình chỉ" },
						{ label: "Hoàn thành", value: "Hoàn thành" },
					]}
				/>
			),
		},
		{
			label: "Ngày bắt đầu",
			type: <Input type="Date" />,
		},
		{
			label: "Ngày dự kiến kết thúc",
			type: <Input type="Date" />,
		},
		{
			label: "Ngày kết thúc thực tế",
			type: <Input type="Date" />,
		},
	];

	const onAddStages = () => {
		setIsOpen(true);
	};

	const onCancelStages = () => {
		setIsOpen(false);
	};

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
	const namePath = window.location.pathname;
	return (
		<MasterLayout>
			<div className={cx("content")}>
				<div className={cx("breadcrum")}>
					<Breadcrumb
						className={cx("name")}
						items={[
							{
								title: (
									<a
										href=""
										onClick={() => {
											navigate("/");
										}}
									>
										Trang chủ
									</a>
								),
							},
							{
								title: (
									<a
										href=""
										onClick={() => {
											navigate("/projectdetails");
										}}
									>
										Dự án 1
									</a>
								),
							},
							namePath !== "/projectdetails"
								? {
										title: (
											<a
												href=""
												onClick={() => {
													navigate("/projectdetails/detailedstage");
												}}
											>
												Chi tiết trạng thái
											</a>
										),
								  }
								: " ",
						]}
					/>

					<ConfigProvider
						theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
					>
						<Button
							type="primary"
							icon={<FontAwesomeIcon icon={faPlus} className={cx("icon1")} />}
							className={cx("btn--on")}
							onClick={onAddStages}
						>
							Thêm trạng thái mới
						</Button>
					</ConfigProvider>

					<Modal
						open={isOpen}
						onCancel={onCancelStages}
						footer={[
							<ConfigProvider
								theme={{ token: { colorPrimary: "rgb(235, 118, 35)" } }}
							>
								<Button type="primary">Tạo mới thẻ</Button>
							</ConfigProvider>,
						]}
						centered
					>
						<Form layout="vertical">
							{renderModal.map((item, index) => {
								return <Form.Item label={item.label}>{item.type}</Form.Item>;
							})}
						</Form>
					</Modal>
				</div>
				<Routes>
					<Route
						path="/detailedstage"
						element={
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
						}
					/>
					<Route path="/" element={<Projectdetails />} />
				</Routes>
			</div>

			<Routes>
				<Route path="/detailedstage" element={<Comment />} />
			</Routes>
		</MasterLayout>
	);
};

export default StagesPage;
