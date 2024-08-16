import React from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ProductItemCart, RootStackParamList } from '../../lib/types';
import { CardItemInCard } from '../../component';
import { scale } from 'utils/resolutions';
import { increaseQuantity, decreaseQuantity, removeProductFromCart } from '../../store/accCart/slide';
import { fontSize } from 'constant';

const CartScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const dispatch = useAppDispatch();
    const { listProductsInCart } = useAppSelector(state => state.Cart);

    const handleIncrease = (id: number) => {
        dispatch(increaseQuantity(id));
    };

    const handleDecrease = (id: number) => {
        dispatch(decreaseQuantity(id));
    };

    const handleDelete = (id: number) => {
        dispatch(removeProductFromCart(id));
    };

    const _keyExtractor = (item: ProductItemCart) => `${item.id}`;

    const _renderCardItem = ({ item }: { item: ProductItemCart }) => (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ProductDetailScreen', { item })}>
            <CardItemInCard
                imageUrl={item.image_url}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                onDecrease={() => handleDecrease(item.id)}
                onIncrease={() => handleIncrease(item.id)}
                onRemove={() => handleDelete(item.id)}
            />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.textHeader}>Your cart</Text>
            <FlatList
                data={listProductsInCart}
                renderItem={_renderCardItem}
                keyExtractor={_keyExtractor}
                contentContainerStyle={styles.flatListContainer}
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
        marginHorizontal:scale(8)
    },
    card: {
        flex: 1,
        margin: 5,
        borderRadius: 10,
    },
    textHeader:{
        fontSize: fontSize.size22,
        fontWeight: 'bold',
        marginBottom: scale(10),
        marginLeft: scale(10),
        marginTop: scale(10),
        color: '#000'
    }
});

export default CartScreen;
