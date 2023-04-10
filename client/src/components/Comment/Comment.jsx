import { Avatar, Button, Divider, Input, Space } from "antd";
import classNames from "classnames/bind";
import React, { useRef, useState } from "react";

import { LikeTwoTone } from "@ant-design/icons";
import styles from "./Comment.module.scss";

const cx = classNames.bind(styles);

const Comment = () => {
	const inputRef = useRef();

	const onComment = () => {
		inputRef.current.focus();
	};

	return (
		<div className={cx("comment")}>
			<h4>Đánh giá : </h4>
			<div className={cx("comment--display")}>
				<div>
					<Space size={10}>
						<Avatar>Đ</Avatar>
						<p>Chúng tôi đang combat rồi !</p>
					</Space>
					<div className={cx("action--comment")}>
						<p> Thích</p>
						<p onClick={onComment}>Bình luận</p>
						<div className={cx("like")}>
							<LikeTwoTone />
							<p>1</p>
						</div>
					</div>
				</div>

				<Divider />

				<div>
					<Space size={10}>
						<Avatar>Đ</Avatar>
						<p>Chúng tôi đang combat rồi !</p>
					</Space>
					<div className={cx("action--comment")}>
						<p> Thích</p>
						<p onClick={onComment}>Bình luận</p>
						<div className={cx("like")}>
							<LikeTwoTone />
							<p>1</p>
						</div>
					</div>
				</div>

				<Divider />
			</div>

			<div className={cx("comment--action")}>
				<Space>
					<Avatar>Đ</Avatar>
					<Input style={{ width: 700 }} ref={inputRef} />
					<Button type="primary">Gửi</Button>
				</Space>
			</div>
		</div>
	);
};

export default Comment;
