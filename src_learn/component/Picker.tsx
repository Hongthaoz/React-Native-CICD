import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, TextInput, FlatList,ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import { convertVi } from '../utils';
import Modal from 'react-native-modal';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { isTablet } from 'react-native-device-info';
import { observer } from 'mobx-react';

import { useStore } from '../context';
import { Text } from './text';
import { Button } from './button';
import { colors, fontSize } from '../constant';
import { scale } from '../utils/resolutions';
import { NoData } from './nodata';
import { ApiGetTag } from '../action/Api';
import { cleanSingle } from 'react-native-image-crop-picker';

interface PickerProps {
  data: any[];
  name: string;
  label: string;
  style?: ViewStyle;
  value?: any;
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
  setFieldValue?: (field: string, value: any) => void;
  handleBlur: (name: string) => () => void;
  handleChange: (name: string) => (value: string) => void;
  keyLabel: string;
  dataBtn: any[];
  keyId?: string;
  columnName?: string;
  onChange?: (item: any) => void;
  onSearch?: (text: string) => void;
}

const Picker: React.FC<PickerProps> = ({
  data,
  name,
  label,
  style,
  value,
  errors,
  touched,
  required,
  disabled,
  placeholder,
  setFieldValue,
  handleBlur,
  handleChange,
  keyLabel,
  dataBtn,
  keyId = 'id',
  columnName,
  ...props

}) => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isHashtag, setHashTag] = useState<string | null>(null);
  const [isPickerData, setPickerData] = useState<any[]>([]);
  const { languagesStore: { i18n, locale } } = useStore();

  const closeModal = () => {
    setVisible(false);
  };

  const openModal = () => {
    setVisible(true);
  };

  const handleSelect = (item: any) => {
    if (setFieldValue) {
      setFieldValue(name, item);
    }
    closeModal();
  };

  const handleSelectTag = (id: any) => {
    if (id.TreeID) {
      setHashTag(id.TreeID);
      handleSelect(id);
    } else if (id.TreeStatus) {
      setHashTag(id.TreeStatus);
      handleSelect(id);
    } else if (id.HeightDescription) {
      setHashTag(id.HeightDescription);
      handleSelect(id);
    } else if (id.BodyDiameterDescription) {
      setHashTag(id.BodyDiameterDescription);
      handleSelect(id);
    } else if (id.DiameterFoliagesDescription) {
      setHashTag(id.DiameterFoliagesDescription);
      handleSelect(id);
    } else if (id.LifespanDescription) {
      setHashTag(id.LifespanDescription);
      handleSelect(id);
    }
  };

  const Search = (text: string, data: any[], keyObject: string) => {
    if (!text) {
      setPickerData(data);
    } else {
      const array = data.filter(element =>
        convertVi(element[keyObject].toLocaleLowerCase()).includes(text.toLocaleLowerCase())
      );
      setPickerData(array);
    }
  };

  const searchKeyExtractor = (item: any, index: number) => `${item?.[keyId]}-${index}`;

  const searchRenderItem = ({ item }: { item: any }) => (
    <Button
      style={styles.item}
      onPress={() => handleSelect(item)}>
      <Text style={styles.itemModal}>{item && item[keyLabel]}</Text>
      <Icon
        color={colors.black}
        size={scale(20)}
        name={
          item?.[keyId] === value?.[keyId]
            ? 'checkbox-marked-circle'
            : 'checkbox-blank-circle-outline'
        }
      />
    </Button>
  );

  const keyExtractor = (item: any, index: number) => `${item?.[keyId]}-${index}`;

  const renderItem = ({ item }: { item: any }) => (
    <Button
      style={styles.item}
      onPress={() => handleSelect(item)}>
      <Text style={styles.itemModal}>{item && item[keyLabel]}</Text>
      <Icon
        color={colors.black}
        size={scale(20)}
        name={
          item?.[keyId] === value?.[keyId]
            ? 'checkbox-marked-circle'
            : 'checkbox-blank-circle-outline'
        }
      />
    </Button>
  );

  const _renderItem = ({ item }: { item: any }) => {
    if (keyId === 'TreeID') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.TreeID ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.TreeID ? styles.txtSelect : styles.txtUnSelect}>
              {item.TreeName}
            </Text>
          </Button>
        </View>
      );
    } else if (keyId === 'TreeStatus') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.TreeStatus ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.TreeStatus ? styles.txtSelect : styles.txtUnSelect}>
              {item[keyLabel]}
            </Text>
          </Button>
        </View>
      );
    } else if (keyId === 'HeightOptionName') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.HeightDescription ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.HeightDescription ? styles.txtSelect : styles.txtUnSelect}>
              {item.HeightOptionName}
            </Text>
          </Button>
        </View>
      );
    } else if (keyId === 'BodyDiameterOptionName') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.BodyDiameterDescription ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.BodyDiameterDescription ? styles.txtSelect : styles.txtUnSelect}>
              {item.BodyDiameterOptionName}
            </Text>
          </Button>
        </View>
      );
    } else if (keyId === 'DiameterFoliagesOptionName') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.DiameterFoliagesDescription ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.DiameterFoliagesDescription ? styles.txtSelect : styles.txtUnSelect}>
              {item.DiameterFoliagesOptionName}
            </Text>
          </Button>
        </View>
      );
    } else if (keyId === 'LifespanOptionName') {
      return (
        <View style={styles.hashtag}>
          <Button style={isHashtag === item.LifespanDescription ? styles.btnSelect : styles.btnUnSelect} onPress={() => handleSelectTag(item)}>
            <Text style={isHashtag === item.LifespanDescription ? styles.txtSelect : styles.txtUnSelect}>
              {item.LifespanOptionName}
            </Text>
          </Button>
        </View>
      );
    }
    return null;
  };
  
  return (
     <View style={styles.inputContainer}>
      <Text bold style={styles.label}>
        {label}
        {required}
      </Text>
      <Button {...{ disabled }} onPress={keyId === 'TreeStatus' || keyId === 'HeightDescription' ? null : openModal} style={[styles.input, style]}>
        {keyId === 'TreeID' || keyId === 'TreeStatus' ?
          <Text style={value ? styles.textSelected : styles.phSelect}>
            {value ? value : placeholder}
          </Text>
          :
          <TextInput
            value={value}
            onChangeText={(text) => {
              let obj: { [key: string]: string } = {};
              obj[columnName || ''] = text;
              setFieldValue(name, obj);
            }}
            placeholder={`${i18n('enter_here')}`}
            style={styles.inputPicker}
          />
        }

        {keyId !== 'TreeID' ? null :
          <View style={styles.selectArrows}>
            <Entypo
              size={scale(18)}
              name={disabled ? 'block' : 'select-arrows'}
              color={disabled ? colors.red : colors.black}
            />
          </View>
        }
      </Button>
      {keyId === 'TreeID' || keyId === 'TreeStatus' ?
        <Modal
          useNativeDriver={true}
          animationInTiming={400}
          animationOutTiming={400}
          isVisible={isVisible}
          backdropTransitionOutTiming={0}
          hideModalContentWhileAnimating={true}
          onBackdropPress={closeModal}
          style={styles.modalContainer}
        >
          <View style={styles.modal}>
            {placeholder && (
              <Button onPress={closeModal} style={styles.backEdit}>
                <Text bold style={styles.modalTitle}>
                  {placeholder}
                </Text>
                <Feather name="x" color={colors.black} size={scale(22)} />
              </Button>
            )}
            <View style={styles.searchBar}>
              <Ionicons
                name="search-outline"
                size={isTablet() ? scale(16) : scale(20)}
                color={colors.black}
              />
              <TextInput
                onChangeText={text => Search(text, data, keyLabel)}
                placeholder={`${i18n('ph_search_map')}`}
                style={styles.textInput}
                autoCapitalize="none"
                returnKeyType={'search'}
                returnKeyLabel={'Search'}
              />
            </View>
            <SafeAreaView style={styles.scrollViewPicker}>
              {isPickerData?.length > 0 ?
                <FlatList
                  data={isPickerData}
                  keyExtractor={searchKeyExtractor}
                  renderItem={searchRenderItem}
                />
                :
                <FlatList
                  data={data}
                  keyExtractor={_keyExtractor}
                  renderItem={renderItem}
                  ListEmptyComponent={<NoData />}
                />
              }
            </SafeAreaView>
          </View>
        </Modal>
        : null
      }

      {disabled ? null :
        <SafeAreaView style={styles.containerHashTag}>
          <FlatList
            horizontal={true}
            data={dataBtn}
            keyExtractor={_keyExtractor}
            renderItem={_renderItem}
            showsHorizontalScrollIndicator={false}
            ListEmptyComponent={disabled ? <NoData /> : null}
          />
        </SafeAreaView>
      }

      {touched[name] && errors[name] ? (
        <Text style={styles.error}> {errors[name]}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: scale(10),
    borderRadius: scale(6),
  },
  scrollView: {},
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: scale(1),
    borderColor: '#d6dbe1',
    marginHorizontal: scale(10),
    paddingHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: scale(35),
  },
  btnSearch: {
    padding: scale(2),
  },
  textInput: {
    width: '95%',
    marginLeft: scale(4),
    paddingVertical: scale(7),
    fontSize: fontSize.size16,
  },
  container: {
    paddingHorizontal: scale(15),
  },
  label: {
    marginLeft: scale(5),
    marginVertical: scale(5),
    color: colors.black,
    fontSize: fontSize.size17,
  },
  input: {
    marginLeft: scale(7),
    justifyContent: 'center',
    paddingVertical: scale(5),
    borderBottomWidth: scale(1),
    borderBottomColor: colors.systemGray3
  },
  inputPicker: {
    height: 40
  },
  modal: {
    flex: 1,
    marginTop: scale(isIphoneX() ? scale(25) : scale(20)),
    backgroundColor: colors.white,
    paddingBottom: scale(isIphoneX() ? scale(40) : 0), // iPhoneX
  },
  textSelected: {
    color: colors.black,
    marginBottom: scale(10)
  },
  phSelect: {
    color: colors.black,
    marginBottom: scale(10)
  },
  selectArrows: {
    position: 'absolute',
    top: scale(5),
    bottom: 0,
    right: 4,
  },
  modalContainer: {
    margin: 0,
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  modalTitle: {
    color: colors.black,
    fontSize: fontSize.size18,
  },
  item: {
    paddingVertical: scale(12),
    paddingHorizontal: scale(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: scale(1),
    borderBottomColor: colors.systemGray3,

  },
  itemModal: {
    color: colors.black,
  },
  required: {
    color: colors.red,
  },
  error: {
    color: colors.red,
    fontSize: fontSize.size11,
    marginTop: scale(5),
  },
  backEdit: {
    marginTop: scale(20),
    paddingHorizontal: scale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(10),
  },
  textNodata: {
    color: colors.red,
    paddingHorizontal: scale(15),
    fontStyle: 'italic',
  },
  scrollViewPicker: {
    flex: 1,
    marginHorizontal: scale(7),
  },
  containerHashTag: {
    flexDirection: 'row',
    marginTop: scale(10),

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
});

export default observer(Picker);
