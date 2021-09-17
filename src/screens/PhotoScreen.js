import React from 'react'
import { Image, Text, View } from 'react-native';
import styled from 'styled-components/native'

const PhotoScreen = ({navigation}) => {
    return (
        <ViewBlock>
            <ImageFull source={{uri: navigation.getParam('urls')['raw']}}/>
        </ViewBlock>
    )
}

PhotoScreen.navigationOptions = {
    title: 'Фото',
}

const ImageFull = styled.Image`
    width: 100%;
    height: 70%;
`;

const ViewBlock = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export default PhotoScreen;