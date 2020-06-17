import React, { Component } from 'react';
import { Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';

interface Props {

}

interface State {

}

class Navbar extends Component<Props, State> {

    state = {
        current: 'home',
    };

    render() {
        return (
            <div style={{
                padding: "0px 0px 16px 0px"
            }}>
                <Menu
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    theme='dark'
                >
                    <Menu.Item
                        key="home"
                        icon={<HomeOutlined />}
                    >Home</Menu.Item>
                </Menu>
            </div>
        );
    }
}
export default Navbar;