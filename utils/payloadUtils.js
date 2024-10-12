export const generateRegisterPayload =  (values) => {
   console.log("values : " , values)
    const data = {
        name: values.firstName + " " + values.lastName , 
        email: values.email,
        dob: values.dob,
        password: values.password,
        password_confirmation: values.password
    }
    console.log("data  ", data)
    return data;
}

export const createDataForImage =  (uri,index) => {
     const formdata= new FormData();
     formdata.append('photo', {
        uri: uri,
        type: 'image/jpeg',
        name: 'profile',
      });

     formdata.append('index',index);
      
      console.log("formdata : ", formdata);
     return formdata;
 }


 export const createDataForImageRemove =  (index) => {
    const formdata= new FormData();
    formdata.append('index',index);
     
     console.log("formdata : ", formdata);
    return formdata;
}