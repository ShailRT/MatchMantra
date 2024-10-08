import { request } from './request';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const login = async (values) => {
    try {
        const response = await request({
            url: '/login',
            method: 'post',
            data: values,
        });

        if (response?.data?.token) {
            await AsyncStorage.setItem('auth_token', response?.data?.token)

            return response?.data?.token;
        }
    } catch (e) {
        console.log('e login :>> ', e);
    }
}

export const signup = async (values) => {
    try {
        console.log("data in signup form : ");
        console.log(values);
        const response = await request({
            url: '/register',
            method: 'post',
            data: values,
        });

        console.log("resopone after  signup ");
        console.log(response);

        if (response) {
            const { email, password } = values;
            const loginResponse = await login({ email, password })
            console.log("login response: ");
            console.log(loginResponse);
            return loginResponse;
        }
    } catch (e) {
        console.log('e signup :>> ', e);
    }
}

export const getMatchingProfile = async (token) => {
    try {
        const response = await request({
            url: '/dating/profiles',
            method: 'get',
            headers:  {Authorization: `Bearer ${token}` }
        });

        if (response) {
            return response?.data;
        }
    } catch (e) {
        console.log('e profile :>> ', e);
    }
}

export const likeProfile = async (data,token) => {
    try {
        const response = await request({
            url: '/like',
            method: 'post',
            data,
            headers:  {Authorization: `Bearer ${token}` }
        });

    } catch (e) {
        console.log('e like profile :>> ', e);
    }
}


export const skipProfile = async (data,token) => {
    try {
        const response = await request({
            url: '/skip',
            method: 'post',
            data,
            headers:  {Authorization: `Bearer ${token}` }
        });

    } catch (e) {
        console.log('e skip profile :>> ', e);
    }
}