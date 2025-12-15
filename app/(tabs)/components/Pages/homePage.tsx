import React, { useState } from 'react';
import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

const { width } = Dimensions.get('window');

// Onboarding Screen
const OnboardingScreen = ({ onComplete }: { onComplete: any }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Free delivery offers',
            description: 'Get all your loved foods in one once place, you just place the order we do the rest',
            image: '🚚',
        },
        {
            title: 'Order from choosen chef',
            description: 'Get all your loved foods in one once place, you just place the order we do the rest',
            image: '👨‍🍳',
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.slideContainer}>
                <Text style={styles.slideEmoji}>{slides[currentSlide].image}</Text>
                <Text style={styles.slideTitle}>{slides[currentSlide].title}</Text>
                <Text style={styles.slideDescription}>{slides[currentSlide].description}</Text>

                <View style={styles.pagination}>
                    {slides.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.paginationDot,
                                index === currentSlide && styles.paginationDotActive,
                            ]}
                        />
                    ))}
                </View>

                <TouchableOpacity
                    style={styles.primaryButton}
                    onPress={() => {
                        if (currentSlide < slides.length - 1) {
                            setCurrentSlide(currentSlide + 1);
                        } else {
                            onComplete();
                        }
                    }}
                >
                    <Text style={styles.primaryButtonText}>
                        {currentSlide === 0 ? 'GET STARTED' : 'NEXT'}
                    </Text>
                </TouchableOpacity>

                {currentSlide === 1 && (
                    <TouchableOpacity onPress={onComplete}>
                        <Text style={styles.skipText}>Skip</Text>
                    </TouchableOpacity>
                )}
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    // Onboarding Styles
    slideContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    slideEmoji: {
        fontSize: 120,
        marginBottom: 40,
    },
    slideTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D2D2D',
        marginBottom: 16,
        textAlign: 'center',
    },
    slideDescription: {
        fontSize: 14,
        color: '#8A8A8A',
        textAlign: 'center',
        lineHeight: 22,
        marginBottom: 30,
    },
    pagination: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 4,
    },
    paginationDotActive: {
        backgroundColor: '#FF6B35',
        width: 8,
    },
    skipText: {
        marginTop: 16,
        fontSize: 14,
        color: '#8A8A8A',
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

export default OnboardingScreen;