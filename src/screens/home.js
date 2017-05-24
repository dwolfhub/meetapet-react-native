import React from 'react';
import {View, Text} from 'react-native';
import AbstractScreen from './index';

class Home extends AbstractScreen {
    render() {
        return (
            <View>
                <Text>
                    HOME!
                </Text>
            </View>
        )
    }
}

export default Home;