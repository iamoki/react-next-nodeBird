import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import UserProfile from '../components/UserProfile';
import LoginForm from '../components/LoginForm';

// antd 디자인 커스텀
const SearchInput = styled(Input.Search)`
    vertical-align: middle;
`;

// 여기에서의 children은 pages에 있는 페이지속 컨텐츠
const AppLayout = ({ children }) => {

    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);


    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>                    
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>                    
                    <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>                    
                    <SearchInput enterButton />
                </Menu.Item>
                <Menu.Item>                    
                    <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </Menu>
            {/* xs = 모바일, sm = 태블릿, md = 작은 데스크탑 */}
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
                </Col>
            </Row>
        </div>
    )
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;