import { PermissionsAndroid, BackHandler } from "react-native";

export const requestExternalStoragePermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    BackHandler.exitApp();
  }
};

export const checkExternalStoragePermission = async () => {
  return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
}

export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    BackHandler.exitApp();
  }
}

export const checkCameraPermission = async () => {
  return PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.CAMERA);
}

export const requestExternalStorageAndCameraPermission = async () => {
  try {
    const grantedExternalStorage = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
    );

    if(grantedExternalStorage === PermissionsAndroid.RESULTS.GRANTED ) {
      const grantedCamera = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA
      );

      if(grantedCamera === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    console.warn(err);
    BackHandler.exitApp();
  }
};