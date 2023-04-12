import { Form, Input, Rate, Select, Tag } from "antd";
import classNames from "classnames/bind";
import React from "react";

import styles from "./FormCard.module.scss";

const cx = classNames.bind(styles);

const FormCard = () => {
	const { TextArea } = Input;

	const options = [
		{ value: "datdev@gmail.com" },
		{ value: "phamtuandat@gmail.com" },
		{ value: "green" },
		{ value: "cyan" },
	];

	const tagRender = (props) => {
		const { label, value, closable, onClose } = props;
		const onPreventMouseDown = (event) => {
			event.preventDefault();
			event.stopPropagation();
		};
		return (
			<Tag
				color={"blue"}
				onMouseDown={onPreventMouseDown}
				closable={closable}
				onClose={onClose}
				style={{ marginRight: 3 }}
			>
				{label}
			</Tag>
		);
	};

	const formItem = [
		{
			label: "Tên công việc",
			type: <Input />,
		},
		{
			label: "Độ ưu tiên",
			type: <Rate />,
		},
		{
			label: "Loại công việc",
			type: (
				<Select
					defaultValue="Nhiệm vụ - Màu xanh lá cây"
					options={[
						{ value: "Nhiệm vụ ", label: "Nhiệm vụ - Màu xanh lá cây" },
						{ value: "Vấn đề", label: "Vấn đề - Màu đỏ" },
					]}
				/>
			),
		},
		{
			label: "Thành viên",
			type: (
				<Select
					mode="multiple"
					showArrow
					tagRender={tagRender}
					defaultValue={["datdev266@gmail.com"]}
					style={{ width: "100%" }}
					options={options}
				/>
			),
		},
		{
			label: "Trạng thái",
			type: (
				<Select
					defaultValue="Đang chuẩn bị"
					options={[
						{ value: "Đang chuẩn bị", label: "Đang chuẩn bị" },
						{ value: "Đang thực hiện", label: "Đang thực hiện" },
						{ value: "Đang chờ đánh giá", label: "Đang chờ đánh giá" },
						{ value: "Hoàn thành", label: "Hoàn thành" },
						{ value: "Hủy bỏ", label: "Hủy bỏ" },
					]}
				/>
			),
		},
		{
			label: "Ngày bắt đầu",
			type: <Input type="Date" />,
		},
		{
			label: "Ngày kết thúc dự kiến",
			type: <Input type="Date" />,
		},
		{
			label: "Ngày kết thúc thực tế",
			type: <Input type="Date" />,
		},
		{
			label: "Mô tả",
			type: <TextArea />,
		},
	];

	return (
		<Form layout="vertical">
			{formItem.map((item, index) => {
				return <Form.Item label={item.label}>{item.type}</Form.Item>;
			})}
		</Form>
	);
};

export default FormCard;
