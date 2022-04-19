import React from "react";
import { Form, Input, Button, Select, Row, Divider, Upload, Space } from "antd";
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import ImgCrop from "antd-img-crop";
import { useState } from "react";
import { UseUploadImage } from "../../Hooks/useServiceImage";
import { notify } from "../../Services/notify";
import { ServiceAdd } from "../../Services/useApi";

const { TextArea } = Input;

export const FormSabedorxs = ({ setshowModal }) => {
  const [image, setimage] = useState();
  const [loading, setloading] = useState(false);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    setloading(true);

    if (image) {
      try {
        UseUploadImage(image).then((res) => {
          values.profilePicture =
            res ||
            "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png";
          values._id = values.email;
          ServiceAdd("Sabedorxs", values).then((result) => {
            console.log("result", result);
            notify("success", "Exito");
            form.resetFields();
            setshowModal(false);
            setloading(false);
          });
        });
      } catch (err) {
        notify("error", err.message);
      }
    }
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const children = [];

  const handleChangeUpload = (info) => {
    if (info.file.status !== "uploading") {
      setimage(info.fileList[0].originFileObj);
      console.log(info.file, info.fileList);
    }
  };

  const uploadprops = {
    multiple: false,
    beforeUpload: () => {
      return false;
    },
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Row justify="center" style={{ cursor: "pointer" }}>
        <Space direction="vertical">
          <Row justify="center">
            <ImgCrop rotate>
              <Upload
                {...uploadprops}
                maxCount={1}
                onPreview={() => {}}
                onChange={handleChangeUpload}
                action="https://www.google.com"
                listType="picture-card"
                style={{ cursor: "pointer" }}
              >
                <Button
                  icon={<UploadOutlined />}
                  style={{
                    margin: 5,
                  }}
                  shape="round"
                  type="secondary"
                >
                  Subir Foto
                </Button>
              </Upload>
            </ImgCrop>
          </Row>
        </Space>
      </Row>
      <Divider />
      <Form.Item
        label="Nombre completo"
        name="name"
        rules={[
          {
            required: true,
            message: "Porfavor digite el nombre",
          },
        ]}
      >
        <Input autoFocus />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Porfavor digite el email",
          },
        ]}
      >
        <Input placeholder="example@example.com" />
      </Form.Item>

      <Form.Item
        label="Cargo(s)"
        name="cargo"
        rules={[
          {
            required: true,
            message: "Digite al menos un cargo",
          },
        ]}
      >
        <Select
          mode="tags"
          style={{ width: "100%" }}
          placeholder="Tags Mode"
          onChange={handleChange}
        >
          {children}
        </Select>
      </Form.Item>

      <Form.Item
        label="Descripcion ó reseña"
        name="description"
        rules={[
          {
            required: true,
            message: "Porfavor digite la descripcion",
          },
        ]}
      >
        <TextArea showCount maxLength={100} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          {loading ? <LoadingOutlined /> : "Guardar"}
        </Button>
      </Form.Item>
    </Form>
  );
};
