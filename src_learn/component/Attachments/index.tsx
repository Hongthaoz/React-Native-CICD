import React, { useState } from 'react';
import { View, StyleSheet, Alert, Platform } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImagePicker from 'react-native-image-crop-picker';
import {
    check,
    request,
    PERMISSIONS,
    RESULTS,
    openSettings,
} from 'react-native-permissions';
import Modal from 'react-native-modal';

import { Text } from '../text';
import { Button } from '../button';
import { RowImage } from '../image';

import { scale } from '../../utils/resolutions';
import { colors, fontSize } from '../../constant';

interface AttachmentsProp {
    images: any[];
    name: string;
    setFieldValue: any;
}

const Attachments: React.FC<AttachmentsProp> = ({ images, name, setFieldValue }) => {
    //   const {
    //     languagesStore: { i18n },
    //   } = useStore();
    const [visible, setVisible] = useState(false);

    const handleCloseModal = () => {
        setVisible(false);
    };

    const handleRemove = (path: string) => {
        const newImages = images.filter(img => {
            if (img.path) {
                return img.path !== path;
            } else {
                return img.ImageLink !== path;
            }
        });
        setFieldValue(name, newImages);
    };

    const getImageGallery = () => { 
        ImagePicker.openPicker({
            mediaType: 'photo',
            multiple: true,
            compressImageQuality: 0.4,
        }).then(results => {
            if (results?.length > 0) {
                handleCloseModal();
                setTimeout(() => {
                    setFieldValue(name, [...images, ...results]);
                }, 500);
            }
        });
    };

    const takePhoto = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            compressImageQuality: 0.4,
        }).then(result => {
            if (result) {
                console.log('result', result)
                handleCloseModal();
                setTimeout(() => {
                    let newResult = [...images];
                    newResult.push(result);
                    setFieldValue(name, newResult);
                }, 500);
            }
        });
    };

    const alertChooseTypeUpload = () => {
        checkPermissionCamera();
    };

    const checkPermissionCamera = () => {
        check(
            Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.CAMERA
                : PERMISSIONS.IOS.CAMERA,
        ).then(result => {
            switch (result) {
                case RESULTS.GRANTED:
                    checkPermissionReadStorage();
                    break;
                case RESULTS.UNAVAILABLE:
                case RESULTS.DENIED:
                case RESULTS.LIMITED:
                    requestPermissionCamera();
                    break;
                case RESULTS.BLOCKED:
                    showAlertPermission();
                    break;
            }
        });
    };

    const requestPermissionCamera = () => {
        request(
            Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.CAMERA
                : PERMISSIONS.IOS.CAMERA,
        ).then(result => {
            if (result === RESULTS.GRANTED) {
                checkPermissionReadStorage();
            } else {
                showAlertPermission();
            }
        });
    };

    const checkPermissionReadStorage = () => {
        check(
            Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                : PERMISSIONS.IOS.PHOTO_LIBRARY,
        ).then(result => {
            switch (result) {
                case RESULTS.GRANTED:
                    setVisible(true);
                    break;
                case RESULTS.UNAVAILABLE:
                case RESULTS.DENIED:
                case RESULTS.LIMITED:
                    requestPermissionReadStorage();
                    break;
                case RESULTS.BLOCKED:
                    showAlertPermission();
                    break;
            }
        });
    };

    const requestPermissionReadStorage = () => {
        request(
            Platform.OS === 'android'
                ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                : PERMISSIONS.IOS.PHOTO_LIBRARY,
        ).then(result => {
            if (result === RESULTS.GRANTED) {
                setVisible(true);
            } else {
                showAlertPermission();
            }
        });
    };

    const showAlertPermission = () => {
        Alert.alert(`notify`, `add_device_permission`, [
            {
                text: `alert_btn_cancel`,
                style: 'cancel',
            },
            { text: `alert_open_settings`, onPress: () => openSettings() },
        ]);
    };

    return (
        <View style={styles.container}>
            <Text bold style={styles.title}>attach_photo_tree</Text>
            {images?.length ? (
                <View style={styles.images}>
                    {images.map((img, index) => (
                        <RowImage {...img} key={index} remove={handleRemove} hasRemove />
                    ))}
                </View>
            ) : null}
            <Button style={styles.btnUpload} onPress={alertChooseTypeUpload}>
                <Text style={styles.textUpload}>deploy_upload_image</Text>
                <AntDesign name="upload" size={scale(15)} color={colors.black} />
            </Button>

            <Modal
                useNativeDriver
                isVisible={visible}
                style={styles.modal}
                animationInTiming={400}
                onBackButtonPress={handleCloseModal}
                onBackdropPress={handleCloseModal}>
                <View style={styles.modalContainer}>
                    <View style={styles.cameraGalleryContainer}>
                        <Button style={styles.takePhotoBtn} onPress={takePhoto}>
                            <Text style={styles.txtTakePhoto}>take_photo</Text>
                        </Button>
                        <Button style={styles.chooseGalleryBtn} onPress={getImageGallery}>
                            <Text style={styles.txtTakePhoto}>
                                select_photo_gallery
                            </Text>
                        </Button>
                    </View>
                    <Button style={styles.cancelButton} onPress={handleCloseModal}>
                        <Text style={styles.txtTakePhoto}>btn_close</Text>
                    </Button>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: scale(5)
    },
    title: {
        color: colors.black,
        fontSize: fontSize.size17,
    },
    btnUpload: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: scale(2),
        backgroundColor: colors.white,
        marginTop: scale(10),
        padding: scale(8),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    textUpload: {
        marginRight: scale(25),
        color: colors.black,
    },
    images: {
        marginTop: scale(8),
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    modal: {
        margin: 0,
        justifyContent: 'flex-end',
    },
    modalContainer: {
        marginHorizontal: scale(15),
        borderRadius: scale(6),
    },
    cameraGalleryContainer: {
        marginBottom: scale(8),
        backgroundColor: colors.white,
        borderRadius: scale(6),
    },
    takePhotoBtn: {
        borderBottomWidth: scale(1),
        borderBottomColor: colors.systemGray2_1,
        paddingVertical: scale(12),
    },
    chooseGalleryBtn: {
        paddingVertical: scale(12),
    },
    txtTakePhoto: {
        fontSize: fontSize.size17,
        color: colors.blue,
        textAlign: 'center',
    },
    cancelButton: {
        borderRadius: scale(6),
        backgroundColor: colors.white,
        marginTop: scale(8),
        paddingVertical: scale(10),
        marginBottom: scale(8),
    },
});

export default Attachments;
