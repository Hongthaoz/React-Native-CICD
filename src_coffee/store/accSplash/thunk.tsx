import { Dispatch } from '@reduxjs/toolkit';
import { setIsSubmitting, updateListSplashScreen } from './slide';

import { SplashList } from '../../data/dummy-data';

const fetchListSplashScreen = () => async (dispatch: Dispatch) => {
  try {
    const useMockData = true;
    if (useMockData) {
      dispatch(updateListSplashScreen(SplashList));
    } else {
      console.log('Không có dữ liệu');
    }
  } catch (err) {
    console.error('Error Data Undefined', err);
  } finally {
    dispatch(setIsSubmitting(false));
  }
};

export {
  fetchListSplashScreen
}
