import { request } from "./request";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const login = async (values) => {
  try {
    const response = await request({
      url: "/login",
      method: "post",
      data: values,
    });
    const token = response?.data?.token;
    if (token) {
      await AsyncStorage.setItem("auth_token", token);
      return token;
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

    if (response) {
      const { email, password } = values;
      const loginResponse = await login({ email, password });
      return loginResponse;
    }
  } catch (e) {
    console.log("e signup :>> ", e);
  }
};

export const getProfile = async () => {
  try {
    const response = await request({
      url: "/user/profile",
      method: "get",
    });

    if (response) {
      return response?.data;
    }
  } catch (e) {
    console.log("e profile :>> ", e);
  }
};

export const updateProfile = async (data) => {
  try {
    const response = await request({
      url: "/user/profile",
      method: "patch",
      data,
    });

    if (response) {
      const profile = await getProfile();
      return profile;
    }
  } catch (e) {
    console.log("e profile :>> ", e);
  }
};
