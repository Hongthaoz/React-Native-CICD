import AsyncStorage from '@react-native-async-storage/async-storage';

const _TOKEN = '@TOKEN';
const _USER = '@USER';
const _FCM = '@FCM';
const _LANGUAGE = '@LANGUAGE';
const _LOCALE = '@LOCALE';
const _OPTIONS_LANGUAGE = '@OPTIONS_LANGUAGE';
const _REFRESHTOKEN = '@REFRESHTOKEN';

interface Language {
  Code: string;
  LanguageName: string;
  Icon: string;
}

// Token functions
export const setToken = async (token: string): Promise<void> => {
  return AsyncStorage.setItem(_TOKEN, token);
};

export const getToken = async (): Promise<string | null> => {
  return AsyncStorage.getItem(_TOKEN);
};

export const clearToken = async (): Promise<void> => {
  return AsyncStorage.removeItem(_TOKEN);
};

// Refresh Token functions
export const setRefreshToken = async (refreshToken: string): Promise<void> => {
  return AsyncStorage.setItem(_REFRESHTOKEN, refreshToken);
};

export const getRefreshToken = async (): Promise<string | null> => {
  return AsyncStorage.getItem(_REFRESHTOKEN);
};

export const clearRefreshToken = async (): Promise<void> => {
  return AsyncStorage.removeItem(_REFRESHTOKEN);
};

// User Info functions
export const setUserInfo = async (user: object): Promise<void> => {
  return AsyncStorage.setItem(_USER, JSON.stringify(user));
};

export const getUserInfo = async (): Promise<object | null> => {
  const user = await AsyncStorage.getItem(_USER);
  return user ? JSON.parse(user) : null;
};

export const clearUserInfo = async (): Promise<void> => {
  return AsyncStorage.removeItem(_USER);
};

// FCM functions
export const setFcmInfo = async (fcm: string): Promise<void> => {
  return AsyncStorage.setItem(_FCM, fcm);
};

export const getFcmInfo = async (): Promise<string | null> => {
  return AsyncStorage.getItem(_FCM);
};

export const clearFcm = async (): Promise<void> => {
  return AsyncStorage.removeItem(_FCM);
};

// Language functions
export const setLanguage = async (language: Language[]): Promise<void> => {
  return AsyncStorage.setItem(_LANGUAGE, JSON.stringify(language));
};

export const getLanguage = async (): Promise<Language[] | null> => {
  const languageString = await AsyncStorage.getItem(_LANGUAGE);
  return languageString ? JSON.parse(languageString) as Language[] : null;
};

// Options Language functions
export const setOptionsLanguage = async (options: Language[]): Promise<void> => {
  return AsyncStorage.setItem(_OPTIONS_LANGUAGE, JSON.stringify(options));
};

export const getOptionsLanguage = async (): Promise<Language[] | null> => {
  const optionsString = await AsyncStorage.getItem(_OPTIONS_LANGUAGE);
  return optionsString ? JSON.parse(optionsString) as Language[] : null;
};

// Locale functions
export const setLocale = async (locale: Language): Promise<void> => {
  return AsyncStorage.setItem(_LOCALE, JSON.stringify(locale));
};

export const getLocale = async (): Promise<Language | null> => {
  const localeString = await AsyncStorage.getItem(_LOCALE);
  return localeString ? JSON.parse(localeString) as Language : null;
}