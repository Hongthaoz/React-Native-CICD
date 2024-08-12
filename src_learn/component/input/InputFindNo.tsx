import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Platform, ViewStyle, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import { Text } from '../text';
import { Button } from '../button';
import { colors, fontSize } from '../../constant';
import { scale } from '../../utils/resolutions';

interface InputFindNoProps {
    label: string;
    unit?: string;
    name: string;
    values: Record<string, string>;
    style?: ViewStyle;
    errors?: Record<string, string>;
    touched?: Record<string, boolean>;
    required?: boolean;
    handleBlur?: (name: string) => (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    handleChange?: (name: string) => (text: string) => void;
    editable?: boolean;
    onPress?: () => void;
    data?: {
        OddNumber?: number;
        EvenNumber?: number;
    };
    dataBtn?: any[];
    keyLabel?: string;
    keyId?: string;
    setFieldValue?: (field: string, value: any) => void;
}

const InputFindNo: React.FC<InputFindNoProps> = ({
    label,
    unit,
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
    setFieldValue,
    ...props
}) => {
    const [isHashtag, setHashTag] = useState<number | null>(null);

    const setDataInput = (number: number) => {
        setHashTag(number);
    };

    // Fallback function for onBlur
    const handleBlurCallback = handleBlur ? handleBlur(name) : () => { };

    return (
        <View {...{ style }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text bold style={styles.label}>
                        {label}
                        {required ? '*' : ''}
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
                        style={styles.input}
                        textAlignVertical='center'
                        autoCapitalize="none"
                        editable={editable}
                        selectTextOnFocus={false}
                        placeholder={`enter_here`}
                        placeholderTextColor={colors.systemGray1}
                        onChangeText={(text) => handleChange && handleChange(name)(text)}
                        onBlur={handleBlurCallback}
                        value={values[name]}
                    />

                    {editable && data && (
                        <View style={styles.hashtag}>
                            {data.OddNumber !== undefined && (
                                <Button
                                    style={isHashtag === data.OddNumber ? styles.btnSelect : styles.btnUnSelect}
                                    onPress={() => {
                                        if (setFieldValue && data && data.OddNumber !== undefined) {
                                            setFieldValue(name, data.OddNumber.toString());
                                        }
                                    }}
                                >
                                    <Text style={isHashtag === data.OddNumber ? styles.txtSelect : styles.txtUnSelect}>
                                        {data.OddNumber}
                                    </Text>
                                </Button>
                            )}
                            {data.EvenNumber !== undefined && (
                                <Button
                                    style={isHashtag === data.EvenNumber ? styles.btnSelect : styles.btnUnSelect}
                                    onPress={() => {
                                        if (setFieldValue && data && data.EvenNumber !== undefined) {
                                            setFieldValue(name, data.EvenNumber.toString());
                                        }
                                    }}
                                >
                                    <Text style={isHashtag === data.EvenNumber ? styles.txtSelect : styles.txtUnSelect}>
                                        {data.EvenNumber}
                                    </Text>
                                </Button>
                            )}
                        </View>
                    )}
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
        borderRadius: scale(6),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: scale(Platform.OS === 'ios' ? 6 : -6)
    },
    input: {
        color: colors.black,
        marginLeft: scale(7),
        fontSize: fontSize.size14,
        paddingBottom: scale(Platform.OS === "ios" ? 3 : 0),
        borderBottomWidth: scale(1),
        borderColor: colors.systemGray3,
    },
    inputDisable: {
        color: colors.systemGray1,
        marginLeft: scale(7),
        fontSize: fontSize.size14,
        paddingBottom: scale(Platform.OS === "ios" ? 3 : 0),
        borderBottomWidth: scale(1),
        borderColor: colors.systemGray3,
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
    hashtag: {
        flexDirection: 'row',
        position: 'relative',
        marginTop: scale(10),
    },
    btnUnSelect: {
        backgroundColor: colors.white,
        borderWidth: scale(1),
        paddingHorizontal: scale(10),
        paddingVertical: scale(5),
        borderColor: colors.systemGray3,
        borderRadius: scale(8),
        marginLeft: scale(3),
        marginBottom: scale(5)
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
        marginBottom: scale(5)
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

export default InputFindNo;
