import { Dispatch } from '@reduxjs/toolkit';
import { setIsSubmitting, updateDetailProduct, updateListProducts } from './slide';
import { ApiGetListProducts, ApiGetDetailProduct } from '../../action/Api';

const fetchListProductScreen = () => async (dispatch: Dispatch) => {
  dispatch(setIsSubmitting(true));
  try {
    const response = await ApiGetListProducts();
    if (response.status && Array.isArray(response.data) && response.data.length > 0) {
      dispatch(setIsSubmitting(false));
      dispatch(updateListProducts(response.data));
    } else {
      dispatch(setIsSubmitting(false));
      console.log('Không có dữ liệu slide');
    }
  } catch (err) {
    dispatch(setIsSubmitting(false));
    console.error('Error Data Undefined', err);
  }
};

const fetchProductById = (id: number) => async (dispatch: Dispatch) => {
  dispatch(setIsSubmitting(true));
  try {
    const response = await ApiGetDetailProduct(id);
    if (response.status && Array.isArray(response.data) && response.data.length > 0) {
      dispatch(setIsSubmitting(false));
      dispatch(updateDetailProduct(response.data[0]));
    } else {
      dispatch(setIsSubmitting(false));
      console.log('Không có dữ liệu slide');
    }
  } catch (err) {
    dispatch(setIsSubmitting(false));
    console.error('Error Data Undefined', err);
  }
};

export {
  fetchListProductScreen,
  fetchProductById
}
