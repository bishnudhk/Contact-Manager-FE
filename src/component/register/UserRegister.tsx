import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";

const UserRegister = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="container">
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
         <Form.Item
          label="First name"
          name="firstName"
          rules={[
            { required: true, message: "Please input your First Name" },
            
          ]}
        >
          <Input placeholder="David" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email adderss" },
            { type: "email", message: "Please enter valid email" },
          ]}
        >
          <Input placeholder="example@example.com" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" />
        </Form.Item>

        <Form.Item>
          <Button className="btn" type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
        <div>
          <hr />
        </div>
        <div className="login">
          Dont' have an account?
          <Link to="/register"> Sign up</Link>
        </div>
      </Form>
    </div>
  );
};

export default UserRegister;
