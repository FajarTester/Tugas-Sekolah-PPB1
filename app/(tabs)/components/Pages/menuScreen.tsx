import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const MenuScreen = ({ onSelectItem }: { onSelectItem: any }) => {
    const [selectedCategory, setSelectedCategory] = useState('BURGER');

    const burgers = [
        { id: 1, name: 'Burger Bistro', restaurant: 'Rose Garden', price: 40 },
        { id: 2, name: "Smokin' Burger", restaurant: 'Cafenio Restaurant', price: 60 },
        { id: 3, name: 'Buffalo Burgers', restaurant: 'Kaji Firm Kitchen', price: 75 },
        { id: 4, name: 'Bullseye Burgers', restaurant: 'Kabab Restaurant', price: 94 },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => {

                }}>
                    <Text style={styles.headerIcon}>{"<"}</Text>
                </TouchableOpacity>
                <View style={styles.categorySelector}>
                    <Text style={styles.categoryText}>{selectedCategory}</Text>
                    <Text style={styles.dropdownIcon}>▼</Text>
                </View>
                <TouchableOpacity style={styles.searchButton}>
                    <Text style={styles.headerIcon}>🔍</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.filterButton}>
                    <Text style={styles.headerIcon}>☰</Text>
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.menuContent}>
                <Text style={styles.sectionTitle}>Popular Burgers</Text>

                <View style={styles.menuGrid}>
                    {burgers.map(item => (
                        <TouchableOpacity
                            key={item.id}
                            style={styles.menuCard}
                            onPress={() => onSelectItem(item)}
                        >
                            <View style={styles.menuImagePlaceholder}>
                                <Text style={styles.burgerEmoji}>🍔</Text>
                            </View>
                            <Text style={styles.menuItemName}>{item.name}</Text>
                            <Text style={styles.menuItemRestaurant}>{item.restaurant}</Text>
                            <View style={styles.menuItemFooter}>
                                <Text style={styles.menuItemPrice}>${item.price}</Text>
                                <TouchableOpacity style={styles.addButton}>
                                    <Text style={styles.addButtonText}>+</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <Text style={styles.sectionTitle}>Open Restaurants</Text>

                <View style={styles.restaurantCard}>
                    <View style={styles.restaurantImagePlaceholder}>
                        <Text style={styles.restaurantEmoji}>🍽️</Text>
                    </View>
                    <View style={styles.restaurantInfo}>
                        <Text style={styles.restaurantName}>Tasty Treat Gallery</Text>
                        <View style={styles.restaurantMeta}>
                            <Text style={styles.metaText}>⭐ 4.9</Text>
                            <Text style={styles.metaText}>🚚 Free</Text>
                            <Text style={styles.metaText}>🕐 20 min</Text>
                        </View>
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
    // Menu Styles
    menuContent: {
        flex: 1,
        padding: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#2D2D2D',
        marginBottom: 16,
    },
    menuGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 30,
    },
    menuCard: {
        width: '48%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    menuImagePlaceholder: {
        width: '100%',
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
    },
    burgerEmoji: {
        fontSize: 40,
    },
    menuItemName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D2D2D',
        marginBottom: 4,
    },
    menuItemRestaurant: {
        fontSize: 12,
        color: '#8A8A8A',
        marginBottom: 8,
    },
    menuItemFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    menuItemPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2D2D2D',
    },
    addButton: {
        backgroundColor: '#FF6B35',
        width: 32,
        height: 32,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    addButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    restaurantCard: {
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 12,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    restaurantImagePlaceholder: {
        width: 305,
        height: 120,
        backgroundColor: '#FFF5F0',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    restaurantEmoji: {
        fontSize: 32,
    },
    restaurantInfo: {
        flex: 1,
        justifyContent: 'center',
    },
    restaurantName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D2D2D',
        marginBottom: 8,
    },
    restaurantMeta: {
        flexDirection: 'row',
        gap: 12,
    },
    metaText: {
        fontSize: 12,
        color: '#8A8A8A',
        marginRight: 8,
    },

    // Header Styles
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#F0F0F0',
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
    categorySelector: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        marginLeft: 16,
    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2D2D2D',
    },
    dropdownIcon: {
        marginLeft: 8,
        fontSize: 12,
        color: '#8A8A8A',
    },
    searchButton: {
        padding: 8,
        marginLeft: 16,
        borderRadius: 100,
        backgroundColor: "#333"
    },
    filterButton: {
        padding: 8,
        marginLeft: 8,
    },

    // Detail Styles
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


export default MenuScreen;