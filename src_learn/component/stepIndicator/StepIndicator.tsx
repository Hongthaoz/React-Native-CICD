import React from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';

import Text from '../text/Text';
import { colors, fontSize } from '../../constant';
import { scale, wScale } from '../../utils/resolutions';

const WIDTH_CIRCLE = wScale(16);
const PADDING_LEFT = scale(25);

interface StepIndicatorProps {
    data: any[];
}

const StepIndicator: React.FC<StepIndicatorProps> = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                {data?.length > 0 ? data.slice(0).reverse().map((item, index) => (
                    <View key={index} style={styles.item}>
                        <View style={styles.circleContainer}>
                            <View style={styles.circle}>
                                <Text bold style={styles.textCircle}>
                                    {data?.length - index}
                                </Text>
                            </View>
                        </View>
                        <Text>{item?.ProcessName}</Text>
                        <Text>{moment(item?.CreateDate).format("HH:mm DD/MM/YYYY")}</Text>
                    </View>
                )) : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: scale(8),
        marginBottom: scale(15),
    },
    content: {
        borderLeftColor: colors.systemGreen,
        borderLeftWidth: 2,
        paddingLeft: PADDING_LEFT,
    },
    item: {
        borderBottomColor: colors.systemGray2_1,
        borderBottomWidth: scale(0.8),
        paddingVertical: scale(12),
    },
    circleContainer: {
        position: 'absolute',
        justifyContent: 'center',
        left: -(PADDING_LEFT + (WIDTH_CIRCLE / 2) + 1), // PADDING_LEFT + half circle + borderLeftWidth
        top: 0,
        bottom: 0,
    },
    circle: {
        backgroundColor: colors.systemGreen,
        width: WIDTH_CIRCLE,
        height: WIDTH_CIRCLE,
        borderRadius: WIDTH_CIRCLE,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textCircle: {
        color: colors.white,
        fontSize: fontSize.size13,
    },
});

export default StepIndicator
