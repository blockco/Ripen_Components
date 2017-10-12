import React, { Component, View, Image } from 'react';
import { AppRegistry } from 'react-native';
import { Container, Header, Content, List, ListItem, Text, Left } from 'native-base';
import TopHead from './TopHead'


class StandBody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            standName: "Generic Fruit Stand",
            produceItems: [
                {
                    name: "Oranges",
                    price: 1,
                },
                {
                    name: "Apples",
                    price: 1.05,
                },
                {
                    name: "Grapes",
                    price: 2.50,
                },
                {
                    name: "Tomatoes",
                    price: .60,
                },
                {
                    name: "Plums",
                    price: .50,
                },
            ],
            sketch: ['hello', 'good', 'fuck'],
            location: "Fremont Ca"
        };
        console.log(this.state.produceItems[0].price)
    }
    render() {
        return (
            <Container>
                <Content>
                    <List dataArray={this.state.produceItems}
                          renderRow={(item) =>
                              <ListItem>
                                  <Left>
                                  <Text>{item.name}</Text>
                                  </Left>
                                  <Text>{item.price}</Text>
                              </ListItem>
                          }>
                    </List>
                </Content>
            </Container>
        );
    }
}

export default StandBody;