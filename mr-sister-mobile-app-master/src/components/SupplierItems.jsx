import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Layout from "./Layout";
import Item from "./Item";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { ToastAndroid } from "react-native";

const SupplierItems = ({ route, navigation }) => {
  // state maintained

  const { name, items, userEmail, supplierEmail } = route.params;
  console.log("Ready Info for Creating Invoice");
  console.log("name-", name);
  console.log("userEmail", userEmail);
  console.log("supplierEmail", supplierEmail);

  const [orderedItems, setOrderedItems] = useState([]);

  const handlAddItems = (orderedItem) => {
    setOrderedItems((previousStateOrderedItems) => {
      if (previousStateOrderedItems.length === 0) {
        return [...previousStateOrderedItems, orderedItem];
      } else {
        const refinedOrderedItems = previousStateOrderedItems.map(
          (previousStateOrderedItem) => {
            console.log(
              "previousStateOrderedItem------->",
              previousStateOrderedItem
            );
            if (previousStateOrderedItem.itemName === orderedItem.itemName) {
              console.log("inside if condition---------");
              console.log(
                "Quantity Value from Items---->",
                orderedItem.quanity
              );
              return {
                ...previousStateOrderedItem,
                quantity: orderedItem.quantity,
              };
            } else {
              return previousStateOrderedItem;
            }
          }
        );
        console.log("Refined Ordered Items --->", refinedOrderedItems);
        return [...refinedOrderedItems, orderedItem];
      }
    });
  };

  const handlePlaceOrder = async () => {
    console.log("Place Order Clicked");
    const data = {
      createdBy: userEmail,
      supplierEmail,
      supplierName: name,
      orderedItems,
    };
    console.log("data------------->", data);
    try {
      const res = await axios.post(`${API_BASE_URL}/invoices`, data);
      console.log("Response Message-", res.message);
      ToastAndroid.show("Invoice Created Successfully!!", ToastAndroid.SHORT);
      navigation.navigate("DashboardScreen");
    } catch (e) {
      console.log("Error Response->", e.message);
      console.log(e.status);
      ToastAndroid.show("Error Placing Invoice", ToastAndroid.SHORT);
    }
  };
  console.log("FinalOrderdItems------->", orderedItems);

  return (
    <Layout>
      <Text style={styles.supplierTitle}>{name}</Text>
      {items.map((item, i) => {
        return <Item key={i} {...item} handlAddItems={handlAddItems} />;
      })}
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity
          style={styles.placeHorderButton}
          onPress={handlePlaceOrder}
        >
          <Text style={{ fontSize: 20, color: "#fff", textAlign: "center" }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

const styles = {
  supplierTitle: {
    color: "gray",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  placeHorderButton: {
    color: "black",
    padding: 10,
    borderRadius: 10,
    textAlign: "right",
    backgroundColor: "#72a6f5",
  },
};

export default SupplierItems;
