import {StyleSheet} from 'react-native';
import {getFontFamily} from '../fonts/helper';

const globalStyle = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFF'
  },
  flex: {
    flex: 1
  },
  header: {
    marginLeft: 27,
    marginRight: 17,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: 14,
    borderRadius: 100,
    backgroundColor: '#F9FAFB',
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#FFFFFF',
    fontSize: 6,
    fontFamily: getFontFamily('Inter', '600'),
  },
  loyaltyContent: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'
  },
  loyaltyStar: {
    alignItems: 'left',
    flexDirection: 'column',
    marginTop: 50,
    marginBottom: 19,
    marginLeft: 10
  },
  loyaltyText : {
    
      color: '#000',
      fontFamily: getFontFamily('Inter', '600'), 
      fontSize: 16,
    
  },
  loyaltyNumber: {
    fontSize: 50,
    fontFamily: getFontFamily('Inter', '400'),
    color: '#898DAE'
  },
  userStoryContainer: {
    marginTop: 20,
    marginHorizontal: 1,
  },
  userPostContainer: {
    marginHorizontal: 1,
  },
  flexGrow: {
    flexGrow: 1
  }
});

export default globalStyle;