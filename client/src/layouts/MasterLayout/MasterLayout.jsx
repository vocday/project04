import { Layout } from "antd";
import React from "react";
import HeaderLayout from "../Header/Header";
import SiderLayout from "../Sider/Sider";

const MasterLayout = ({ children }) => {
	const { Content } = Layout;
	return (
		<Layout>
			<SiderLayout />
			<Content>
				<HeaderLayout />
				{children}
			</Content>
		</Layout>
	);
};

export default MasterLayout;
