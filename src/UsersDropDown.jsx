import { Dropdown, Menu, Space } from 'antd';
import {useEffect, useState} from "react";

function UserDropdown({ users, onSelect }) {

    const [selectedUser, setSelectedUser] = useState('사용자 선택 ...');

    const menuItems = users.map(user => ({
        key: user.userId.toString(),
        label: user.userName,
    }));

    useEffect(() => {
        const selectedName = users.find(user => user.userId === 1)?.userName;
        setSelectedUser(selectedName);
    }, []);

    const handleMenuClick = (e) => {

        const selectedName = users.find(user => user.userId.toString() === e.key)?.userName;
        setSelectedUser(selectedName);

        if (onSelect) {
            onSelect(e.key);
        }
    };

    const menu = (
        <Menu
            selectable
            defaultSelectedKeys={['1']}
            items={menuItems}
            onClick={handleMenuClick}
        />
    );


    return (
        <Dropdown overlay={menu}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {selectedUser}
                </Space>
            </a>
        </Dropdown>
    );
}

export default UserDropdown;