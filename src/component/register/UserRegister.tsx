import React from "react";
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "antd/dist/antd.css";
import * as http from "../../utils/http";
import openNotification from "../../utils/notification";
import './userRegister.css';

const UserRegister: React.FC = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log("Success:", values);
    try {
      const res = await http.registerUser(values);
      form.resetFields();
      openNotification(res.data.message);
      openNotification("Register sucess");
      navigate({ pathname: "/login" });
    } catch (err) {
      openNotification("Error during Rregistration");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="registerContainer">
      <h1 className="registerTitle">Register on Contact</h1>
      <div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="firstname"
            rules={[
              { required: true, message: "Please input your First Name" },
            ]}
          >
            <Input placeholder="David" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="lastname"
            rules={[{ required: true, message: "Please input your Last Name" }]}
          >
            <Input placeholder="Beckham" />
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
              Register
            </Button>
          </Form.Item>
          <div>
            <hr />
          </div>
          <div className="login">
            Already have Account
            <Link to="/login" className="signIn"> Sign in</Link>
          </div>
        </Form>
      </div>  
    </div>
  );
};

export default UserRegister;
