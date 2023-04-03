import classNames from "classnames/bind";
import { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { v4 as uuidv4 } from "uuid";

import { faClipboard } from "@fortawesome/free-regular-svg-icons";
import {
	faCalendarDays,
	faFileSignature,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../CardItem/CardItem";
import styles from "./Kanban.module.scss";

const cx = classNames.bind(styles);

const Kanban = () => {
	const mockData = [
		{
			id: uuidv4(),
			title: "Đang chuẩn bị",
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
			title: " Đang thực hiện",
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
			title: " Đang chờ đánh giá",
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
		{
			id: uuidv4(),
			title: " Hoàn thành",
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
		{
			id: uuidv4(),
			title: " Hủy bỏ",
			tasks: [
				{
					id: uuidv4(),
					title: "Learn HTML",
				},
			],
		},
	];
	const [data, setData] = useState(mockData);

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
				<h4>
					<FontAwesomeIcon icon={faFileSignature} /> Tên giai đoạn :{" "}
				</h4>
				<h4>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày bắt đầu:{" "}
				</h4>
				<h4>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày kết thúc dự kiến:{" "}
				</h4>
				<h4>
					<FontAwesomeIcon icon={faCalendarDays} /> Ngày kết thúc thực tế :{" "}
				</h4>
			</div>
			<div className={cx("stages")}>
				<h4>
					{" "}
					<FontAwesomeIcon icon={faClipboard} /> Các công việc :
				</h4>
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
			</div>
		</>
	);
};

export default Kanban;
