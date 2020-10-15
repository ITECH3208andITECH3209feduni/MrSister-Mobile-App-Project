import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";

const Item = ({ itemName, price, unit, handlAddItems }) => {
  const [quantity, setItemQuantity] = useState("");

  const handleChangeText = (text) => {
    console.log("Input Text Value", text);
  };

  return (
    <View style={styles.itemWrapper}>
      <View>
        <Text style={styles.itemName}>{itemName}</Text>
        <Text style={styles.normalText}>Unit: {unit}</Text>
        <Text style={styles.normalText}>Price: ${price}</Text>
      </View>
      <View>
        <Text style={styles.quantityText}>Quantity</Text>
        <TextInput
          keyboardType="number-pad"
          value={quantity}
          style={styles.quantityInput}
          onChangeText={(text) => {
            setItemQuantity(text);

            const orderedItem = {
              itemName,
              price,
              unit,
              quantity: text,
            };
            handlAddItems(orderedItem);
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  quantityText: {
    marginBottom: 5,
    fontSize: 12,
  },
  quantityInput: {
    backgroundColor: "#d1d1d1",
    padding: 15,
    borderRadius: 10,
  },

  itemWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: "#f7eab1",
    padding: 10,
    borderRadius: 5,
    color: "white",
  },
  itemName: {
    fontSize: 20,
    color: "#542ae9",
    fontWeight: "bold",
  },

  normalText: {
    fontSize: 12,
    color: "#542ae9",
  },
};

export default Item;
