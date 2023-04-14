import React, { useState } from "react";
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
import axios, { Axios } from "axios";
const { Option } = Select;
const { Title, Link } = Typography;

export const Signin = () => {
  const handleSubmit = (values) => {
    // navigate("/");
    console.log("Received values of form: ", values);
    const formData = {
      email: values.email,
      password: values.password,
    };
    axios.post("http://localhost:4000/login", formData).then((response) => {
      console.log(response.status, response.data);
      if (response.status == 200 && response.data.userId) {
        navigate("/");
      }
    });
  };

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
          onFinish={handleSubmit}
          style={{
            maxWidth: 600,
            width: 400,
          }}
        >
          <Form.Item style={{ fontWeight: "bold" }} label="Email">
            <Form.Item
              name="email"
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
                placeholder="Điền email của bạn"
              />
              {/* <Input /> */}
            </Form.Item>
          </Form.Item>

          <Form.Item
            style={{ fontWeight: "bold" }}
            label="Mật Khẩu"
            name="password"
            rules={[
              { required: false, message: "*Trường này không được để trống" },
            ]}
          >
            <Input.Password placeholder="Nhập mật khẩu" />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button
              style={{ width: "100%" }}
              // onClick={() => navigate("/")}
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
