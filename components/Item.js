import React from "react";
import {View, Text, Image } from 'react-native';

const Item = ({name, img}) => {
    return (
        <View style={{borderWidth: 1,
                     borderLeftWidth: 1, 
                     borderRightWidth: 1, 
                     borderColor: 'pink', 
                     width: 50, 
                     height: 50,
                     borderRadius: 5,
                     marginHorizontal: 10,
                     marginVertical: 25,
                     padding: 10
                     }}>
            <Image source={require('../assets/images/cake.png')} 
            style={{width: 50, height: 50}}
            />
            <Text>{name}</Text>
        </View>
    )
}

export default Item;