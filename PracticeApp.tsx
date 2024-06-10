/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Button,
  Image,
  TextInput,
  Pressable,
  Switch,
  TouchableOpacity
} from 'react-native';
import MyText from './components/MyText';
import Item from './components/Item';
import { ThemeContext } from './components/ThemeContext';
import HomeScreen from './components/Homescreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faMugSaucer } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  
  const [text, setText] = useState("Hello world");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }
  
  useEffect(() => {
    console.log("The text has changed")
  }, [text])

  let array = Array(10).fill(0);
  const scrollViewRef = useRef(null);

  // const handleClick = () => {
  //   scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  // };
  
  const [imageSource, setImageSource] = useState({uri: ("http://example.com")})
  const [textValue, setTextValue ] = useState("");
  const [lastname, setLastNameValue ] = useState("");
  const [email, setEmailValue ] = useState("");
  const [password, setPasswordValue ] = useState("");
  const [keepLogin, setKeepLogin ] = useState(true);

  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <Image source={imageSource}
            style={{width: 50, height: 50, backgroundColor: 'black'}}
            resizeMode='center'
            onError={() =>{
              console.log("Error has been detected while loading an image")
              setImageSource(require('./assets/images/cake.png'))
            }} />
        <ScrollView ref={scrollViewRef}>
          {/* {array.map((value, index) => <Text key={index}>Hello World!</Text>)} */}

          <TextInput style={{borderWidth: 1}} value={textValue} onChangeText={value => setTextValue(value)}
          placeholder='First name'
          autoFocus={true}
          />
          
          <TextInput style={{borderWidth: 1}} value={lastname} onChangeText={value => setLastNameValue(value)}
          placeholder='Last name'
          />

<TextInput style={{borderWidth: 1}} value={email} onChangeText={value => setEmailValue(value)}
          placeholder='Email'
          keyboardType='email-address'
          
          />

<TextInput style={{borderWidth: 1}} value={password} onChangeText={value => setPasswordValue(value)}
          placeholder='password'          
          secureTextEntry={true}
          returnKeyType='done'
          />
          <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
            <Switch value={keepLogin} onValueChange={value => setKeepLogin(value)} />
            <Text>Keep me logged in</Text>
          </View>
          <TouchableOpacity style={[
            {backgroundColor: 'black'}, (email.length === 0 || password.length < 8) && {opacity: 0.5}]} 
                  onPress={() => {
                    console.log('Clicked submit', email, keepLogin)
                  }}
                  disabled={email.length === 0 || password.length < 8}
                  >
            <Text style={{color: 'white', textAlign: 'center'}}>Submit</Text>
          </TouchableOpacity>
          <View style={{backgroundColor: isDarkMode ? '#222222' : '#FFFFFF', height: 100}}>
            <MyText text="This is our header component"/>
            <Button title ='Switch Mode' onPress={toggleTheme} />
          </View>
          
          <Text onPress={() => setText("This is updated value")}>{text}</Text>
          
          <FontAwesomeIcon icon={faMugSaucer} />
          <HomeScreen />
          {/* <View style={{backgroundColor: 'grey'}}>`
            <MyText text="This is our footer component"/>
            <Item name={"Bum filler"} img={"./assets/images/cake.png"} />

          
            <Item name={"Lip filler"} img={"./assets/images/cake.png"} />

            <Item name={"Lemon bottle"} img={"./assets/images/cake.png"} />
          </View> 
          <Button onPress={handleClick} title='Scroll to Top' /> */}
        </ScrollView>
        
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};
export default App;
