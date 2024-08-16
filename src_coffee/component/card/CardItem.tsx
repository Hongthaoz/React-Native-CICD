import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors, fontSize } from '../../constant';
import { hScale, scale } from 'utils/resolutions';;

interface CardItemProps {
    imageUrl: string;
    name: string;
    price: number;
    description?: string;
}

const CardItem: React.FC<CardItemProps> = ({ imageUrl, name, price, description }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.priceText}>Price: ${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: scale(10),
        backgroundColor: '#FFE4B5',
        borderRadius: scale(10),
    },
    image: {
        height: hScale(150),
        borderRadius: scale(10),
        marginBottom: scale(10),
        backgroundColor: colors.white
    },
    nameText: {
        fontSize: fontSize.size20,
        fontWeight: 'bold',
        marginBottom: scale(5),
        color: '#8B4513'
    },
    descriptionText: {
        fontSize: fontSize.size16,
        marginBottom: scale(10),
        color: colors.systemGray1,
    },
    priceText: {
        fontSize: fontSize.size14,
        color: colors.black,
    },
});

export default CardItem;
