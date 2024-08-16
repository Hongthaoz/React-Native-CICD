import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Dimensions, ImageBackground, TouchableOpacity, } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { CardItem, LoadingModal, SearchBar, searchItems } from "../../component";
import { scale } from "utils/resolutions";
import { RootStackParamList, ProductItem } from '../../lib/types';
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { RootState } from "../../store/index";
import { fetchListProductScreen } from "../../store/accHome/thunk";

const { width, height } = Dimensions.get('window')

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useAppDispatch();
    const { listProducts, isSubmitting } = useAppSelector(state => state.Home);
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState(listProducts ? listProducts : []);

    const onChangeText = (text: string) => {
        setSearchText(text);
        const resultsData = searchItems(listProducts, text);
        setSearchResults(resultsData);
    };

    useEffect(() => {
        dispatch(fetchListProductScreen());
    }, []);

    const _keyExtractor = (item: ProductItem) => `${item.id}`;

    const _renderCardItem = ({ item }: { item: ProductItem }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetailScreen', { item })}>
            <CardItem
                imageUrl={item.image_url}
                name={item.name}
                price={item.price}
                description={item.description}
            />
        </TouchableOpacity>
    );

    useEffect(() => {
        setSearchResults(listProducts ? listProducts : [])
    }, [listProducts]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../../assets/banner.jpg')} style={styles.image} >
                <View style={styles.search}>
                    <SearchBar
                        value={searchText}
                        onChangeText={text => {
                            setSearchText(text);
                            onChangeText(text);
                        }}
                    />
                </View>
            </ImageBackground>
            <View style={styles.containerFlat}>
                <FlatList
                    data={searchResults}
                    renderItem={_renderCardItem}
                    keyExtractor={_keyExtractor}
                    contentContainerStyle={styles.flatListContainer}
                    numColumns={2}
                />
            </View>
            <LoadingModal visible={isSubmitting} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    containerFlat: {
        marginHorizontal: scale(10)
    },
    flatListContainer: {
        justifyContent: 'space-between',
        paddingBottom: scale(150)
    },
    card: {
        flex: 1,
        margin: 5,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        overflow: 'hidden',
    },
    search: {
        marginHorizontal: scale(16),
        marginBottom: scale(16),
        marginTop: (height / 4) / 2
    },
    image: {
        width: width,
        height: height / 4
    },
});

export default HomeScreen;
