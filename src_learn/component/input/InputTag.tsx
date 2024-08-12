import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Platform, FlatList, ViewStyle, TextStyle } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface InputTagProps {
    label: string;
    name: string;
    values: Record<string, string>;
    style?: ViewStyle;
    errors?: Record<string, string>;
    touched?: Record<string, boolean>;
    required?: boolean;
    handleBlur?: (name: string) => void;
    handleChange?: (name: string, value: any) => void;
    editable?: boolean;
    onPress?: () => void;
    data: any[];
    dataBtn: any[];
    keyLabel: string;
    keyId?: string;
}

const InputTag: React.FC<InputTagProps> = ({
    label,
    name,
    values,
    style,
    errors,
    touched,
    required,
    handleBlur,
    handleChange,
    editable,
    onPress,
    data,
    dataBtn,
    keyLabel,
    keyId = 'id',
    ...props
}) => {
    const [isHashtag, setHashTag] = useState<string | null>(null);

    const handleSelect = (item: any) => {
        if (handleChange) {
            handleChange(name, item);
        }
        if (onPress) {
            onPress();
        }
    };

    const handleSelectTag = (item: any) => {
        if (item.TreeID) {
            setHashTag(item.TreeID);
            handleSelect(item);
        } else if (item.TreeStatus) {
            setHashTag(item.TreeStatus);
            handleSelect(item);
        } else if (item.HeightDescription) {
            setHashTag(item.HeightDescription);
            handleSelect(item);
        }
    };

    const _keyExtractor = (item: any, index: number) => `${item[keyId] || index}-${index}`;

    const _renderItem = ({ item }: { item: any }) => {
        const key = item[keyId];
        return (
            <View style={styles.hashtag}>
                <Button
                    style={isHashtag === key ? styles.btnSelect : styles.btnUnSelect}
                    onPress={() => handleSelectTag(item)}
                >
                    <Text style={isHashtag === key ? styles.txtSelect : styles.txtUnSelect}>
                        {item[keyLabel]}
                    </Text>
                </Button>
            </View>
        );
    };

    return (
        <View style={style}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text bold style={styles.label}>
                        {label}
                        {required && <Text style={styles.required}> *</Text>}
                    </Text>
                </View>
                <View>
                    {!editable && (
                        <Entypo
                            size={scale(18)}
                            name={'block'}
                            style={styles.iconBan}
                            color={'#F58C8D'}
                        />
                    )}
                    <TextInput
                        multiline={true}
                        textAlignVertical="center"
                        autoCapitalize="none"
                        selectTextOnFocus={false}
                        value={values[name] || ''}
                        placeholderTextColor={colors.systemGray1}
                        style={editable ? styles.input : styles.inputDisable}
                        onChangeText={(value) => handleChange && handleChange(name, value)}
                        onBlur={() => handleBlur && handleBlur(name)}
                        {...props}
                    />
                    <FlatList
                        horizontal={true}
                        data={data}
                        keyExtractor={_keyExtractor}
                        renderItem={_renderItem}
                        showsHorizontalScrollIndicator={false}
                        style={styles.containerHashTag}
                    />
                </View>
            </View>
            {errors && touched && touched[name] && errors[name] && (
                <Text style={styles.error}>{errors[name]}</Text>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: scale(1),
        borderRadius: scale(6),
        borderColor: colors.systemGray1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale(Platform.OS === 'ios' ? 6 : -6),
    },
    input: {
        color: colors.black,
        marginLeft: scale(7),
        fontSize: fontSize.size14,
        paddingBottom: scale(Platform.OS === 'ios' ? 3 : 0),
    },
    inputDisable: {
        color: colors.systemGray1,
        marginLeft: scale(7),
        fontSize: fontSize.size14,
        paddingBottom: scale(Platform.OS === 'ios' ? 3 : 0),
    },
    label: {
        marginVertical: scale(5),
        marginLeft: scale(5),
        color: colors.black,
        fontSize: fontSize.size16,
    },
    required: {
        color: colors.red,
    },
    error: {
        marginLeft: scale(7),
        color: colors.red,
        fontSize: fontSize.size11,
        marginTop: scale(5),
    },
    containerHashTag: {
        flexDirection: 'row',
    },
    hashtag: {
        flexDirection: 'row',
        position: 'relative',
    },
    btnUnSelect: {
        backgroundColor: colors.white,
        borderWidth: scale(1),
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        borderColor: colors.systemGray3,
        borderRadius: scale(8),
        marginLeft: scale(3),
        marginBottom: scale(5),
    },
    txtUnSelect: {
        color: colors.aqua_2,
        fontSize: fontSize.size14,
    },
    btnSelect: {
        backgroundColor: colors.aqua,
        paddingHorizontal: scale(10),
        borderColor: colors.systemGray3,
        borderWidth: scale(1),
        paddingVertical: scale(5),
        borderRadius: scale(8),
        marginLeft: scale(3),
        marginBottom: scale(5),
    },
    txtSelect: {
        color: colors.aqua_2,
        fontSize: fontSize.size14,
    },
    iconBan: {
        position: 'absolute',
        right: scale(5),
        bottom: scale(5),
    },
});

export default InputTag;
