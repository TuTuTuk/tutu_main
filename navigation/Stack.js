import React from "react";
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";
import LoginPage from "../screens/StackScrenns/LoginPage";


const NativeStack = createNativeStackNavigator();

const Stack =()=>(
    <NativeStack.Navigator screenOptions={{
        animation : "simple_push",
        presentation:"card",
        headerTintColor:"#f1c40f",
        headerBackTitleStyle:false,
    }}>
        <NativeStack.Screen name ="LoginPage" component={LoginPage}/>
    </NativeStack.Navigator>
)

export default Stack;