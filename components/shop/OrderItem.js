import React, { useState } from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import CartItem from "./CartItem";
import Colors from "../../constants/Colors";

const OrderItem = (props) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <View style={styles.orderItem}>
            <View style={styles.summury}>
                <Text style={styles.totalAmount}>
                    ${props.amount.toFixed(2)}
                </Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button
                color={Colors.primary}
                title={showDetails ? "Hide details" : "Show Details"}
                onPress={() => {
                    setShowDetails((prevState) => !prevState);
                }}
            />
            {showDetails && (
                <View style={styles.detailItems}>
                    {props.items.map((cartItem) => (
                        <CartItem
                            key={cartItem.productId}
                            quantity={cartItem.quantity}
                            amount={cartItem.sum}
                            title={cartItem.productTitle}
                        />
                    ))}
                </View>
            )}
        </View>
    );
};

export default OrderItem;

const styles = StyleSheet.create({
    orderItem: {
        shadowColor: "black",
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: "white",
        margin: 20,
        padding: 10,
        alignItems: "center",
    },
    detailItems: {
        width: "100%",
    },
    summury: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginBottom: 15,
    },
    totalAmount: {
        fontFamily: "open-sans-bold",
        fontSize: 16,
    },
    date: {
        fontSize: 16,
        fontFamily: "open-sans",
        color: "#888",
    },
});
