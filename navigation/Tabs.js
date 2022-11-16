import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/TabScreens/Home";
import Board from "../screens/TabScreens/Board";
import Matching from "../screens/TabScreens/Matching";
import My from "../screens/TabScreens/My";
import Timetable from "../screens/TabScreens/Timetable";

const Tab = createBottomTabNavigator();

const Tabs=()=>(
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Timetable" component={Timetable}/>
        <Tab.Screen name="Board" component={Board}/>
        <Tab.Screen name="Matching" component={Matching}/>
        <Tab.Screen name="My" component={My}/>
    </Tab.Navigator>
)

export default Tabs;