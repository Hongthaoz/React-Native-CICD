import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

import { colors, fontSize } from '../../constant';
import { hScale, scale } from 'utils/resolutions';
import { deleteBtn, minus, plus } from '../../svgImg';
import { SvgXml } from 'react-native-svg';

interface CardItemProps {
    imageUrl: string;
    name: string;
    price: number;
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    onRemove: () => void;
}

const CardItemInCart: React.FC<CardItemProps> = ({
    imageUrl,
    name,
    price,
    quantity,
    onIncrease,
    onDecrease,
    onRemove,
}) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.priceText}>${price.toFixed(2)}</Text>
                <View style={styles.quantityContainer}>
                    <TouchableOpacity onPress={onDecrease} style={styles.quantityButton}>
                        <SvgXml xml={minus} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.quantityText}>{quantity}</Text>
                    <TouchableOpacity onPress={onIncrease} style={styles.quantityButton}>
                        <SvgXml xml={plus} style={styles.icon} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
                <SvgXml xml={deleteBtn} style={styles.iconDel} />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: scale(10),
        backgroundColor: '#FFE4B5',
        borderRadius: scale(10),
        marginBottom: scale(10),
    },
    image: {
        width: hScale(100),
        height: hScale(100),
        borderRadius: scale(10),
        backgroundColor: colors.white,
    },
    infoContainer: {
        flex: 1,
        marginLeft: scale(10),
    },
    nameText: {
        fontSize: fontSize.size16,
        fontWeight: 'bold',
        color: '#8B4513',
        marginBottom: scale(5),
    },
    priceText: {
        fontSize: fontSize.size14,
        color: colors.black,
        marginBottom: scale(10),
    },
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
       
    },
    quantityButton: {
        width: scale(30),
        height: scale(30),
        borderRadius: scale(5),
        borderWidth: 1,
        borderColor: colors.systemGray1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityText: {
        fontSize: fontSize.size16,
        color: colors.black,
        marginHorizontal: scale(10),
    },
    deleteButton: {
        padding: scale(5),
    },
    iconDel: {
        width: scale(20),
        height: scale(20),
        color: colors.red
    },
    icon:{
        width: scale(16),
        height: scale(16),
    }
});

export default CardItemInCart;
