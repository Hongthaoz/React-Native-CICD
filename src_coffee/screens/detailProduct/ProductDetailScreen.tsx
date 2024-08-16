import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { fetchProductById } from "../../store/accHome/thunk";
import { RootStackParamList } from '../../lib/types';
import { LoadingModal, NotifierAlert } from '../../component';
import { colors, fontSize } from 'constant';
import { hScale, scale, wScale } from 'utils/resolutions';
import { addProductToCart, updateListProductsInCart } from "../../store/accCart/slide";
import { SvgXml } from 'react-native-svg';
import { heartLove, heartLove_active } from '../../svgImg';
import favorites from 'store/redux/favorites';
import { addProductFavourite } from '../../store/accHome/slide';

type ProductDetailScreenRouteProp = RouteProp<RootStackParamList, 'ProductDetailScreen'>;
const { width, height } = Dimensions.get('window')

const ProductDetailScreen: React.FC = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const route = useRoute<ProductDetailScreenRouteProp>();
    const dispatch = useAppDispatch();
    const { item } = route.params;
    const { detailProduct, isSubmitting, } = useAppSelector(state => state.Home);
    const { listProductsInCart } = useAppSelector(state => state.Cart);
    const [showNotification, setShowNotification] = useState(false);
    const [isLoveProduct, setIsLoveProduct] = useState(item?.favorites);

    useEffect(() => {
        dispatch(fetchProductById(item.id));
    }, [item.id]);

    const handleAddToCart = () => {
        if (detailProduct) {
            const existingProductIndex = listProductsInCart.findIndex(
                (product) => product.id === detailProduct.id
            );

            if (existingProductIndex >= 0) {
                const updatedProduct = {
                    ...listProductsInCart[existingProductIndex],
                    quantity: listProductsInCart[existingProductIndex].quantity + 1,
                };
                const updatedList = [...listProductsInCart];
                updatedList[existingProductIndex] = updatedProduct;
                dispatch(updateListProductsInCart(updatedList));
            } else {
                const productWithQuantity = {
                    ...detailProduct,
                    quantity: 1,
                    favorites: isLoveProduct ? true : false
                };
                dispatch(addProductToCart(productWithQuantity));
            }
            setShowNotification(true);
        }
    };

    const handleLoveProduct = () => {
        setIsLoveProduct(!isLoveProduct);
        if (detailProduct) {
            const productWithQuantity = {
                ...detailProduct,
                quantity: 1,
                favorites: !isLoveProduct
            };
            dispatch(addProductFavourite(productWithQuantity));
        }
    };

    useEffect(() => {
        if (showNotification) {
            const timer = setTimeout(() => {
                setShowNotification(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showNotification]);

    if (isSubmitting) {
        return <LoadingModal visible={isSubmitting} />;
    }

    if (!detailProduct) {
        return <View style={styles.container}><Text>Product not found</Text></View>;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <View style={styles.btnHeader}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" color={'#FFE4B5'} size={scale(18)} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnLove} onPress={handleLoveProduct}>
                        <SvgXml xml={isLoveProduct ? heartLove_active : heartLove} style={styles.iconLove} />
                    </TouchableOpacity>
                </View>
                <Image source={{ uri: detailProduct?.image_url }} style={styles.image} />

            </View>

            <View style={styles.bodyItem}>
                <View style={styles.header}>
                    <Text style={styles.nameText}>{detailProduct.name}</Text>
                    <Text style={styles.priceText}>${detailProduct.price}</Text>
                </View>

                <Text style={styles.descriptionText}>{detailProduct.description}</Text>
                <Text style={styles.descriptionText}>Weight: {detailProduct.weight}g</Text>
                <Text style={styles.descriptionText}>Made in {detailProduct.region}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Flavor Profile:</Text>
                    <Text style={styles.sectionContent}>
                        {detailProduct.flavor_profile.join(', ')}
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Grind Options:</Text>
                    <Text style={styles.sectionContent}>
                        {detailProduct.grind_option.join(', ')}
                    </Text>
                </View>
            </View>

            <View style={styles.containerFooter}>
                <TouchableOpacity style={styles.btnAddToCard} onPress={handleAddToCart}>
                    <Text style={styles.txtBtnAddToCard}>Thêm vào giỏ hàng</Text>
                </TouchableOpacity>
            </View>

            {showNotification && (
                <NotifierAlert
                    duration={3000}
                    title="Thông báo"
                    message="Đã thêm vào giỏ hàng thành công"
                    type="success"
                />
            )}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    containerHeader: {
        backgroundColor: '#FFE4B5',
    },
    btnHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btnBack: {
        margin: scale(16),
        backgroundColor: '#d29a69',
        height: hScale(40),
        width: wScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(20),
    },
    image: {
        width: width,
        height: height / 3.2,
        marginBottom: scale(16)
    },
    bodyItem: {
        marginHorizontal: scale(16)
    },
    cardContainer: {
        padding: scale(10),
        backgroundColor: '#FFE4B5',
        borderRadius: scale(10),
    },
    nameText: {
        fontSize: fontSize.size20,
        fontWeight: 'bold',
        marginBottom: scale(5),
        color: '#8B4513'
    },
    descriptionText: {
        fontSize: fontSize.size16,
        marginBottom: scale(5),
        color: colors.black,
    },
    priceText: {
        fontSize: fontSize.size14,
        color: colors.black,
        fontWeight: '500'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: scale(10)
    }, section: {
        marginVertical: scale(10),
    },
    sectionTitle: {
        fontSize: fontSize.size18,
        fontWeight: 'bold',
        marginBottom: scale(5),
        color: '#8B4513',
    },
    sectionContent: {
        fontSize: fontSize.size16,
        color: colors.black,
    },
    containerFooter: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnAddToCard: {
        backgroundColor: '#8B4513',
        width: width - 32,
        height: hScale(40),
        borderRadius: scale(16),
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtBtnAddToCard: {
        fontSize: fontSize.size18,
        color: colors.white,
        fontWeight: 'bold'
    },
    btnLove: {
        margin: scale(16),
        backgroundColor: '#d29a69',
        height: hScale(40),
        width: wScale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: scale(20),
    },
    iconLove: {
        width: scale(20),
        height: scale(20),
    }
});

export default ProductDetailScreen;
