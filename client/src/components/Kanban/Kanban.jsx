import classNames from "classnames/bind";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { PlusCircleTwoTone } from "@ant-design/icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Divider, Modal, Tooltip } from "antd";
import Card from "../CardItem/CardItem";
import styles from "./Kanban.module.scss";
import FormCard from "../FormCard/FormCard";

const cx = classNames.bind(styles);

const Kanban = () => {
	const mockData = [
		{
			id: uuidv4(),
			title: (
				<p>
					Đang chuẩn bị{" "}
					<Tooltip title="Thêm thẻ">
						<PlusCircleTwoTone className={cx("icon")} onClick={hadleOpenCard} />
					</Tooltip>
				</p>
			),
			tasks: [
				{
					id: uuidv4(),
					title: "Learn JavaScript",
				},
				{
					id: uuidv4(),
					title: "Learn Git",
				},
				{
					id: uuidv4(),
					title: "Learn Python",
				},
			],
		},
		{
			id: uuidv4(),
			title: (
				<p>
					Đang thực hiện
					<Tooltip title="Thêm thẻ">
						<PlusCircleTwoTone className={cx("icon")} />
					</Tooltip>
				</p>
			),
			tasks: [
				{
					id: uuidv4(),
					title: "Learn CSS",
				},
				{
					id: uuidv4(),
					title: "Learn Golang",
				},
			],
		},
		{
			id: uuidv4(),
			title: (
				<p>
					Đang chờ đánh giá{" "}
					<Tooltip title="Thêm thẻ">
						<PlusCircleTwoTone className={cx("icon")} />
					</Tooltip>
				</p>
			),
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
		{
			id: uuidv4(),
			title: (
				<p>
					Hoàn thành{" "}
					<Tooltip title="Thêm thẻ">
						<PlusCircleTwoTone className={cx("icon")} />
					</Tooltip>
				</p>
			),
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
		{
			id: uuidv4(),
			title: (
				<p>
					Hủy bỏ{" "}
					<Tooltip title="Thêm thẻ">
						<PlusCircleTwoTone className={cx("icon")} />
					</Tooltip>
				</p>
			),
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
	];

	const [data, setData] = useState(mockData);
	const [openModalCard, setOpenModalCard] = useState(false);

	function hadleOpenCard() {
		setOpenModalCard(true);
	}

	const onCancel = () => {
		setOpenModalCard(false);
	};

	const onDragEnd = (result) => {
		if (!result.destination) return;
		const { source, destination } = result;

		if (source.droppableId !== destination.droppableId) {
			const sourceColIndex = data.findIndex((e) => e.id === source.droppableId);
			const destinationColIndex = data.findIndex(
				(e) => e.id === destination.droppableId
			);

			const sourceCol = data[sourceColIndex];
			const destinationCol = data[destinationColIndex];

			const sourceTask = [...sourceCol.tasks];
			const destinationTask = [...destinationCol.tasks];

			const [removed] = sourceTask.splice(source.index, 1);
			destinationTask.splice(destination.index, 0, removed);

			data[sourceColIndex].tasks = sourceTask;
			data[destinationColIndex].tasks = destinationTask;

			setData(data);
		}
	};

	return (
		<>
			<div className={cx("desc")}>
				<p>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày bắt đầu : 22/02/2020{" "}
				</p>
				<p>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày kết thúc dự kiến :
					22/02/2026{" "}
				</p>
				<p>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày kết thúc thực tế :
					22/02/2029{" "}
				</p>
			</div>
			<div className={cx("stages")}>
				<p>
					{" "}
					<FontAwesomeIcon icon={faClipboard} /> Danh sách công việc
				</p>
				<Divider />

				<DragDropContext onDragEnd={onDragEnd}>
					<div className={cx("kanban")}>
						{data.map((section) => (
							<Droppable key={section.id} droppableId={section.id}>
								{(provided) => (
									<div
										{...provided.droppableProps}
										className={cx("kanban__section")}
										ref={provided.innerRef}
									>
										<div className={cx("kanban__section__title")}>
											{section.title}
										</div>
										<div className={cx("kanban__section__content")}>
											{section.tasks.map((task, index) => (
												<Draggable
													key={task.id}
													draggableId={task.id}
													index={index}
												>
													{(provided, snapshot) => (
														<div
															ref={provided.innerRef}
															{...provided.draggableProps}
															{...provided.dragHandleProps}
															style={{
																...provided.draggableProps.style,
																opacity: snapshot.isDragging ? "0.5" : "1",
															}}
														>
															<Card>{task.title}</Card>
														</div>
													)}
												</Draggable>
											))}
											{provided.placeholder}
										</div>
									</div>
								)}
							</Droppable>
						))}
					</div>
				</DragDropContext>

				<Modal
					open={openModalCard}
					onCancel={onCancel}
					footer={[<Button>Tạo mới</Button>]}
					centered
				>
					<FormCard />
				</Modal>
			</div>
		</>
	);
};

export default Kanban;
