import React from "react";
import "antd/dist/antd.css";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const UserLogin: React.FC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="container-form ">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 10 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="please enter a email!" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="please enter a password" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 10 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <hr />
        <div className="login">
        Don't have an account 
        <Link to='/register' />Sign Up
      </div>

      </Form>
     
    </div>
  );
};

export default UserLogin;
