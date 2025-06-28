import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';

const Login = () => {

  const navigation = useNavigation()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Admin/OrderTaker/Biller');
  const [showDropdown, setShowDropdown] = useState(false);


  const handleSignIn = () => {
    // Handle sign in logic here
    console.log('Sign in pressed', { email, password, role });
  };

  const handleCreateAccount = () => {
    // Handle create account logic here
    navigation.navigate('SignUp')
    console.log('Create account pressed');
  };
  return (
    <SafeAreaView style={styles.container}>  
    <ScrollView style={{flexGrow: 1}}>
    {/* Logo and Title */}
    <View style={styles.logoContainer}>
        <Image source={require('../../assets/images/logo2.png')} style={styles.logoImage}/>
        <Text style={styles.title}>Khursheed Family Restaurant</Text>
        <Text style={styles.subtitle}>Manage your restaurant with ease.</Text>
    </View>

    {/* Form */}
    <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>📧 Email Address</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoFocus={true}
        />
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>🔒 Password</Text>
        <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
        />
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Role</Text>
        {/* <View style={styles.pickerContainer}>
            <Text style={styles.pickerLabel}>👤 {role}</Text>
            <Picker
            selectedValue={role}
            style={styles.picker}
            onValueChange={(itemValue) => setRole(itemValue)}
            >
            <Picker.Item label="Admin/OrderTaker/Biller" value="Admin/OrderTaker/Biller" />
            <Picker.Item label="Admin" value="Admin" />
            <Picker.Item label="OrderTaker" value="OrderTaker" />
            <Picker.Item label="Biller" value="Biller" />
            </Picker>
        </View> */}
        <View style={styles.pickerContainer}>
            <TouchableOpacity onPress={() => setShowDropdown(!showDropdown)}>
                <Text style={styles.pickerLabel}>👤 {role}</Text>
            </TouchableOpacity>

            {showDropdown && (
                <View style={styles.dropdown}>
                {['Admin', 'OrderTaker', 'Biller'].map((item) => (
                    <TouchableOpacity
                    key={item}
                    onPress={() => {
                        setRole(item);
                        setShowDropdown(false);
                    }}
                    style={styles.dropdownItem}
                    >
                    <Text style={styles.dropdownItemText}>{item}</Text>
                    </TouchableOpacity>
                ))}
                </View>
            )}
            </View>

        </View>

        <TouchableOpacity style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>Sign In Securely</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>or</Text>

        <TouchableOpacity style={styles.createAccountButton} onPress={handleCreateAccount}>
        <Text style={styles.createAccountButtonText}>Create New Account</Text>
        </TouchableOpacity>
    </View>
      
    </ScrollView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  illustrationContainer: {
    width: 200,
    height: 120,
    position: 'relative',
  },
  buildingTop: {
    width: 60,
    height: 15,
    backgroundColor: '#e9ecef',
    borderRadius: 8,
    marginBottom: 2,
  },
  buildingMain: {
    width: 80,
    height: 50,
    backgroundColor: '#dee2e6',
    borderRadius: 8,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  window: {
    width: 12,
    height: 12,
    backgroundColor: '#6c757d',
    borderRadius: 2,
    margin: 2,
  },
  door: {
    width: 16,
    height: 20,
    backgroundColor: '#495057',
    borderRadius: 4,
    marginTop: 6,
    alignSelf: 'center',
  },

  chefHat: {
    width: 20,
    height: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dee2e6',
  },
  chefFace: {
    width: 16,
    height: 16,
    backgroundColor: '#ffc107',
    borderRadius: 8,
    marginTop: 2,
  },
  chefBody: {
    width: 20,
    height: 25,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop: 2,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
   logoImage: {
    width: 150,
    height: 150,
    marginVertical: 20,
    },

  title: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1f2937',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#6b7280',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
  },
  inputContainer: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#ffffff',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  pickerLabel: {
    fontSize: 16,
    color: '#374151',
  },
  picker: {
    height: 0,
    opacity: 0,
  },
  signInButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 14,
    marginBottom: 20,
  },
  createAccountButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  createAccountButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  dropdown: {
  backgroundColor: '#fff',
//   borderWidth: 1,
  borderColor: '#d1d5db',
  borderRadius: 8,
  marginTop: 8,
},
dropdownItem: {
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderWidth: 0.5,
},
dropdownItemText: {
  fontSize: 16,
  color: '#374151',
  
  
},

});








