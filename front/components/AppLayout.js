import React from 'react';
import Link from 'next/link';
import PropTypes from "prop-types";
import {Avatar, Button, Card, Col, Input, Menu, Row} from "antd";

const dummy={
    nickname: '양진규',
    Post: [],
    Followings: [],
    Followers: []
}
const AppLayout = ({children}) => {
    return(
    <div>
        <Menu mode="horizontal">
            <Menu.Item key="home">
                <Link href="/">
                    노드버드
                </Link>
            </Menu.Item>
            <Menu.Item key="profile">
                <Link href="/profile">
                    프로필
                </Link>
            </Menu.Item>
            <Menu.Item key="mail">
                <Input.Search enterButton style={{verticalAlign: 'middle'}}/>
            </Menu.Item>
        </Menu>
        <Link href="/signup">
            <Button>
                회원가입
            </Button>
        </Link>
        <Row>
            <Col xs={24} md={6}>
                <Card
                actions={[
                    <div key="twit">쨱짹<br/>{dummy.Post.length}</div>,
                    <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                    <div key="follower">팔로워<br/>{dummy.Followers.length}</div>,

                ]}>
                    <Card.Meta
                        avatar={<Avatar>{dummy.nickname[0]}</Avatar>} title={dummy.nickname}
                    />
                </Card>
            </Col>
            <Col xs={24} md={12}>{children}</Col>
            <Col xs={24} md={6}>세번째</Col>
        </Row>
    </div>)
}

AppLayout.proptypes = {
    children: PropTypes.node,
}
export default AppLayout;