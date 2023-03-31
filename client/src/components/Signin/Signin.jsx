import React from "react";
import styles from "./Signin.module.css";
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

export const Signin = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.signinCtn}>
      <div className={styles.signinform}>
        <Title style={{ fontWeight: "bold", padding: "10px 0 0 10px" }}>
          Đăng Nhập
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
            width: 400,
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
            style={{ fontWeight: "bold" }}
            label="Mật Khẩu"
            name="password"
            rules={[
              { required: true, message: "*Trường này không được để trống" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button
              style={{ width: "100%" }}
              onClick={() => navigate("/")}
              type="primary"
              htmlType="submit"
            >
              Đăng Nhập
            </Button>
          </Form.Item>

          <Title level={5}>
            <div className={styles.haveaccount}>
              {" "}
              Bạn chưa có tài khoản ?
              <Link onClick={() => navigate("/signup")}> Đăng Ký</Link>{" "}
            </div>
          </Title>
        </Form>
      </div>
    </div>
  );
};
