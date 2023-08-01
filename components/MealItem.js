import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Text, Image, Platform, StyleSheet } from "react-native";

import MealDetails from "./MealDetails";

function MealItem({ title, imageUrl, duration, complexity, affordability, id }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate("MealDetails", {
            mealId: id,
        });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable
                onPress={selectMealItemHandler}
                android_ripple={{ color: "#ccc" }}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
            >
                <View style={styles.innerContainer}>
                    <View>
                        <Image source={{ uri: imageUrl }} style={styles.image} />
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails
                        duration={duration}
                        complexity={complexity}
                        affordability={affordability}
                    />
                </View>
            </Pressable>
        </View>
    );
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        backgroundColor: "white",
        elevation: 4,
        shadowColor: "black",
        shadowOpacity: 0.35,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    innerContainer: {
        borderRadius: 8,
        overflow: "hidden",
    },
    buttonPressed: {
        opacity: 0.5,
    },
    image: {
        width: "100%",
        height: 200,
    },
    title: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 18,
        margin: 8,
    },
});
