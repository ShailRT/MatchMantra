import { StyleSheet,Text } from 'react-native'

const ErrorText =({message})=> {
    return (
        <Text style={styles.error} >{message}</Text>
    )
}

export default ErrorText;

const styles = StyleSheet.create({
    error:{
      fontSize:15,
      color:'red',
      fontWeight: '500'
    },
  });