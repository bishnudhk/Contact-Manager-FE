import React, { useEffect } from "react";
import Contact from "../../domain/contact";
import { Table, notification } from "antd";
import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import * as http from "../../utils/http";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { addContact } from "../../store/slice/contactSlice";
import sortContact from "../../utils/sortContact";
import openNotification from "../../utils/notification";
import './contactTable.css';

const { Column, ColumnGroup } = Table;

const formatedData = (contact: Contact) => {
  const tableRow = {
    key: contact.id,
    first_name: contact.first_name,
    last_name: contact.last_name,
    email: contact.email,
    mobile: contact.mobile,
    company: contact.company,
    photo: contact.photo,
    is_favourite: contact.is_favourite,
  };
  return tableRow;
};

const ContactTable = () => {
  const dispatch = useDispatch();
  // read data from the useSelector
  const contacts = useSelector((state: RootState) => state.addContact.data);
  let data = contacts.map(formatedData);

  useEffect(() =>{
  (async() => {
  // const data = await http.getAllContact();
 
  // const sortedContact = sortContact(data);
  // dispatch(addContact(sortedContact));
  dispatch(addContact);
  })();
  },[dispatch]);

  const handleFavourite = async (is_favourite: boolean, contact_id: string) => {
    const formData = new FormData();
    formData.append("is_favourite", `${!is_favourite}`);
    // const res = await http.updateContact(formData,contact_id)
    // const data = await http.getAllContact();

    // const sortedContact = sortContact(data);
    // dispatch(addContact(sortedContact));
    dispatch(addContact);
    // console.log(res);
  };

  const handleDeleteButton = async (contact_id: string) => {
    // const res = await http.deleteContact(contact_id);
    // const data = await http.getAllContact();
    // dispatch(addContact(data));
    dispatch(addContact);
    // openNotification(res.data.message);
    openNotification("update contact")
  };

  return (
    <div>
      <div className="contactTitle"> Contacts </div>
      <Table dataSource={data} pagination={false}>
        <Column
          title=""
          dataIndex="photo"
          render={(pic) => (
            <img src={pic} alt="Profile Pic" className="profilePhoto" />
          )}
        />
        <ColumnGroup title=" ">
          <Column title="First Name" dataIndex="firstName" key="firstName" />
          <Column title="Last Name" dataIndex="lastName" key="lastName" />
          <Column title="Email" dataIndex="email" key="email" />
          <Column title="Mobile Number" dataIndex="mobile" key="mobile" />
        </ColumnGroup>

        <Column
          title=""
          dataIndex="key"
          render={(key, contact: Contact) => (
            <div onClick={() => handleFavourite(contact.is_favourite!, key)}>
              {contact.is_favourite ? <StarOutlined style={{fontSize:"20px"}} /> : <StarOutlined />}
            </div>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(key) => (
            <div>
              <Link to={`/contact/edit/${key}`}>Edit</Link>
              <Link
                to={"/contact"}
                onClick={() => {
                  handleDeleteButton(key);
                }}
              >
                Delete
              </Link>
            </div>
          )}
        />
      </Table>
    </div>
  );
};

export default ContactTable;
