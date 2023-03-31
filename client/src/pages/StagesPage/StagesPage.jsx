import { Divider, Layout } from "antd";

import classNames from "classnames/bind";
import React from "react";

import SiderLayout from "../../layouts/Sider/Sider";

import TabItem from "../../components/TabItem/TabItem";
import HeaderLayout from "../../layouts/Header/Header";
import styles from "./StagesPage.module.scss";
import MasterLayout from "../../layouts/MasterLayout/MasterLayout";

const cx = classNames.bind(styles);

const StagesPage = () => {
	const { Header, Content } = Layout;

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
		<MasterLayout>
			<h2>hello guy!</h2>
		</MasterLayout>
	);
};

export default StagesPage;
