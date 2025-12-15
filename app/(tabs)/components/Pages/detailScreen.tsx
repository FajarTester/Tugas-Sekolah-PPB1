import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const DetailScreen = ({ item, onBack }: { item: any; onBack: any }) => {
    const [quantity, setQuantity] = useState(2);
    const [selectedSize, setSelectedSize] = useState('14"');

    const sizes = ['10"', '14"', '16"'];
    const ingredients = ['🥩', '🍗', '🌶️', '🧀', '🥓'];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.detailHeader}>
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Text style={styles.headerIcon}>{"<"}</Text>
                </TouchableOpacity>
                <Text style={styles.detailHeaderTitle}>Details</Text>
                <TouchableOpacity style={styles.favoriteButton}>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.detailContent}>
                <View style={styles.detailImageContainer}>
                    <View style={styles.detailImagePlaceholder}>
                        <Text style={styles.detailEmoji}>🍔</Text>
                    </View>
                </View>

                <View style={styles.detailInfo}>
                    <Text style={styles.detailRestaurant}>🏪 {item?.restaurant || 'Uttora Coffee House'}</Text>
                    <Text style={styles.detailName}>{item?.name || 'Burger Bistro'}</Text>
                    <Text style={styles.detailDescription}>
                        Mononcent and qiens elicint amet non maqna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
                    </Text>

                    <View style={styles.detailMeta}>
                        <Text style={styles.metaText}>⭐ 4.7</Text>
                        <Text style={styles.metaText}>🚚 Free</Text>
                        <Text style={styles.metaText}>🕐 20 min</Text>
                    </View>

                    <Text style={styles.sizeLabel}>SIZE:</Text>
                    <View style={styles.sizeSelector}>
                        {sizes.map(size => (
                            <TouchableOpacity
                                key={size}
                                style={[
                                    styles.sizeButton,
                                    selectedSize === size && styles.sizeButtonActive,
                                ]}
                                onPress={() => setSelectedSize(size)}
                            >
                                <Text
                                    style={[
                                        styles.sizeButtonText,
                                        selectedSize === size && styles.sizeButtonTextActive,
                                    ]}
                                >
                                    {size}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    <Text style={styles.ingredientsLabel}>INGREDIENTS</Text>
                    <View style={styles.ingredients}>
                        {ingredients.map((ingredient, index) => (
                            <View key={index} style={styles.ingredientItem}>
                                <Text style={styles.ingredientEmoji}>{ingredient}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={{ backgroundColor: "#f3f3f3", padding: 20, borderRadius: 30 }}>
                        <View style={styles.priceRow}>
                            <Text style={styles.priceText}>${item?.price || 32}</Text>
                            <View style={styles.quantitySelector}>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => setQuantity(Math.max(1, quantity - 1))}
                                >
                                    <Text style={styles.quantityButtonText}>-</Text>
                                </TouchableOpacity>
                                <Text style={styles.quantityText}>{quantity}</Text>
                                <TouchableOpacity
                                    style={styles.quantityButton}
                                    onPress={() => setQuantity(quantity + 1)}
                                >
                                    <Text style={styles.quantityButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        <TouchableOpacity style={styles.primaryButton}>
                            <Text style={styles.primaryButtonText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>

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
    headerIcon: {
        fontSize: 20,
        alignSelf: "center"
    },
    backButton: {
        padding: 8,
        backgroundColor: "#3333",
        borderRadius: 100,
        width: 45

    },
    metaText: {
        fontSize: 12,
        color: '#8A8A8A',
        marginRight: 8,
    },
    detailHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
    },
    detailHeaderTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D2D2D',
    },
    favoriteButton: {
        padding: 8,
    },
    detailContent: {
        flex: 1,
    },
    detailImageContainer: {
        backgroundColor: '#FFD4A3',
        padding: 40,
        alignItems: 'center',
        borderRadius: 50,
        margin: 10
    },
    detailImagePlaceholder: {
        width: 200,
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',

    },
    detailEmoji: {
        fontSize: 120,
    },
    detailInfo: {
        padding: 24,
    },
    detailRestaurant: {
        fontSize: 14,
        color: '#8A8A8A',
        marginBottom: 8,
    },
    detailName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#2D2D2D',
        marginBottom: 8,
    },
    detailDescription: {
        fontSize: 14,
        color: '#8A8A8A',
        lineHeight: 22,
        marginBottom: 16,
    },
    detailMeta: {
        flexDirection: 'row',
        gap: 16,
        marginBottom: 24,
    },
    sizeLabel: {
        fontSize: 12,
        color: '#8A8A8A',
        marginBottom: 12,
        letterSpacing: 1,
    },
    sizeSelector: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    sizeButton: {
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
    },
    sizeButtonActive: {
        backgroundColor: '#FF6B35',
    },
    sizeButtonText: {
        fontSize: 16,
        color: '#2D2D2D',
        fontWeight: '600',
    },
    sizeButtonTextActive: {
        color: '#fff',
    },
    ingredientsLabel: {
        fontSize: 12,
        color: '#8A8A8A',
        marginBottom: 12,
        letterSpacing: 1,
    },
    ingredients: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    ingredientItem: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FFF5F0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ingredientEmoji: {
        fontSize: 24,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 24,

    },
    priceText: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#2D2D2D',
    },
    quantitySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#2D2D3D',
        borderRadius: 25,
        paddingHorizontal: 8,
    },
    quantityButton: {
        width: 36,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    quantityButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    quantityText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 16,
    },

    // Shared Styles
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

export default DetailScreen;
