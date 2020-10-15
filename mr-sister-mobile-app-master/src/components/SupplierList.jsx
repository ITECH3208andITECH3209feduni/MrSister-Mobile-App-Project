import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SupplierList = ({ supplier }) => {
  const { name, phoneNo, email, address } = supplier;

  return (
    <View style={styles.supplierListContainer}>
      <Text style={styles.supplierName}>{name}</Text>
      <Text style={styles.supplierNumber}>{phoneNo}</Text>
      <Text style={styles.supplierEmailId}>{email}</Text>
      <Text style={styles.supplierAddress}>{address}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  supplierListContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: "#e0eaff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderWidth: 1,
    borderColor: "#c9c9c9",
  },

  supplierName: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#406dcf",
    textTransform: "capitalize",
  },
  supplierNumber: {
    fontSize: 15,
    color: "#464646",
    flex: 1,
    borderRadius: 5,
    textTransform: "capitalize",
  },
  supplierEmailId: {
    textTransform: "lowercase",
    color: "#464646",
  },
  supplierAddress: {
    textTransform: "capitalize",
    color: "#464646",
  },
});

export default SupplierList;
