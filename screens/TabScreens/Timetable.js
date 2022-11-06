import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";


const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;
`;

const HeaderBox = styled.View`
    flex:1;
    border:1px;
    border-color:red;
    margin:10px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding-left:20px;
    padding-right:20px;
`;
    const BackBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
        const BackText = styled.Text`
            color:red;
            font-size:10px;
        `;
    const ConfigureBtn = styled.TouchableOpacity`
        border:1px;
        width:30px;
        height:30px;
    `;
        const ConfigureText = styled.Text`
            color:red;
            font-size:10px;
        `;

const SignBoardBox = styled.View`
    flex:2;
    border:1px;
    border-color:red;
    margin:10px;
    align-items:center;
    justify-content: space-between;
    padding:5px;
`;
    const MainLogoBox = styled.View`
        border:2px;
        border-radius:20px;
        border-color:orange;
        width:40%;
        height:50%;
    `;
    const MainTextBox = styled.View`
        border:2px;
        border-color:orange;
        width:20%;
        height:30px;
    `;

const ImageBox = styled.View`
    flex:2;
    border:1px;
    border-color:red;
    margin:10px;
`;

    const Image1Box = styled.View`
        border:1px;
        border-color:teal;
        width:30%;
        height:100%;
        flex-direction:column;
        justify-content: space-between;
        align-items: center;
    `;  
        const Image1 = styled.Image`
            border:1px;
            border-color:black;
            border-radius:30px;
            width:60px;
            height:60px;
        `;
        const Image1TextBox = styled.View`
            border:1px;
            border-color:black;
            width:100px;
            height:20px;
        `;

    const Image2Box = styled.View``;
        const Image2 = styled.Image``;
        const Image2TextBox = styled.Text``;

    const Image3Box = styled.View``;
        const Image3 = styled.Image``;
        const Image3TextBox = styled.Text``;

const TimetableBoardBox = styled.View`
    flex:5;
    border:1px;
    border-color:red;
    margin:10px;
    align-items: center;
`;
    const TimetaableText = styled.Text`
        border:1px;
        border-color:blue;
        width:100%;
        height:20px;
        font-size:15px;
    `;
    const TimetableBox = styled.View`
        border:1px;
        border-color:blue;
        width:18%;
        height:30px;
        margin-top: 6px;
    `;



const TimeTable =({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackBtn onPress={()=>navigate("Stack",{screen:"LoginPage"})}>
                <BackText>Back</BackText>
            </BackBtn>
            <ConfigureBtn>
                <ConfigureText>Configure</ConfigureText>
            </ConfigureBtn>
        </HeaderBox>
        <SignBoardBox>
            <MainLogoBox></MainLogoBox>
            <MainTextBox></MainTextBox>
        </SignBoardBox>
        <ImageBox>
            <Image1Box>
                <Image1></Image1>
                <Image1TextBox></Image1TextBox>
            </Image1Box>
            <View>

            </View>
            <View>

            </View>
        </ImageBox>
        <TimetableBoardBoxBox>
            <TimetableText>timetable</TimetableText>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
            <TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox><TimetableBox></TimetableBox>
        </TimetableBoardBoxBox>
    </Container>
)

export default TimeTable;