import React from "react";
import {createNativeStackNavigator}from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native";


const screenOne = ({navigation:{navigate}})=>(
    <TouchableOpacity onPress={()=>navigate("Two")}>
        <Text>One</Text>
    </TouchableOpacity>
)

const screenTwo = ({navigation:{navigate}})=>(
    <TouchableOpacity onPress={()=>navigate("Three")}>
        <Text>Two</Text>
    </TouchableOpacity>
)

const screenThree = ({navigation:{ goBack, setOptions,navigate }})=>(
    <>
        <TouchableOpacity onPress={()=>goBack()}>
            <Text>Three</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setOptions({title:"Hello!"})}>
            <Text>Change Title</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigate("Tabs",{screen:"Search"})}>
            <Text>go to Search</Text>
        </TouchableOpacity>
    </>
)

const NativeStack = createNativeStackNavigator();

const Stack =()=>(
    <NativeStack.Navigator screenOptions={{
        animation : "simple_push",
        presentation:"card",
        headerTintColor:"#f1c40f",
        headerBackTitleStyle:false,
    }}>
        <NativeStack.Screen options ={{title:"1"}} name="One" component={ScreenOne}/>
        <NativeStack.Screen name = "Two" component={ScreenTwo}/>
        <NativeStack.Screen name = "Three" component={ScreenThree}/>
    </NativeStack.Navigator>
)

export default Stack;