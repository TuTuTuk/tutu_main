import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

const Container = styled.ScrollView.attrs(()=>({
    contentContainerStyle:{
        showsVerticalScrollIndicator:false,
    }
}))`
    flex:1;
    border:1px;
`;
//----------------------------------------------------------------------------
//----------------------------------검색box------------------------------------
//----------------------------------------------------------------------------
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

//-----------------------------------------------------------------------------
//-----------------------------SearchFilter------------------------------------
//-----------------------------------------------------------------------------
 const SearchFilterBox = styled.View`
    margin:10px;
    margin-left: 20px;
    margin-right: 20px;
    height : 40px;
    flex-direction:row;
 `;   
    const FilterBox = styled.View`
        height : 40px;
        flex-direction:row;
        width: 70%;
    `;
        const Filter1 = styled.View`
            border: 1px;
            border-color: blue;
            border-radius: 3px;
            margin: 6px;
            margin-left : 0px;
            flex-direction: row;
        `;
            const Filter1Text = styled.Text`
                margin: 3px;
                font-size: 13px;
                color: blue;
            `;
            const TextX1 = styled.Text`
                margin: 3px;
                font-size: 13px;
                margin-right: 3px;
            `;
        const Filter2 = styled.View`
            border: 1px;
            border-color: orange;
            border-radius: 3px;
            margin: 6px;
            flex-direction: row;
        `;
            const Filter2Text = styled.Text`
                margin: 3px;
                font-size: 13px;
                color: orange;
            `;
            const TextX2 = styled.Text`
                color : orange;
                margin: 3px;
                font-size: 13px;
                margin-right: 3px;
            `;
    const SearchFilterBtn = styled.View`
        background-color : #1655E9;
        border-radius: 8px;
        width: 30%;
        align-items: center;
    `;
        const SearchFilterText = styled.Text`
            margin: 9px;
            font-size: 15px;
            color: white;
        `;
//--------------------------------------------------------------------------
//------------------------------최근 게시판----------------------------------
//--------------------------------------------------------------------------
const BoardsBox = styled.View`
    margin-top :20px;
    margin-left: 20px;
    margin-right: 20px;
 `;   
    const BoardBox1 = styled.View`
        border-radius: 15px;
        background-color: lightgrey;
        height: 130px;
        flex-direction: row;
        margin-top : 5px;
        margin-bottom: 5px;
    `;
        const BoardContentBox1 = styled.View`
            width:65%;
            font-size: 10px;
            margin: 10px;
            border: 1px;
        `;
            const TitleBox = styled.View`
                margin-bottom: 0px;
                height : 25px;
            `;
                const TitleText = styled.Text`
                    margin-left: 5px;
                    font-size: 15px;
                `;
            const ContentBox= styled.View`
                height : 50px;
            `;
                const ContentText = styled.Text`
                    margin-left: 5px;
                `;
            const KeywordBox1 = styled.View`
                margin-top: 5px;
                margin-bottom: 0px;
                height: 20px;
                flex-direction: row;
            `;
                const KeywordBox1Text = styled.View`
                    background-color: blue;
                    border-radius: 5px;
                    margin-left: 5px;
                `;
                    const KeywordText1 = styled.Text`
                        color : white;
                        margin: 2px;
                        font-size: 10px;
                    `;
        const BoardImageBox1 = styled.View`
            border-color:black;
            width:25%;
            align-items: center;
            margin: 10px;
            margin-left: 0px;
            border: 1px;
        `;
            const ContentImage = styled.Image`
                border-radius: 10px;
                margin-top: 10px;
                background-color: grey;
                width : 70px;
                height : 70px;
            `;
            const ContentImageText = styled.Text`
                margin-top: 10px;
                color: black;
                font-size: 15px;
            `;   

const Designboard = ({navigation:{navigate}})=>(
    <Container>
        <HeaderBox>
            <BackView>
                <BackBtn
                    onPress={()=>navigate("Stack",{screen:"Board"})}>
                    <BackText>{' <'}</BackText>
                </BackBtn>
            </BackView>
            <BoardTextBox>
                <BoardText>디자인공학부</BoardText>   
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
        <SearchFilterBox>
            <FilterBox>
             <Filter1>
                 <Filter1Text>디자인공학부</Filter1Text>
                 <TextX1> X</TextX1>
             </Filter1>
             <Filter2>
                 <Filter2Text>교양</Filter2Text>
                 <TextX2> X</TextX2>
             </Filter2>
            </FilterBox>
            <SearchFilterBtn>
               <SearchFilterText>검색필터</SearchFilterText>
            </SearchFilterBtn>
        </SearchFilterBox>
        <BoardsBox>
            <BoardBox1>
                <BoardContentBox1>
                    <TitleBox>
                        <TitleText>제목</TitleText>
                    </TitleBox>
                    <ContentBox>
                        <ContentText>내용 입력</ContentText>
                    </ContentBox>
                    <KeywordBox1>
                        <KeywordBox1Text>
                            <KeywordText1>#키워드</KeywordText1>
                        </KeywordBox1Text>
                    </KeywordBox1>
                </BoardContentBox1>
                <BoardImageBox1>
                    <ContentImage></ContentImage>
                    <ContentImageText>인기도</ContentImageText>
                </BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
            <BoardBox1>
                <BoardContentBox1></BoardContentBox1>
                <BoardImageBox1></BoardImageBox1>
            </BoardBox1>
        </BoardsBox>
    </Container>
    
)

export default Designboard;