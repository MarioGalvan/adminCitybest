import React, { useState } from "react";
import { Typography, Select, Form, Input, Button, Space } from "antd";
import { COLORPRIMARY } from "../../../Hooks/constants";
import { useHistory } from "react-router-dom";
import { MdPersonAddAlt1 } from "react-icons/md";
import { UserOutlined, MailOutlined, LockOutlined } from "@ant-design/icons";
import { formItemLayout } from "./layoutForm";
import styles from "./styles.module.css";

const { Title } = Typography;

const onChange = (key) => {
  console.log(key);
};

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const NewAccount = ({ backEdit }) => {
  const history = useHistory();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const back = () => {
    backEdit();
  };

  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className={styles.containerNewAccount}>
      <Space
        direction="horizontal"
        style={{
          marginBottom: 24,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
          }}
        >
          <MdPersonAddAlt1
            style={{
              width: "1.8rem",
              height: "1.8rem",
              color: `${COLORPRIMARY}`,
            }}
          />
          <Title
            level={5}
            style={{
              color: `${COLORPRIMARY}`,
              boxShadow: "none",
              margin: "0px",
              marginLeft: "8px",
            }}
          >
            Complete el formulario para editar este administrador/a (Super Admin)
          </Title>
        </div>
        <Button className={styles.buttonPurple} onClick={back}>
          Volver
        </Button>
      </Space>
      <Form
        name="basic"
        // labelCol={{
        //   span: 8,
        // }}
        // wrapperCol={{
        //   span: 16,
        // }}
        {...formItemLayout}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className={styles.form}
      >
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: "Por favor, escriba su nombre.",
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Nombre"
            style={{
              padding: "0px",
              padding: "0 7px",
              color: "black",
              border: `1px solid ${COLORPRIMARY}`,
              boxShadow: "none",
            }}
            prefix={
              <UserOutlined
                style={{ color: "rgba(68, 26, 123, 1)" }}
                className="site-form-item-icon"
              />
            }
          />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="apellido"
          rules={[
            {
              required: true,
              message: "Por favor, escriba su apellido.",
            },
          ]}
          hasFeedback
        >
          <Input
            placeholder="Apellido"
            style={{
              padding: "0px",
              padding: "0 7px",
              color: "black",
              border: `1px solid ${COLORPRIMARY}`,
              boxShadow: "none",
            }}
            prefix={
              <UserOutlined
                style={{ color: "rgba(68, 26, 123, 1)" }}
                className="site-form-item-icon"
              />
            }
          />
        </Form.Item>

        <Form.Item
          label="Correo"
          name="correo"
          rules={[
            {
              required: true,
              type: "email",
              message: "Por favor, ingrese un correo válido",
            },
          ]}
          hasFeedback
        >
          <Input
            // defaultValue={
            //   JSON.parse(localStorage.getItem("formData"))?.correo
            // }
            placeholder="Correo"
            // bordered={false}
            name="correo"
            // value={formData?.correo}
            // onChange={generalSet}
            // className={styles.inputs}
            style={{ border: `1px solid ${COLORPRIMARY}`, boxShadow: "none" }}
            prefix={
              <MailOutlined
                style={{ color: "rgba(68, 26, 123, 1)" }}
                className="site-form-item-icon"
              />
            }
          />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="contraseña"
          rules={[
            {
              required: true,
              message: "Por favor, escriba su contraseña.",
            },
            {
              min: 6,
              message: "La contraseña debe tener mínimo 6 caracteres",
            },
          ]}
          hasFeedback
        >
          <Input.Password
            placeholder="Contraseña"
            className={styles.inputPassword}
            style={{ border: `1px solid ${COLORPRIMARY}`, boxShadow: "none" }}
            prefix={
              <LockOutlined
                style={{ color: "rgba(68, 26, 123, 1)" }}
                className={`site-form-item-icon ${styles.iconClose}`}
              />
            }
          />
        </Form.Item>

        {/* <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
        <Form.Item
          label="Rol"
          name="rol"
          rules={[
            {
              required: true,
              message: "Por favor, seleccione un rol.",
            },
          ]}
          hasFeedback
        >
          <Select
            defaultValue="-"
            style={{ width: 180 }}
            onChange={handleChange}
          >
            <Option value="Super Admin">Super Admin</Option>
            <Option value="Supervisor1">Supervisor1</Option>
            <Option value="Supervisor2">Supervisor2</Option>
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            className={styles.buttonPurple}
          >
            Editar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NewAccount;
