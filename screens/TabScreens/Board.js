import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    margin:10px;
`;

const HeaderBox = styled.View`
    flex:1;
    margin:10px;
    margin-left: 20px;
    margin-right: 20px;

    flex-direction:row;
    justify-content: space-between;
    align-items: center;
`;
    const BackView = styled.View`
        border-color: orange;
        width:25px;
        height:40px;
    `;
        const BackBtn = styled.TouchableOpacity`
            border : 1px;
            width  : 100%;
            height : 40px;
        `;
            const BackText = styled.Text`
                color : black;
                font-size: 20px;
            `;
    const BoardTextBox = styled.View`
        border-color: black;
        border-radius: 7px;
        background-color: lightgray;
        width : 80%;
        height: 40px;
        flex-direction: row;
        justify-content:space-between;
    `;
        const BoardText = styled.Text`
            margin-top: 5px;
            margin-left: 10px;
            font-size: 20px;
            color : black;
        `;
        const SearchBtn = styled.TouchableOpacity`
            border:1px;
            border-color:black;
            width:30px;
            height:30px;
            margin :4px;
            margin-right: 10px;
        `;
            const SearchText = styled.Text`
                margin-top: 3px;
                color : black;
                font-size: 15px;
            `;
    const PlusView = styled.View`
        border-color: orange;
        width:15px;
        height:40px;
    `;
        const PlusBtn = styled.TouchableOpacity`
            border : 1px;
            width  : 100%;
            height : 100%;
        `;
            const PlusText = styled.Text`
                color : black;
                font-size: 10px;
            `;
//------------------------------------------------------------------------------
//-------------------------------핫 게시판---------------------------------------
//------------------------------------------------------------------------------
const HotBoardBox = styled.View`
    flex : 2;
    background-color: #E0E0E0;
    border-radius: 15px;
    height:150px; 
    margin:10px;
`;
    const HotTextBox = styled.View`
        height:40px;
        flex-direction: row;
        padding-left: 15px
    `;
        const HotIconBox = styled.View`
            height:24px;
            width:24px;
            background-color: #606060;
            margin-left: 20px;
            margin: 5px;
            margin-top: 10px;
        `;   
        const HotText = styled.Text`
            padding-top:10px;
            color : black;
            font-size: 17px;
        `;
    const HotArticle = styled.View`
        border-radius: 15px;
        background-color: #C4BFBF;
        height: 110px;
        flex-direction: row;
    `;
        const AricleText = styled.View`
            border:1px;
            border-radius: 15px;
            width: 75%;
        `;
        const ArticleImageBox = styled.View`
            width: 25%;
            align-items: center;
        `;
            const HotImage = styled.Image`
                border-radius: 10px;
                margin-top: 15px;
                background-color: grey;
                width : 60px;
                height : 60px;
            `;
            const HotImageText = styled.Text`
                margin-top: 5px;
                color: black;
                font-size: 10px;
            `;
const HotPlusBar = styled.View`
     border:1px;
     margin-top: 3px;
     margin-left: 10px;
     margin-right: 10px;
     margin-bottom : 20px;
     height: 10px;    
`;  

//----------------------------------------------------------------------------------------------
//------------------------------전공 통합 게시판-------------------------------------------------
//----------------------------------------------------------------------------------------------
 const AllBoardBox = styled.View`
    border-radius:10px;
    background-color: #1655E9;
    margin: 10px;
    height: 40px;
    margin-bottom: 5px;
`; 
    const AllBoardText = styled.Text`
        color : white;
        margin-top: 11px;
        font-size: 13px;
        align-self: center;
    `;

const AllMajorBox = styled.View`
    align-self: center;
    margin:10px;
    margin-top: 5px;
    height: 500px;
    width: 80%;
`; 
    const Major1 = styled.View`
        height: 20%;
        width : 100%;
        flex-direction: row;
        align-items: center;
    `;
        const Major11 = styled.TouchableOpacity`
            border: 1px;
            width : 30%;
            height : 100%;
            margin: 4px;
            align-items: center;
        `;
            const Image11 = styled.View`
                border: 1px;
                border-color: black;
                border-radius: 30px;
                width: 60px;
                height: 60px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox11 = styled.View`
                background-color: lightgray;
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image11Text = styled.Text`
                    font-size : 10px;
                    color: black;
            `;
        const Major12 = styled.TouchableOpacity`
            border: 1px;
            width : 30%;
            height : 100%;
            margin: 4px;
            align-items: center;
        `;
            const Image12 = styled.View`
                border: 1px;
                border-color: black;
                border-radius: 30px;
                width: 60px;
                height: 60px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox12 = styled.View`
                background-color: lightgray;
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image12Text = styled.Text`
                    font-size : 10px;
                    color: black;
            `;
        const Major13 = styled.TouchableOpacity`
            border: 1px;
            width : 30%;
            height : 100%;
            margin: 4px; 
            align-items: center;
        `;
            const Image13 = styled.View`
                border: 1px;
                border-color: black;
                border-radius: 30px;
                width: 60px;
                height: 60px;
                margin-top: 5px;
                margin-bottom: 10px;
            `;
            const TextBox13 = styled.View`
                background-color: lightgray;
                width : 60px;
                height: 13px;
                align-items: center;
            `;
                const Image13Text = styled.Text`
                    font-size : 10px;
                    color: black;
            `;

const Board = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn>
                    <BackText>{' <'}</BackText>
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>게시판</BoardText>   
                <SearchBtn>
                    <SearchText>검색</SearchText>
                </SearchBtn>
            </BoardTextBox>
            <PlusView>
                <PlusBtn> 
                    <PlusText>{' :'}</PlusText>
                </PlusBtn>
            </PlusView>
        </HeaderBox>
        <HotBoardBox>
            <HotTextBox>
                <HotIconBox></HotIconBox>
                <HotText>HOT</HotText>
            </HotTextBox>
            <HotArticle>
                <AricleText></AricleText>
                <ArticleImageBox>
                    <HotImage></HotImage>
                    <HotImageText>좋아요 수</HotImageText>
                </ArticleImageBox>
            </HotArticle>
        </HotBoardBox>
        <HotPlusBar></HotPlusBar>
        <AllBoardBox>
            <AllBoardText>통합 게시판</AllBoardText>
        </AllBoardBox>
        <AllMajorBox>
            <Major1>
               <Major11
                onPress={()=>navigate("Stack",{screen:"Designboard"})}
               >
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
            <Major1>
               <Major11>
                    <Image11></Image11>
                    <TextBox11>
                        <Image11Text>디자인</Image11Text>
                    </TextBox11>
               </Major11>
               <Major12>
                    <Image12></Image12>
                    <TextBox12>
                        <Image12Text>컴퓨터</Image12Text>
                    </TextBox12>
               </Major12>
               <Major13>
                    <Image13></Image13>
                    <TextBox13>
                        <Image13Text>게임</Image13Text>
                    </TextBox13>
               </Major13>
            </Major1>
        </AllMajorBox>
    </Container>
    
)
export default Board;