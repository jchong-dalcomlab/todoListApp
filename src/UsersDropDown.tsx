import { Dropdown, Menu, Space } from 'antd';
import { useEffect, useState } from 'react';

interface User {
    userId: number;
    userName: string;
}

interface UserDropdownProps {
    users: User[];
    onSelect?: (userId: string) => void;
}

function UserDropdown({ users, onSelect }: UserDropdownProps) {
    const [selectedUser, setSelectedUser] = useState<string>('사용자 선택 ...');

    const menuItems = users.map(user => ({
        key: user.userId.toString(),
        label: user.userName,
    }));

    useEffect(() => {
        const selectedName = users.find(user => user.userId === 1)?.userName;
        if (selectedName) {
            setSelectedUser(selectedName);
        }
    }, []);

    const handleMenuClick = (e: { key: string }) => {
        const selectedName = users.find(user => user.userId.toString() === e.key)?.userName;
        if (selectedName) {
            setSelectedUser(selectedName);
        }

        if (onSelect) {
            onSelect(e.key);
        }
    };


    return (
        <Dropdown menu={{
            items: menuItems,
            selectable: true,
            defaultSelectedKeys: ['1'],
            onClick: handleMenuClick,
        }}>
            <a onClick={(e) => e.preventDefault()}>
                <Space>
                    {selectedUser}
                </Space>
            </a>
        </Dropdown>
    );
}

export default UserDropdown;
