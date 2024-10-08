import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ProductItemCart, RootStackParamList } from '../../lib/types';
import { CardItem } from '../../component';
import { scale } from 'utils/resolutions';
import { fontSize } from 'constant';

const FavoriteCoffeeScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useAppDispatch();
    const { listProductFavourites } = useAppSelector(state => state.Home);

    const _keyExtractor = (item: ProductItemCart) => `${item.id}`;

    const _renderCardItem = ({ item }: { item: ProductItemCart }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetailScreen', { item })}>
            <CardItem
                imageUrl={item.image_url}
                name={item.name}
                price={item.price}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Your favourites</Text>
            <FlatList
                data={listProductFavourites}
                renderItem={_renderCardItem}
                keyExtractor={_keyExtractor}
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    flatListContainer: {
        justifyContent: 'space-between',
        paddingBottom: scale(150),
        marginHorizontal: scale(8)
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
    },
    textHeader: {
        fontSize: fontSize.size22,
        fontWeight: 'bold',
        marginBottom: scale(10),
        marginLeft: scale(10),
        marginTop: scale(10),
        color: '#000'
    }
});

export default FavoriteCoffeeScreen;
