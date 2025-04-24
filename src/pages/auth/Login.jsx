import React, { useCallback } from "react";
import { Button, Checkbox, Flex, Form, Input } from "antd";
import { useAuth } from "../../context/AuthProvider";
import Logo from "../../components/Logo";

export default function Login() {
  const { login } = useAuth();

  const onFinish = useCallback(
    (values) => {
      login(values);
    },
    [login],
  );
  const onFinishFailed = useCallback((errorInfo) => {
    console.log("Failed:", errorInfo);
  }, []);

  return (
    <Flex vertical justify="center" align="center" className="h-screen">
      <div
        className="w-[30%] rounded-xl border-2 border-[var(--color-brand-primary)] p-10"
        style={{
          background:
            "radial-gradient(71.52% 71.52% at 50% 100%, #58F8FE 0%, #FFF 100%)",
        }}
      >
        <Logo />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label={
              <span className="font-bold text-[var(--color-brand-primary)]">
                Tên đăng nhập
              </span>
            }
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={
              <span className="font-bold text-[var(--color-brand-primary)]">
                Mật khẩu
              </span>
            }
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Flex justify="end">
              <Button
                type="primary"
                htmlType="submit"
                className="!bg-[var(--color-brand-primary)]"
              >
                Đăng Nhập
              </Button>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
}
