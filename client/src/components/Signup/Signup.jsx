import React from "react";
import styles from "./Signup.module.css";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  Tooltip,
  Typography,
  message,
} from "antd";
import { useNavigate } from "react-router";
const { Option } = Select;
const { Title, Link } = Typography;
const onFinish = (values) => {
  console.log("Received values of form: ", values);
};

export const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.signupCtn}>
      <div className={styles.signupform}>
        <Title style={{ fontWeight: "bold", padding: "10px 0 0 10px" }}>
          Đăng Ký
        </Title>
        <Form
          name="complex-form"
          layout="vertical"
          onFinish={onFinish}
          // labelCol={{
          //   span: 8,
          // }}
          // wrapperCol={{
          //   span: 16,
          // }}
          style={{
            maxWidth: 600,
          }}
        >
          <Form.Item style={{ fontWeight: "bold" }} label="Tên Đăng Nhập">
            <Form.Item
              name="username"
              noStyle
              rules={[
                {
                  required: true,
                  message: "*Trường này không được để trống",
                },
              ]}
            >
              <Input
                style={{
                  width: "100%",
                }}
                placeholder="Điền tên đăng nhập của bạn"
              />
              {/* <Input /> */}
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Họ và Tên"
            style={{
              marginBottom: 0,
              fontWeight: "bold",
            }}
          >
            <Form.Item
              name="firstName"
              rules={[
                {
                  required: true,
                  message: "*Trường này không được để trống",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
              }}
            >
              <Input placeholder="Nhập họ của bạn" />
            </Form.Item>
            <Form.Item
              name="lastName"
              rules={[
                {
                  required: true,
                  message: "*Trường này không được để trống",
                },
              ]}
              style={{
                display: "inline-block",
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Nhập tên của bạn" />
            </Form.Item>
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Mật Khẩu"
            name="password"
            rules={[
              { required: true, message: "*Trường này không được để trống" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>
          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Xác nhận mật khẩu"
            name="confirmpassword"
            rules={[
              { required: true, message: "*Trường này không được để trống" },
            ]}
          >
            <Input.Password placeholder="Xác nhận mật khẩu" />
          </Form.Item>
          <Form.Item label=" " colon={false}>
            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
              Đăng Ký
            </Button>
          </Form.Item>
          <Form.Item colon={false}>
            <Button
              style={{ width: "100%", background: "Orange" }}
              type="primary"
              htmlType="submit"
            >
              Đăng ký bằng tài khoản Google
            </Button>
          </Form.Item>
          <Title level={5}>
            <div className={styles.haveaccount}>
              {" "}
              Bạn đã có tài khoản ?
              <Link onClick={() => navigate("/signin")}>Đăng nhập</Link>{" "}
            </div>
          </Title>
        </Form>
      </div>
    </div>
  );
};
