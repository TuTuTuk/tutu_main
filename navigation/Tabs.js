import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreens/Home";
import Board from "../screens/TabScreens/Board";
import Matching from "../screens/TabScreens/Matching";
import My from "../screens/TabScreens/My";
import Timetable from "../screens/TabScreens/Timetable";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator screenOptions={{
        headerShown:false,
    }}>
        <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Icon name="home-outline" color={color} size={focused? size : 20}></Icon>
                )
            }
        }}/>
        <Tab.Screen name="Timetable" component={Timetable}
        options={{
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Icon name="home-outline" color={color} size={focused? size : 20}></Icon>
                )
            }
        }}/>
        <Tab.Screen name="Board" component={Board}
        options={{
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Icon name="home-outline" color={color} size={focused? size : 20}></Icon>
                )
            }
        }}/>
        <Tab.Screen name="Matching" component={Matching}
        options={{
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Icon name="home-outline" color={color} size={focused? size : 20}></Icon>
                )
            }
        }}/>
        <Tab.Screen name="My" component={My}
        options={{
            tabBarIcon:({focused,color,size})=>{
                return(
                    <Icon name="home-outline" color={color} size={focused? size : 20}></Icon>
                )
            }
        }}/>
    </Tab.Navigator>
)

export default Tabs;