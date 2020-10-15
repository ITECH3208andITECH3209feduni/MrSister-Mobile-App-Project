import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";

const IndividualInvoice = ({ referenceNo, supplierName, invoiceStatus }) => {
  return (
    <View style={styles.invoiceContainer}>
      <View>
        <Text>Ref No: {referenceNo}</Text>
        <Text>{supplierName}</Text>
      </View>
      <Text style={styles[`invoiceStatus${invoiceStatus}`]}>
        {invoiceStatus}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  invoiceContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    backgroundColor: "#ece79a",
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
  },
  invoiceStatusapproved: {
    padding: 10,
    backgroundColor: "#c5ce48",
    color: "white",
    borderRadius: 20,
    width: 90,
    textAlign: "center",
  },
  invoiceStatuspending: {
    padding: 10,
    backgroundColor: "#f1bb25",
    color: "white",
    borderRadius: 20,
    width: 90,
    textAlign: "center",
  },
  invoiceStatusissue: {
    padding: 10,
    backgroundColor: "#f35454",
    color: "white",
    borderRadius: 20,
    width: 90,
    textAlign: "center",
  },
});

export default IndividualInvoice;
