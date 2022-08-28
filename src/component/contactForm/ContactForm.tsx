import React, { useEffect } from "react";
import { Button, Form, Input, Switch, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useNavigate, useParams } from "react-router-dom";
import openNotification from "../../utils/notification";
import * as http from "../../utils/http";
import './contactForm.css';

interface ContactFormInterface {
  update: boolean;
}

const ContactForm = (props: ContactFormInterface) => {
  const [form] = Form.useForm();
  const { id } = useParams();

  const navigate = useNavigate();

  // Get contact information for updating contact
  useEffect(() => {
    (async () => {
      if (props.update) {
        // const res:any= id;
        const res: any = await http.getContactById(+id!);
        const contact = res.data.data;
        form.setFieldsValue({
          first_name: contact.first_name,
          last_name: contact.last_name,
          middle_name: contact.middle_name,
          work: contact.work,
          home: contact.home,
          mobile: contact.mobile,
          email: contact.email,
          company: contact.company,
          is_favourite: contact.is_favourite,
        });
      }
    })();
  }, [id, props.update, form]);

  const onFinish = async (values: any) => {
    const formData = new FormData();
    formData.append("first_name", values.first_name);
    formData.append("last_name", values.last_name);
    values.middle_name && formData.append("middle_name", values.middle_name);
    values.work && formData.append("work", values.work);
    values.home && formData.append("home", values.home);
    values.mobile && formData.append("mobile", values.mobile);
    values.email && formData.append("email", values.email);
    values.company && formData.append("company", values.company);
    values.photo && formData.append("photo", values.photo.file.originFileObj);
    formData.append("is_favourite", `${!!values.is_favourite}`);
    try {
      if (!props.update) {
        const res = await http.addContact(formData);
        openNotification(res.data.message);
        // openNotification("update data");
      } else {
        const res = await http.updateContact(formData, id as string);
        openNotification(res.data.message);
        openNotification("error");
        console.log(res);
      }
      form.resetFields();
      navigate({ pathname: "/" });
    } catch (err) {
      console.log(err);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="contactFormContainer">
      <div className="contactFormTitle">
        {props.update ? "Update Contact" : "Add Contact"}
      </div>
      <div className="contactFormWrapper">
        <Form
          form={form}
          layout="vertical"
          name="contactForm"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="First Name"
            name="first_name"
            rules={[
              { required: true, message: "Please input your first name!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item label="Middle Name" name="middle_name">
            <Input placeholder="Middle Name" />
          </Form.Item>

          <Form.Item
            label="Last Name"
            name="last_name"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item label="Mobile" name="mobile">
            <Input placeholder="Mobile Number" />
          </Form.Item>

          <Form.Item label="Work" name="work">
            <Input placeholder="Work Number" />
          </Form.Item>

          <Form.Item label="Home" name="home">
            <Input placeholder="Home Number" />
          </Form.Item>

          <Form.Item label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item label="Company" name="company">
            <Input placeholder="Company name" />
          </Form.Item>
          <Form.Item
            label="Favourite"
            name="is_favourite"
            valuePropName="checked"
          >
            <Switch checked={false} />
          </Form.Item>
          <Form.Item name="photo" label="Photo">
            <Upload maxCount={1}>
              <Button icon={<UploadOutlined />}>Upload Image</Button>
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button className="btn" type="primary" htmlType="submit">
              {props.update ? "Update Contact" : "Add Contact"}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
