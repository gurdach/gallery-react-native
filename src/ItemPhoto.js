import React from 'react';
import styled from 'styled-components/native'

export const ItemPhoto = ({item, navigate}) => {
    const { urls, user} = item 
  return (
    <Item activeOpacity={0.6} onPress={navigate.bind(this, "Photo", item)}>
        <ImageItem source={{uri: urls.thumb}} />
        <InfoItem >
            <TitleInfo>@{user.instagram_username}</TitleInfo>
            <AuthorInfo>Author: {user.name}</AuthorInfo>
        </InfoItem>
    </Item>
  );
};

const Item = styled.TouchableOpacity`
    flex-direction: row;
    padding: 0px;
    border-bottom-width: 1;
    border-bottom-color: #b9b9b9;
    
`;

const ImageItem = styled.Image`
    height: 115px;
    width: 115px;
`;

const InfoItem = styled.View`
    flex-direction: column;
    padding: 15px;
`;

const TitleInfo = styled.Text`
    font-size: 21px;
    font-weight: bold;
`;

const AuthorInfo = styled.Text`
    font-size: 14px;
    font-weight: 100;
    padding-top: 5;
    color: #9d9d9d;
`;