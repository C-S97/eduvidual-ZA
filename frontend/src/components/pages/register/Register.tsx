import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface Props {

}

interface State {

}



class Register extends Component<Props, State> {

    render() {
        const onFinish = (values: any) => {
            console.log('Finish:', values);
        };

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center'
            }}>
                <div style={{ display: 'flex' }}>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}>
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" onChange={(event) => { }} />
                        </Form.Item>
                        <Form.Item
                            name="firstname"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input placeholder="Firstname" />
                        </Form.Item>
                        <Form.Item
                            name="lastname"
                            rules={[{ required: true, message: 'Please input your firstname!' }]}
                        >
                            <Input placeholder="Lastname" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>
                        <Form.Item shouldUpdate={true}>
                            {() => (
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                >
                                    Register
                                </Button>
                            )}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        );
    }
}
export default Register;