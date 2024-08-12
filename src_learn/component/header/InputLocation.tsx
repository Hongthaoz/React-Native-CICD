import React from 'react';
import { View, StyleSheet, TextInput, ViewStyle } from 'react-native';

import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface InputLocationProp {
    label: string;
    style?: ViewStyle;
    required?: boolean;
    onPress: () => void;
    onChangeText?: (text: string) => void;
}

const InputLocation: React.FC<InputLocationProp> = ({
    label,
    style,
    required,
    onPress,
    ...rest
}) => {

    return (
        <View {...{ style }}>
            <View style={styles.header}>
                <Text bold style={styles.label}>
                    {label}
                    {required && <Text style={styles.required}> *</Text>}
                </Text>
                <Button style={styles.btnAutoGetLocation} {...{ onPress }}>
                    <Text style={styles.txtbtnAutoGetLocation}>current_location</Text>
                </Button>
            </View>
            <TextInput
                autoCapitalize="none"
                placeholderTextColor={colors.systemGray1}
                style={styles.input}
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        color: colors.black,
        borderBottomWidth: scale(1),
        paddingTop: scale(2),
        paddingBottom: scale(0),
    },
    label: {
        color: colors.black,
        fontSize: fontSize.size17,
    },
    required: {
        color: colors.red,
    },
    error: {
        color: colors.red,
        fontSize: fontSize.size11,
        marginTop: scale(5),
    },
    btnAutoGetLocation: {
        backgroundColor: colors.red,
        paddingVertical: scale(2),
        paddingHorizontal: scale(5),
        borderRadius: scale(4),
        marginLeft: scale(10),
    },
    txtbtnAutoGetLocation: {
        color: colors.white,
        fontSize: fontSize.size12,
    },
});

export default InputLocation;