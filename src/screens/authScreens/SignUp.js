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
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import MainButton from '../../components/MainButton';

const SignUp = () => {
    const navigation = useNavigation()
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('Admin');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSignUp = async (email,password, fullName, phoneNumber, role) => {
    // Handle sign up logic here
    console.log("Print sign up1 ");
        // creating user in firebase
        try {
          const userDetails = await auth().createUserWithEmailAndPassword( email.trim(), password)
          // console.log("User :", userDetails.user);
          // console.log("additionalUserInfo :", userDetails.additionalUserInfo.isNewUser);

          const uid = userDetails.user.uid;
          if(userDetails.additionalUserInfo.isNewUser) { //if user is new than data will be added to firestore
            try {

              await firestore().collection('users').doc(uid).set({
                  fullName: fullName,
                  email: email.trim(),
                  phoneNumber: phoneNumber, 
                  role: role.trim(),
                  createdAt: firestore.FieldValue.serverTimestamp(),
                });
                Alert.alert('Success', 'Account created successfully!');
                navigation.navigate('AdminHome') 

            } catch (error) {
              console.log("Error adding user to Firestore:", error.message);
              await userDetails.user.delete(); // Delete the user if Firestore addition fails
            }     
          }
        } catch (error) {
          console.log('Error creating user:', error.message);
          Alert.alert('Error', error.code);
          if(error.code === 'auth/email-already-in-use') {
            Alert.alert("Email already in use", "Please use a different email.");
          }
          if(error.code === 'auth/weak-password'){
            Alert.alert("Weak Password", "Password should be at least 6 characters long.");
          }                   
        }
    
    console.log('Sign up pressed', { email, password });
  };

  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Google sign up pressed');
  };

  const handleSignIn = () => {
    // Navigate to sign in screen
    console.log('Navigate to sign in');
  };

  return (
    <SafeAreaView style={styles.container}>  
      <ScrollView style={{flexGrow: 1}}
      showsVerticalScrollIndicator={false}>
        {/* Logo and Title */}
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo2.png')} style={styles.logoImage}/>
          <Text style={styles.title}>Khursheed Family Restaurant</Text>
          <Text style={styles.subtitle}>Create your account to get started.</Text>
        </View>

        {/* Form */}
        <View style={styles.formContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>👤 Full Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              value={fullName}
              onChangeText={setFullName}
              autoCapitalize="words"
              autoFocus={true}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>📧 Email Address</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your email"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>📱 Phone Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              keyboardType="phone-pad"
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
            <Text style={styles.inputLabel}>🔒 Confirm Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirm your password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Role</Text>
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

          {/* <TouchableOpacity style={styles.signUpButton} onPress={()=>{handleSignUp(email,password, fullName, phoneNumber,role)}}>
            <Text style={styles.signUpButtonText}>Create Account</Text>
          </TouchableOpacity> */}

        <MainButton buttonName={'Create Account'}
          onPress={()=>{handleSignUp(email,password, fullName, phoneNumber,role)}}
        />
          
          
          {/* Or Google Sign Up */}


          <Text style={styles.orText}>or</Text>

          <TouchableOpacity style={styles.googleButton} onPress={handleGoogleSignUp}>
            <View style={styles.googleButtonContent}>
              <Text style={styles.googleIcon}>🔍</Text>
              <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.signInContainer}>
            <Text style={styles.signInText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleSignIn}>
              <Text style={styles.signInLink}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
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
  dropdown: {
    backgroundColor: '#fff',
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
  signUpButton: {
    backgroundColor: '#6366f1',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
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
  googleButton: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    marginBottom: 20,
  },
  googleButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#374151',
    fontSize: 16,
    fontWeight: '500',
  },
  signInContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  signInText: {
    color: '#6b7280',
    fontSize: 14,
  },
  signInLink: {
    color: '#6366f1',
    fontSize: 14,
    fontWeight: '600',
  },
});