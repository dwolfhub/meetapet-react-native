import React from 'react';
import {View, Text} from 'react-native';
import AbstractScreen from './index';

class Favorites extends AbstractScreen {
    render() {
        return (
            <View>
                <Text>
                    Favorites!
                </Text>
            </View>
        )
    }
}

export default Favorites;