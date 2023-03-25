import { faMagnifyingGlass, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Badge, Button, ConfigProvider, Input, Space } from "antd";

import classNames from "classnames/bind";
import React from "react";

import SiderLayout from "../../components/Sider/Sider";
import question from "../../resources/image/question.png";
import notification1 from "../../resources/image/notifications1.png";

import styles from "./StagesPage.module.scss";

const cx = classNames.bind(styles);

const StagesPage = () => {
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
				<div>hello</div>
			</div>
		</div>
	);
};

export default StagesPage;
