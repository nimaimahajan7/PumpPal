import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { auth } from '../firebase'


export default function Settings(){
  const navigation = useNavigation()

      const handleSignOut = () => {
        auth
        .signOut()
        .then(() => {
          navigation.replace("LoginScreen")
        })
        .catch(error => alert(error.message))
      }

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text>Email: { auth.currentUser?.email }</Text>
              <TouchableOpacity style={styles.button} onPress={handleSignOut}>
                <Text style={styles.buttonText}>Sign out</Text>
              </TouchableOpacity>
            </View>
          );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0782F9',
    width: 150,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  }
})