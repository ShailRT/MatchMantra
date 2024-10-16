import { request } from "./request";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getUser = async (token) => {
  try {
    const response = await request({
      url: "/",
    });
  } catch (error) {
    console.log("ERROR while getting user > ", error);
  }
};

export const login = async (values) => {
  try {
    const response = await request({
      url: "/login",
      method: "post",
      data: values,
    });
    if (response?.data?.token) {
      await AsyncStorage.setItem("auth_token", response?.data?.token);

      if (response?.data?.user) {
        await AsyncStorage.setItem(
          "auth_user",
          JSON.stringify(response?.data?.user)
        );
      }

      return {
        token: response?.data?.token,
        user: response?.data?.user,
      };
    }
  } catch (e) {
    console.log("e login :>> ", e);
  }
};

export const signup = async (values) => {
  try {
    console.log("data in signup form : ");
    console.log(values);
    const response = await request({
      url: "/register",
      method: "post",
      data: values,
    });

    console.log("resopone after  signup ");
    console.log(response);

    if (response) {
      const { email, password } = values;
      const loginResponse = await login({ email, password });
      console.log("login response: ");
      console.log(loginResponse);
      return loginResponse;
    }
  } catch (e) {
    console.log("e signup :>> ", e);
  }
};

export const getMatchingProfile = async (token) => {
  try {
    const response = await request({
      url: "/dating/profiles",
      method: "get",
      headers: { Authorization: `Bearer ${token}` },
    });

    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log("e profile :>> ", e);
  }
};

export const likeProfile = async (data, token) => {
  try {
    const response = await request({
      url: "/like",
      method: "post",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.log("e like profile :>> ", e);
  }
};

export const skipProfile = async (data, token) => {
  try {
    const response = await request({
      url: "/skip",
      method: "post",
      data,
      headers: { Authorization: `Bearer ${token}` },
    });
  } catch (e) {
    console.log("e skip profile :>> ", e);
  }
};

export const getEvents = async () => {
  try {
    const response = await request({
      fullUrl: "http://shaadimantraa.com/events",
      method: "get",
    });
    console.log("events ", response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR geting events > ", error);
  }
};

export const setProfileImage = async (data) => {
  try {
    const token = await AsyncStorage.getItem("auth_token");
    console.log("token in setProfile",token);
    const response = await request({
      fullUrl: "http://www.shaadimantraa.com/api/profile/photo/update",
      method: "post",
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
         Authorization: `Bearer ${token}` ,
      },
    });
    console.log("set Profile response ", response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR set Profile response > ", error);
  }
};

export const removeProfileImage = async (data) => {
  try {
    const token = await AsyncStorage.getItem("auth_token");
    const response = await request({
      fullUrl: "http://www.shaadimantraa.com/api/profile/photo/remove",
      method: "post",
      data: data,
      headers: {
        'Content-Type': 'multipart/form-data',
         Authorization: `Bearer ${token}` ,
      },
    });
    console.log("remove Profile response ", response.data);
    return response.data;
  } catch (error) {
    console.log("ERROR remove Profile response > ", error);
  }
};


export const updateProfile = async (data) => {
  try {
    const token = await AsyncStorage.getItem("auth_token");
    const response = await request({
      fullUrl: "http://www.shaadimantraa.com/api/profile",
      method: "patch",
      data: data,
      headers: {
         Authorization: `Bearer ${token}` ,
      },
    });
    console.log("update Profile response ", response.data);
    return [response.data,token];
  } catch (error) {
    console.log("ERROR update Profile response > ", error);
  }
};
