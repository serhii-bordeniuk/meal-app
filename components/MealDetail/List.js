import { Text, View, StyleSheet, Platform } from "react-native";

function List({ data }) {
    return data.map((dataPoint) => (
        <View style={styles.listItem} key={dataPoint}>
            <Text style={styles.itemText}>{dataPoint}</Text>
        </View>
    ));
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 12,
        backgroundColor: "white",
        elevation: 2,
        shadowColor: "black",
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        overflow: Platform.OS === "android" ? "hidden" : "visible",
    },
    itemText: {
        textAlign: "center",
    },
});
