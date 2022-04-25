
import React, { useState } from "react";
import {
  Layout,
  Button,
  Row,
  Col,
  Typography,
  Form,
  Input,
} from "antd";
import signinbg from "../assets/images/wave.svg";
import logocitybest from "../assets/images/logocitybest.png";
import { login } from "../Services/Authentication";
import { notify } from '../Services/notify'
import { useHistory } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { COLORPRIMARY } from "../Hooks/constants";
const { Title } = Typography;
const { Content } = Layout;

const SignIn = () => {

  const history = useHistory();
  const [ loading, setloading ] = useState(false)

  const onFinish = (values) => {
    console.log("Success:", values);
    let { email, password } = values;
    setloading(true)
    login(email, password).then((response) => {
      if (response) {
        history.push("/dashboard");
      } else {
        setloading(false)
        notify("error", "Usuario o contraseña incorrectos");
      }
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Layout style={{
        minHeight: "100vh",
        backgroundImage: `url(${signinbg})`,
        backgroundSize: "cover",

      }} className="layout-default layout-signin">

        <Content className="signin" >
          <Row  style={{ marginTop: '10%', paddingBottom: 10 }} justify="center">
            <img id="imgLogin" style={{
              width: 100,
              alignContent: "center",
              alignItems: "center",
              alignSelf: "center",
            }} src={logocitybest} alt="logo" />
          </Row>
          <Row gutter={[ 10, 0 ]} justify="space-around">
            <Col
              xs={{ span: 24, offset: 0 }}
              lg={{ span: 6, offset: 2 }}
              md={{ span: 12 }}
              style={{
                background: '#fff',
                borderRadius: 20,
                border: '2px solid #e8e8e8',
                padding: 10
              }}
            >
              <Row justify="center">
                <Title style={{
                  color: COLORPRIMARY, justifyContent: 'center', alignContent: 'center',
                }} level={2}>Iniciar sesión </Title>
              </Row>
              {/* <Title className="font-regular text-muted" level={5}>
                Digita tu email y contraseña para iniciar sesión
              </Title> */}
              <Form

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                className="row-col"
              >
                <Form.Item
                  className="username"
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Digita tu email",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>

                <Form.Item
                  className="username"
                  label="Contraseña"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Digite su contraseña!",
                    },
                  ]}
                >
                  <Input placeholder="Digita tu contraseña" />
                </Form.Item>


                <Form.Item>
                  <Button
                    htmlType="submit"
                    style={{ width: "100%", background: COLORPRIMARY, color: '#fff', borderRadius: 20 }}
                  >
                    {loading ? <LoadingOutlined /> : "ENTRAR"}
                  </Button>
                </Form.Item>

              </Form>
            </Col>

          </Row>
        </Content>

      </Layout>
    </>
  );
}

export default SignIn;