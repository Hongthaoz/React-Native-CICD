import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { colors } from '../../constant';

interface CardItemProps {
    imageUrl: string;
    name: string;
    price: number;
    description: string;
}

const CardItem: React.FC<CardItemProps> = ({ imageUrl, name, price, description }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.descriptionText}>{description}</Text>
            <Text style={styles.priceText}>Price: ${price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        // margin: 16,
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    nameText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#8B4513'
    },
    descriptionText: {
        fontSize: 16,
        marginBottom: 10,
        color: colors.systemGray1,
    },
    priceText: {
        fontSize: 14,
        color: colors.black,
    },
});

export default CardItem;
