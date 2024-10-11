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
        value: uri,
        type: 'image/jpeg',
      });

      formdata.append('index', {
        value: index,
        type: 'text',
      });
      
      console.log("formdata : ", formdata);
     return formdata;
 }
