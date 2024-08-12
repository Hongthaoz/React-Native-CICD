import { postRequest } from './services';


export const ApiLogin = (body: any) => postRequest('api/AuthenticationEmployer/LoginUser', body);

export const ApiChangePasswordUser = (body: any) => postRequest('api/AuthenticationEmployer/ChangePasswordUser', body);

export const ApiCheckTokenApp = (body: any) => postRequest('api/AuthenticationEmployer/CheckToken', body);

//language
export const ApiGetLanguage = () => postRequest('api/SettingOthers/GetLanguage');

export const ApiGetOptionsLanguage = () => postRequest('api/SettingOthers/GetLanguageDetail');

//companny info
export const ApiGetCompanyInfo = () => postRequest('api/CompanyInfo/GetActive');

//api/Dashboards/Collect
export const ApiDashboardsCollect = (body: any) => postRequest('api/Dashboards/Collect', body);

//CollectDataTree
export const ApiAdd = (body: any) => postRequest('api/Tree/Add', body);

export const ApiEdit = (body: any) => postRequest('api/Tree/Edit', body);

export const ApiGetInfo = (body: any) => postRequest('api/Tree/GetInfo', body);

export const ApiGetListCollect = (body: any) => postRequest('api/Tree/Get', body);

export const ApiGetColumn = (body: any) => postRequest('api/Tree/GetColumn', body);

export const ApiGetTreeNumber = (body: any) => postRequest('api/Tree/GetCollectByTreeNumber', body)

export const ApiGetTag = (body: any) => postRequest('api/Tree/GetTag', body)


//CollectionHistory
export const ApiGetCollectComplete = () => postRequest('api/Tree/GetCollectHistory');

// Add token fcm

export const ApiAddTokenFirebase = (body: any) => postRequest('api/TokenApp/Add_Collect', body);

export const ApiDeleteTokenFirebase = (body: any) => postRequest('api/TokenApp/Delete', body);

//Notify
export const ApiGetNotify = () => postRequest('api/Notify/Get_Employer');

export const ApiGetTotalNotify = () => postRequest('api/Notify/GetTotal_Employer');

export const ApiUpdateViewNoti = (body: any) => postRequest('api/Notify/UpdateView_Employer', body);
