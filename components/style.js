import { StyleSheet } from "react-native";
import {getFontFamily} from '../assets/fonts/helper';

const style = StyleSheet.create({
    text: {
        color: 'blue',
        fontFamily: 'Arial'
    },
    title: {
        color: '#022150',
        fontFamily: getFontFamily('Inter', '600'),
        fontSize: 20,
      },
});

export default style;
