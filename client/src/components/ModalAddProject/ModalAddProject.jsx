import React, { useState, useContext } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
} from "antd";
import { DataProcessing } from "../../context/dataProcessingcontext/dataProcessingcontext";
const { RangePicker } = DatePicker;
const { TextArea } = Input;

export const ModalAddProject = ({ onOk, onCancel }) => {
  const [form] = Form.useForm();
  const Datacontext = useContext(DataProcessing);
  const onFinish = (values) => {
    console.log("Success:", values);
    console.log(Datacontext.dataProcessing);
    // Datacontext.dataProcessing.push(values);
    Datacontext.setDataProcessing([...Datacontext.dataProcessing, values]);
    onCancel();
    form.resetFields();
  };
  return (
    <>
      <Form
        onFinish={onFinish}
        form={form}
        labelCol={{
          span: 6,
        }}
        wrapperCol={{
          span: 24,
        }}
        layout="vertical"
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label="Tên dự án" name="name">
          <Input required />
        </Form.Item>

        <Form.Item label="Ngày bắt đầu" name="startday">
          <Input type="Date" required />
        </Form.Item>
        <Form.Item label="Ngày kết thúc" name="endday">
          <Input type="Date" required />
        </Form.Item>

        <Form.Item label="Mô tả dự án" name="DescProject">
          <TextArea rows={4} required />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Thêm dự án mới
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
