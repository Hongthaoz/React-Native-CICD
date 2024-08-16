import { getRequest, postRequest } from './services';

export const ApiGetListProducts = () => getRequest('api');

export const ApiGetDetailProduct = (id: number) => getRequest(`api/${id}`);

