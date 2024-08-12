import React from 'react';
import { View, StyleSheet, Image, ImageSourcePropType } from 'react-native';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Text } from '../text';
import { colors, fontSize } from '../../constant';
import { scale, wScale } from '../../utils/resolutions';

interface CardHeaderProps {
    icon: string;
    header: string;
    img?: ImageSourcePropType;
}

const CardHeader: React.FC<CardHeaderProps> = ({ icon, header, img }) => {
    return (
        <View style={styles.headerContainer}>
            {img ? <Image source={img} style={styles.image} /> : null}
            <MCIcons name={icon} color={colors.systemGreen} size={scale(20)} />
            <Text style={styles.header}>{header}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: scale(0.7),
        paddingBottom: scale(5),
        borderBottomColor: colors.systemGray3,
    },
    header: {
        marginLeft: scale(5),
        color: colors.black,
        fontSize: fontSize.size17,
        fontWeight: '600',
    },
    image: {
        width: wScale(18),
        height: undefined,
        aspectRatio: 300 / 300,
    },
});

export default CardHeader;
