import React, {useState} from 'react';
import { Text} from 'react-native';
import style from './style';

const MyText = (props) => {
    const handleTextClick = () => {
        alert('The text has been clicked')
    }

    const [text, setText] = useState("Hello world")
    
    return <Text style={style.text} onPress={() => handleTextClick()}>{props.text}</Text>;
}

export default MyText;
