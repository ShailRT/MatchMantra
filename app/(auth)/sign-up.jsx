import React, { useContext, useState } from 'react';
import { Alert, ScrollView, Text, View,StyleSheet } from 'react-native';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import Input from '../../components/Input';
import { SafeAreaView } from 'react-native-safe-area-context';
import { signup } from '../../utils/backendCalls';
import { UserContext } from '../_layout';
import { colors } from "../../utils/colors";
import { router } from "expo-router";
// import DateTimePicker from "@react-native-community/datetimepicker"

const styles = StyleSheet.create({
    container: {
        padding: 24,
    },
    agreeRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    agreeText: {
        color: colors.blue,
        marginHorizontal: 13,
    },
    agreeTextBold: {
        fontWeight: 'bold',
    },
    button: {
        marginVertical: 20,
    },
    footerText: {
        color: colors.blue,
        marginBottom: 56,
        textAlign: 'center'
    },
    footerLink: {
        fontWeight: 'bold',
    }
});

const Signup = () => {
    const [checked, setChecked] = useState(false);
    const [values, setValues] = useState({});
    const { setUser } = useContext(UserContext); 
    const [dob,setDob] = useState(new Date());
    const [showPicker,setShowPicker]= useState(false);


    const toggleDatePicker=()=>{
        setShowPicker(!showPicker);
    }

    const onSignIn = () => {
        router.push('/sign-in');
    }

    const onBack = () => {
        // navigation.goBack()
    }

    const onChange = (key, value) => {
        setValues(v => ({...v, [key]: value}))
    }

    const onSubmit = async () => {
        try {
            if (!values?.name || !values?.email || !values?.password || !values?.password_confirmation) {
                Alert.alert('All fields are required');
                return;
            }
    
            if (values?.password !== values?.password_confirmation) {
                Alert.alert('Passwords do not match');
                return;
            }
    
            if (!checked) {
                Alert.alert('Please agree to the terms');
                return;
            }

            values.email= values.email.toLowerCase();
            values.dob='2000-03-16';

            console.log(values);
            const token = await signup(values);
            if(token){
                setUser({ token })
                router.push('feed')
            }
           
        } catch(error) {
            console.log('error :>> ', error);
        }
    } 

    return (
        <SafeAreaView>
            <ScrollView style={styles.container}>
                <Input value={values.name} onChangeText={(v) => onChange('name', v)} label="Name" placeholder="John Doe" />
                <Input value={values.email} onChangeText={(v) => onChange('email', v)} label="E-mail" placeholder="example@gmail.com" />
                <Input value={values.password} onChangeText={(v) => onChange('password', v)} isPassword label="Password" placeholder="*******" />
                <Input value={values.password_confirmation} onChangeText={(v) => onChange('password_confirmation', v)} isPassword label="Confirm Password" placeholder="*******" />
                { showPicker && 1
                    // <DateTimePicker 
                    //         mode="date"
                    //         display="spinner"
                    //         value={dob}
                    // />
                }
                <View style={styles.agreeRow}>
                    <Checkbox checked={checked} onCheck={setChecked} />
                    <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms</Text> & <Text style={styles.agreeTextBold}>Privacy</Text></Text>
                </View>

                <Button onPress={onSubmit} style={styles.button} title="Sign Up"  />

                <Text style={styles.footerText}>
                    Already have an account?
                    <Text onPress={onSignIn} style={styles.footerLink}> Sign In</Text>
                </Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default React.memo(Signup);