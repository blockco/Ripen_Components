import React, { Component, } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

class TopHead extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Body>
                    <Title>Header</Title>
                    </Body>
                </Header>
            </Container>
        );
    }
}

export default TopHead;