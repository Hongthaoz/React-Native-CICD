import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet, Dimensions, StatusBar, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchListSplashScreen } from "../../store/accSplash/thunk";
import { RootState } from "../../store/index";
import { LoadingModal } from "../../component";
import { hScale, scale } from "utils/resolutions";
import { fontSize } from "constant";
import { RootStackParamList } from '../../lib/types';

const { height, width } = Dimensions.get('window');

const SplashScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const splashList = useAppSelector((state: RootState) => state.Splash.listSplashScreen);
    const isSubmitting = useAppSelector((state: RootState) => state.Splash.isSubmitting);
    const today = new Date().getDay();
    const currentSplash = splashList.find(item => item.id === today);

    useEffect(() => {
        dispatch(fetchListSplashScreen());
    }, [dispatch]);

    const handleGotoHome = () => {
        navigation.navigate('TabNavigator');
    }

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            {currentSplash ? (
                <>
                    <Image
                        source={{ uri: currentSplash.image }}
                        style={styles.image}
                    />
                    <TouchableOpacity style={styles.btn} onPress={handleGotoHome}>
                        <Text style={styles.textBtn}>Get Started</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <Text>Không có dữ liệu splash cho ngày hôm nay</Text>
            )}
            <LoadingModal visible={isSubmitting} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    image: {
        width: width,
        height: height,
        position: 'absolute',
    },
    btn: {
        position: 'absolute',
        bottom: scale(20),
        width: width - 32,
        height: hScale(60),
        backgroundColor: '#d29a69',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(32),
    },
    textBtn: {
        fontSize: fontSize.size22,
        fontWeight: 'bold',
        color: 'white',
    },
});

export default SplashScreen;
