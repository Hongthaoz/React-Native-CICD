import { Dispatch } from '@reduxjs/toolkit';
import { setIsSubmitting, updateListSplashScreen } from './slide';
import { ApiGetListSplash } from '../../action/Api';

import { SplashList } from '../../data/dummy-data';

const fetchListSplashScreen = () => async (dispatch: Dispatch) => {
  try {
    const useMockData = true;
    if (useMockData) {
      dispatch(updateListSplashScreen(SplashList));
    } else {
      const response = await ApiGetListSplash();
      if (response.status && Array.isArray(response.data) && response.data.length > 0) {
        dispatch(updateListSplashScreen(response.data));
      } else {
        console.log('Không có dữ liệu slide');
      }
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
