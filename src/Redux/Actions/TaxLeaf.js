import {
  LOGIN_DATA,
  MY_INFO,
  MANAGER_INFO,
  CLIENT_LIST,
  CLIENT_DETAIL,
  REQUEST_INFO,
  REQUEST_INFO_BY_ID,
  FOLDER_LIST,
  DOCUMENT_INFO_FOLDER,
  FILE_UPLOAD_TOKEN,
  FILE_INFO
} from './types';
import AsyncStorage from '@react-native-community/async-storage';
import axios, * as others from 'axios';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { logistical } from '../../utils';

export const LoginUser = (email, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      staffview: {
        user: email,
      },
    };

    console.log(data, 'dataaaaaa');

    const response = await logistical.postlogin('/Staff/LoginStaff', data);
    console.log(response.token, 'responseresponseresponseresponse');
    // console.log(response, 'responseresponseresponseresponse2222222222222222');

    if (response.statusCode == 200) {
      AsyncStorage.setItem('login', JSON.stringify(response.token));
      AsyncStorage.setItem('response', JSON.stringify(response));
      // console.log(response.token, 'token');
      console.log(
        response,
        'staffviewinfostaffviewinfostaffviewinfostaffviewinfo',
      );

      dispatch({
        type: LOGIN_DATA,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      navigation.navigate('Auth');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      // Alert.alert(response.message)
      Alert.alert('Your Account is not Approved');
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const clientInfo = (email, navigation) => dispatch => {
  //console.log(email, 'clientInfoclientInfoclientInfoclientInfoclientInfoLLLLLLLLLLLLL')


  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      staffview: {
        user: email,
      },
    };
    const response = await logistical.post('/Staff/GetStaffById', data);
    //console.log(response, 'respppClientInforespppClientInfo');

    if (response.failureStatus == false) {
      // console.log(
      //   response,
      //   'guestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfo',
      // );
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: MY_INFO,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      // Alert.alert(response.message)
      Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const client_Detail = (ClinetId, ClinetType, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      GuestInfo: {
        clientId: ClinetId,
        clientType: ClinetType,
      },
    };
    const response = await logistical.post('/Staff/IndividualClientInfo', data);
    //  console.log(response, 'client_Detailclient_Detailclient_Detail');

    if (response.failureStatus == false) {
      // console.log(
      //   response,
      //   'guestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfoguestInfo',
      // );
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: CLIENT_DETAIL,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      // Alert.alert(response.message)

      Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const ManagerInfo = (clientId, clientType, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      clientInfo: {
        clientId: clientId,
        clientType: clientType,
      },
    };
    const response = await logistical.post('/Staff/GetManagerInfo', data);
    console.log(response.managerInfo, 'managerInfomanagerInfomanagerInfo');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));
      console.log(response, 'managerInfomanagerInfomanagerInfo');

      dispatch({
        type: MANAGER_INFO,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const ClientInfoList =
  (clientId, clientType, navigation) => dispatch => {
    // dispatch({
    //   type: 'LOADING',
    //   payload: true,
    // });

    return new Promise(async (resolve, reject) => {
      let data = {
        GuestInfo: {
          clientId: clientId,
          clientType: clientType,
        },
      };
      const response = await logistical.post('/Staff/GetAssociateList', data);
      console.log(
        response.associateListInfo,
        'ClientLIstClientLIstClientLIstClientLIst',
      );

      if (response) {
        // AsyncStorage.setItem('login', JSON.stringify(response.token));

        dispatch({
          type: CLIENT_LIST,
          payload: response.associateListInfo,
        });

        //   Alert.alert(response.response[0])
        resolve(response);

        // Alert.alert(response.massage);
        // navigation.navigate('ClientInfo');

        // dispatch({
        //   type: 'LOADING',
        //   payload: false,
        // });
      } else {
        Alert.alert('No data found');
        //Alert.alert(response.massage);
        // dispatch({
        //   type: 'LOADING',
        //   payload: false,
        // });
        reject(response);
      }
    });
  };


export const RequestInfoList = (clientId, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      GuestInfo: {
        ClientId: clientId,
      },
    };
    console.log(data, 'requestPayload')
    const response = await logistical.post('/Staff/GetAllRequest', data);
    console.log(response, 'GetAllRequestInfo');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: REQUEST_INFO,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const RequestSubmit = (data, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {

    console.log(data, 'submitrequestPayload')
    const response = await logistical.post('/Staff/SubmitRequest', data);
    console.log(response, 'SubmitlRequestInforesponse');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      // dispatch({
      //   type: REQUEST_INFO,
      //   payload: response,
      // });

      //   Alert.alert(response.response[0])
      resolve(response);

      Alert.alert('Submit Request Sent');
      setTimeout(() => {
        navigation.goBack();
      }, 2000);

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const RequestInfoById = (id, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      ActionModel: {
        Id: id
      }
    };
    console.log(data, 'requestIdPayload')
    const response = await logistical.post('/Staff/GetRequestById', data);
    console.log(response, 'GetRequestById');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: REQUEST_INFO_BY_ID,
        payload: response,
      });

      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};


export const folderNameList =
  (clientId, clientType, navigation) => dispatch => {
    // dispatch({
    //   type: 'LOADING',
    //   payload: true,
    // });

    return new Promise(async (resolve, reject) => {
      let data = {
        GuestInfo: {
          // clientType: clientType,
          clientType: "Individual"

        },
      };
      const response = await logistical.post('/FileCabinet/GetFolderList', data);
      console.log(
        response.azureFoldersInfo,
        'GetFolderList',
      );

      if (response) {
        // AsyncStorage.setItem('login', JSON.stringify(response.token));

        dispatch({
          type: FOLDER_LIST,
          payload: response.azureFoldersInfo,
        });

        //   Alert.alert(response.response[0])
        resolve(response);

        // Alert.alert(response.massage);
        // navigation.navigate('ClientInfo');

        // dispatch({
        //   type: 'LOADING',
        //   payload: false,
        // });
      } else {
        Alert.alert('No data found');
        //Alert.alert(response.massage);
        // dispatch({
        //   type: 'LOADING',
        //   payload: false,
        // });
        reject(response);
      }
    });
  };


export const documentInfobyFolder = (documentId, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      FolderInfo: {
        DocumentTypeIds: documentId
      }
    };
    console.log(data, 'ddd')
    const response = await logistical.post('/FileCabinet/GetDocumentTypes', data);
    console.log(response.documentInfo, 'hilllloooo');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: DOCUMENT_INFO_FOLDER,
        payload: response.documentInfo,
      });


      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};


export const uploadFile = (MY_INFO, FolderName, documentType, year, period, description, base64File, accessToken, documentsLibraryId, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });
  return new Promise(async (resolve, reject) => {
    // let data = {
    //   "FileListModel": [
    //     {
    //       "FileModel":
    //       {
    //         "Brand": MY_INFO?.staffview?.clientBrand,
    //         "OfficeId": MY_INFO?.officeInfo?.officeId,
    //         "ClientType": MY_INFO?.guestInfo?.clientType,
    //         "ClientId": MY_INFO?.guestInfo?.client,
    //         "SharepointFolderName": FolderName,
    //         "DocumentType": documentType,
    //         "FileType": "pdf",
    //         "Period": "1",
    //         "PeriodText": period,
    //         "Year": year,
    //         "Description": description,
    //         "UploadedByName": MY_INFO?.staffview?.firstName + ' ' + MY_INFO?.staffview?.lastName,
    //         "UploadedBy": MY_INFO?.staffview?.id,
    //       },
    //       "FileData":base64File

    //     }
    //   ],
    //   "result": {
    //     "accessToken": accessToken,
    //     "LibraryId": documentsLibraryId
    //   }
    // };

    let data = {
      "FileListModel": [
        {
          "FileModel": {
            "Brand": MY_INFO?.staffview?.clientBrand,
            "OfficeId": "CORP",
            "ClientType": "COMPANY",
            "ClientId": "MREALESTATE",
            "SharepointFolderName": "Mailing Correspondence",
            "DocumentType": "IRS",
            "FileType": "pdf",
            "Period": "1",
            "PeriodText": period,
            "Year": year,
            "Description": description,
            "UploadedByName": "Karla Pereira",
            "UploadedBy": "520"
          },
          "FileData": base64File
        }
      ],
      "result": {
        "accessToken": accessToken,
        "LibraryId": documentsLibraryId
      }
    };

    console.log(data?.FileListModel[0]?.FileModel, 'uplaodPayload')
    const response = await logistical.post('/FileCabinet/UploadFiles', data);
    // console.log(response, 'UploadFilesResp');

    if (response && response?.statusCode == 200) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      // dispatch({
      //   type: DOCUMENT_INFO_FOLDER,
      //   payload: response.documentInfo,
      // });


      resolve(response);

      Alert.alert(response.massage)
      navigation.navigate('FileCabinet');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};


export const generateFileToken = (documentId, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/FileCabinet/GenerateToken');
    console.log(response, 'AccessToken');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: FILE_UPLOAD_TOKEN,
        payload: response,
      });


      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};

export const getFileInfo = (clientId, clientType, navigation) => dispatch => {
  // dispatch({
  //   type: 'LOADING',
  //   payload: true,
  // });

  return new Promise(async (resolve, reject) => {
    let data = {
      "fileListViews": [
        {
          "guestInfo": {
            "client": 'EASTSONSPRI',
            "clientType": 'individual'
          }
        }
      ]
    };

    console.log(data, 'ddd')
    const response = await logistical.post('/FileCabinet/GetFiles', data);
    console.log(response, 'fileResp');

    if (response) {
      // AsyncStorage.setItem('login', JSON.stringify(response.token));

      dispatch({
        type: FILE_INFO,
        payload: response?.fileListViews,
      });


      //   Alert.alert(response.response[0])
      resolve(response);

      // Alert.alert(response.massage);
      // navigation.navigate('ClientInfo');

      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
    } else {
      Alert.alert('No data found');
      //Alert.alert(response.massage);
      // dispatch({
      //   type: 'LOADING',
      //   payload: false,
      // });
      reject(response);
    }
  });
};