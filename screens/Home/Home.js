import React, { useState, useEffect } from "react";
import { FlatList, Pressable, SafeAreaView, ScrollView, Switch, Text, TextInput, TouchableOpacity, View } from "react-native";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

import Title from "../../components/Title";
import globalStyle from "../../assets/styles/globalStyle";
import { userStories } from "../../components/UserStory/UserStories.data";
import UserStory from "../../components/UserStory/UserStory";
import UserPost from "../../components/UserPost/UserPost";
import { userPosts } from "../../components/UserPost/userPosts.data";
import {Routes} from '../../navigation/Routes';


const Home = ({navigation}) => {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("")
    const [isExpanded, setIsExpanded] = useState(false);
    const [isSubmitted, setisSubmitted] = useState(false);
    
    const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const pagination = (database, currentPage, pageSize) => {
    console.log('Current page is ', currentPage)
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };

  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);
  }, []);
  
    const validInputValue = username.length === 0 || age.length === 0 || age === '0'

    const userPostsPageSize = 4;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);


    return (
      
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    
            <FlatList 
                ListHeaderComponent={
                <>
                    <View style={globalStyle.header}>
                <Title title={'Epique Aesthetics'} />

                <TouchableOpacity style={globalStyle.messageIcon} onPress={() =>{navigation.navigate(Routes.Profile)}}>
                    <FontAwesomeIcon icon={faBell} size={20} color={'#898DAE'} />
                    <View style={globalStyle.messageNumberContainer}>
                        <Text style={globalStyle.messageNumber}>2</Text>
                    </View>
                </TouchableOpacity>
            </View>           

            <View style={globalStyle.userStoryContainer}>
                <FlatList
                    onEndReachedThreshold={0.5}
                    onEndReached={() =>{
                        if (isLoadingUserStories) {
                            return;
                          }
                          setIsLoadingUserStories(true);
                          const contentToAppend = pagination(
                            userStories,
                            userStoriesCurrentPage + 1,
                            userStoriesPageSize,
                          );
                          if (contentToAppend.length > 0) {
                            setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                            setUserStoriesRenderedData(prev => [...prev, ...contentToAppend]);
                          }
                          setIsLoadingUserStories(false);
                    }}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={userStoriesRenderedData}
                    renderItem={({ item }) => (
                    <UserStory       
                            key={'userStory' + item.id}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    Story
                            firstName={item.firstName}
                            profileImage={item.profileImage}
                        />
                    )}
                />
            </View>
            <View style={globalStyle.loyaltyContent}>
                <View style={globalStyle.loyaltyStar}>
                    <View>
                        <Text style={globalStyle.loyaltyText}>Loyalty stars</Text>
                    </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={globalStyle.loyaltyNumber}>0</Text>
                        <FontAwesomeIcon icon={faStar} size={40} color={'#898DAE'} />
                    </View>
                </View>
                <View style={{marginTop: 60, marginRight: 10}}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={globalStyle.loyaltyNumber}>100</Text>
                        <FontAwesomeIcon icon={faStar} size={40} color={'#898DAE'} />
                    </View>
                    <View>
                        <Text style={globalStyle.loyaltyText}>Until Next Reward</Text>
                    </View>
                </View>
            </View>
                </>}
                data={userPosts}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <View style={globalStyle.userPostContainer}>
                    <UserPost
                        firstName={item.firstName}
                        lastName={item.lastName}
                        image={item.image}
                        likes={item.likes}
                        comments={item.comments}
                        bookmarks={item.bookmarks}
                        profileImage={item.profileImage}
                        location={item.location}
                    />
                    </View>
                )}
            />
            


            {/* <Text>Enter your username and age</Text>
            <View>
                <TextInput style={{ borderWidth: 1, marginBottom: 5 }} placeholder="name" value={username} onChangeText={value => setUsername(value)} />
                <TextInput style={{ borderWidth: 1, marginBottom: 5 }} placeholder="age" keyboardType={'numeric'} value={age} onChangeText={value => setAge(value)} maxLength={2} />

                <Pressable onPress={() => { console.log('Hi ' + username + ', you are ' + age + 'years old'), setisSubmitted(true) }}
                    style={[{ backgroundColor: 'black' }, validInputValue && { opacity: 0.5 }]}
                    disabled={validInputValue}
                >
                    <Text style={{ color: 'white', textAlign: 'center', padding: 10 }}>Submit</Text>
                </Pressable>
            </View>

            {isSubmitted && <ScrollView>
                <View>
                    <Text style={{ margin: 5 }}>{'Display information?'}</Text>
                    <Switch value={isExpanded} onValueChange={value => setIsExpanded(value)} />
                </View>
                {isExpanded && <View>
                    <Text>Username: {username}</Text>
                    <Text>Age: {age}</Text>
                </View>
                } 
            </ScrollView>
            }*/}
        </SafeAreaView>

    )

};

export default Home;