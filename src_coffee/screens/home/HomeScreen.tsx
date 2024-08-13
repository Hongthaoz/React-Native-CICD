import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Dimensions, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from '../../lib/types';
import { colors } from "../../constant";
import { CoffeeList } from "../../data/dummy-data";
import { CardItem } from "../../component";
import { hScale, scale } from "utils/resolutions";
import { fontSize } from "constant";

const { width, height } = Dimensions.get('window')

interface CoffeeItem {
    id: number;
    name: string;
    prices: number;
    imageUrl: string;
    description: string;
    coffeeType: number;
}

interface Coffee {
    id: number;
    name: string;
    listItems: CoffeeItem[];
}

const HomeScreen = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    const [selectedCoffee, setSelectedCoffee] = useState<Coffee>(CoffeeList[0]);

    const handleTabPress = (coffeeType: Coffee) => {
        const selected = CoffeeList.find(item => item.id === coffeeType.id);
        if (selected) {
            setSelectedCoffee(selected);
        }
    };

    const _keyExtractor = (item: CoffeeItem) => `${item.id}`;

    const _renderCardItem = ({ item }: { item: CoffeeItem }) => (
        <View style={styles.card}>
            <CardItem
                imageUrl={item.imageUrl}
                name={item.name}
                price={item.prices}
                description={item.description}
            />
        </View>

    );

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/banner.jpg')} style={styles.image} />
            <ScrollView
                style={styles.tabContainer}
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {CoffeeList.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={[
                            styles.tabButton,
                            item.id === selectedCoffee.id && styles.activeTab
                        ]}
                        onPress={() => handleTabPress(item)}
                    >
                        <Text style={item.id === selectedCoffee.id ? styles.tabTextActive : styles.tabText}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <FlatList
                data={selectedCoffee.listItems}
                renderItem={_renderCardItem}
                keyExtractor={_keyExtractor}
                contentContainerStyle={styles.flatListContainer}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabContainer: {
        paddingHorizontal: scale(10),
        marginTop: scale(8),
        height: hScale(70),
        marginBottom:scale(8)
    },
    tabButton: {
        backgroundColor: '#E8E8E8',
        paddingVertical: hScale(10),
        paddingHorizontal: scale(15),
        borderRadius: scale(8),
        marginHorizontal: scale(5),
    },
    activeTab: {
        backgroundColor: '#d29a69',
        color: colors.white,
    },
    tabText: {
        color: '#8B4513',
        fontSize: fontSize.size16,
    },
    tabTextActive: {
        color: colors.white,
        fontSize: fontSize.size16,
    },
    flatListContainer: {
        marginHorizontal:scale(8),
        paddingVertical: hScale(10),
        flexGrow: 1,
    },
    image: {
        width: width,
        height: height / 3
    },
    card: {
        marginHorizontal: scale(12),
        marginBottom: scale(16),
    }
});

export default HomeScreen;
