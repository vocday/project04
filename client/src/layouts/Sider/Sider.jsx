import { Badge, Image, Layout, Menu, Space } from "antd";
import classNames from "classnames/bind";
import React from "react";
import detail from "../../assets/image/detail.png";
import image2 from "../../assets/image/image2.png";
import logo from "../../assets/image/logo.png";
import message from "../../assets/image/message.png";
import project from "../../assets/image/project.png";
import user from "../../assets/image/user.png";
import styles from "./Sider.module.scss";

const cx = classNames.bind(styles);

const SiderLayout = () => {
	const { Sider, Content } = Layout;

	const items = [
		{ label: "Dự án", icon: <img src={detail} className={cx("image")} /> },
		{
			label: "Chi tiết dự án",
			icon: <img src={project} className={cx("image")} />,
		},
		{
			label: "Trò chuyện ",
			icon: <img src={message} className={cx("image")} />,
			children: ["sub1"],
		},
		{
			label: "Thông báo",
			icon: <img src={image2} className={cx("image")} />,
			children: ["sub2"],
		},
		{
			label: "Thông tin cá nhân",
			icon: <img src={user} className={cx("image")} />,
		},
	];

	return (
		<>
			<Sider
				width={200}
				style={{ background: "#fff" }}
				className={cx("sider")}
				breakpoint={"md"}
			>
				<Space className={cx("logo")}>
					<img src={logo} alt="logo" />
					<h1>Tổng quan</h1>
				</Space>
				<Menu
					mode="inline"
					defaultSelectedKeys={["0"]}
					style={{ height: "100%", borderRight: 0 }}
					expandIcon={<Badge count={6} />}
					items={items.map((item, index) => {
						return {
							key: index,
							label: item.label,
							icon: item.icon,
							children: item?.children,
						};
					})}
				/>
			</Sider>
			<div className={cx("content")}></div>
		</>
	);
};

export default SiderLayout;
