import React, {useState, useEffect} from 'react'
import { FlatList } from 'react-native';
import {ItemPhoto} from '../ItemPhoto';
import styled from 'styled-components/native';
import { useDispatch, useSelector } from 'react-redux';
import { getItems } from '../redux/actions/galleryActions'

import HOC from '../../HOC';


const GalleryScreen = ({navigation, store}) => {
    const [data, setData] = useState(null);
    const dispatch = useDispatch();
    const items = useSelector(state=> state.gallery.items);
    console.log(items);

    useEffect(() => {
        dispatch(getItems())
    }, [])

    return (
            <Container>
                <FlatList 
                    renderItem={({item}) => <ItemPhoto navigate={navigation.navigate} item={item}/>}
                    data={items}
                    keyExtractor={(item, index) => item.id}
                />
            </Container>
    )
}

GalleryScreen.navigationOptions = {
    title: 'Галерея',
}

const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #fff;
`;

export default HOC(GalleryScreen);
