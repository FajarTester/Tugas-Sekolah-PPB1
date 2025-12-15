import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

// Login Screen
const LoginScreen = ({ onLogin }: { onLogin: any }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.loginContainer}>
                <View style={styles.loginHeader}>
                    <Text style={styles.loginTitle}>Log In</Text>
                    <Text style={styles.loginSubtitle}>Please sign in to your existing account</Text>
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>EMAIL</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="example@gmail.com"
                        placeholderTextColor="#999"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>PASSWORD</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="••••••••••"
                        placeholderTextColor="#999"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                </View>

                <View style={styles.loginOptions}>
                    <Text style={styles.rememberText}>Remember me</Text>
                    <Text style={styles.forgotText}>Forgot Password</Text>
                </View>

                <TouchableOpacity style={styles.primaryButton} onPress={onLogin}>
                    <Text style={styles.primaryButtonText}>LOG IN</Text>
                </TouchableOpacity>

                <Text style={styles.signupText}>
                    Don t have an account? <Text style={styles.signupLink}>SIGN UP</Text>
                </Text>

                <Text style={styles.orText}>Or</Text>

                <View style={styles.socialButtons}>
                    <TouchableOpacity style={[styles.socialButton, styles.facebookButton]}>
                        <Text style={styles.socialButtonText}>f</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, styles.twitterButton]}>
                        <Text style={styles.socialButtonText}>t</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.socialButton, styles.appleButton]}>
                        <Text style={styles.socialButtonText}>🍎</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Login Styles
    loginContainer: {
        flexGrow: 1,
        padding: 24,
        justifyContent: 'center',
    },
    loginHeader: {
        backgroundColor: '#2D2D3D',
        padding: 24,
        borderRadius: 12,

        height: 200,
        bottom: 50
    },
    loginTitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 8,
        textAlign: "center",
        top: 50
    },
    loginSubtitle: {
        fontSize: 14,
        color: '#B0B0B0',
        top: 50
    },
    inputContainer: {
        marginBottom: 20,
    },
    inputLabel: {
        fontSize: 12,
        color: '#8A8A8A',
        marginBottom: 8,
        letterSpacing: 1,
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        padding: 16,
        fontSize: 16,
        color: '#2D2D2D',
    },
    loginOptions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 24,
    },
    rememberText: {
        fontSize: 14,
        color: '#8A8A8A',
    },
    forgotText: {
        fontSize: 14,
        color: '#FF6B35',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        color: '#8A8A8A',
    },
    signupLink: {
        color: '#FF6B35',
        fontWeight: 'bold',
    },
    orText: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 14,
        color: '#8A8A8A',
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 16,
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    facebookButton: {
        backgroundColor: '#3B5998',
    },
    twitterButton: {
        backgroundColor: '#1DA1F2',
    },
    appleButton: {
        backgroundColor: '#000',
    },
    socialButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    primaryButton: {
        backgroundColor: '#FF6B35',
        padding: 18,
        borderRadius: 12,
        alignItems: 'center',
        width: 300,
        alignSelf: 'center'
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 1,
    },
})

export default LoginScreen;