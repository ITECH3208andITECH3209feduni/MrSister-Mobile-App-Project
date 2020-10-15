import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../components/Layout";
import { View, Text, Button, TextInput, ToastAndroid } from "react-native";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { TouchableOpacity } from "react-native-gesture-handler";

const IndividualInvoiceDetail = ({ route, navigation }) => {
  const {
    supplierName,
    referenceNo,
    createdBy,
    orderDate,
    invoiceStatus,
    orderedItems,
    userEmail,
  } = route.params;

  const refinedOrderDate = orderDate.toString().substr(0, 10);

  const [issueMessage, setIssueMessage] = useState();

  console.log("Logged in user----", userEmail);

  const handleIssueSubmit = async () => {
    try {
      await axios.put(`${API_BASE_URL}/invoices/report/${referenceNo}`, {
        issueDescription: issueMessage,
        issueReportedBy: userEmail,
      });
      ToastAndroid.show("Issue is successfully submitted", ToastAndroid.SHORT);
      navigation.navigate("DashboardScreen");
    } catch (e) {
      ToastAndroid.show("Error Submitting Issue", ToastAndroid.SHORT);
      console.log("Some error", e);
    }
  };

  const handleInvoiceApprove = async () => {
    try {
      await axios.put(`${API_BASE_URL}/invoices/${referenceNo}`, {
        invoiceStatus: "approved",
      });
      ToastAndroid.show("Invoice is Approved", ToastAndroid.SHORT);
      navigation.navigate("DashboardScreen");
    } catch (e) {
      ToastAndroid.show("Error Approving Invoice", ToastAndroid.SHORT);
      console.log("Some error", e);
    }
  };

  const totalSum = orderedItems.reduce((accumulator, orderedItem) => {
    return accumulator + orderedItem.price * orderedItem.quantity;
  }, 0);

  return (
    <Layout>
      <View>
        <Text style={styles.supplierName}>{supplierName}</Text>
      </View>
      <View style={styles.rowData}>
        <Text>Ref No: {referenceNo}</Text>
        <Text>Created At: {refinedOrderDate}</Text>
      </View>
      <View style={styles.rowData}>
        <Text>Created By: {createdBy}</Text>
        <Text style={styles[`statusText${invoiceStatus}`]}>
          {invoiceStatus}
        </Text>
      </View>

      <View style={styles.tableHead}>
        <Text style={styles.tableTextItem}>Item</Text>
        <Text style={styles.tableTextUnit}>Quantity</Text>
        <Text style={styles.tableTextPrice}>Price</Text>
      </View>

      {orderedItems.map((orderedItem) => {
        return (
          <View style={styles.tableDataRow}>
            <Text style={styles.tableTextItem}>{orderedItem.itemName}</Text>
            <Text style={styles.tableTextUnit}>{orderedItem.quantity}</Text>
            <Text style={styles.tableTextPrice}>$ {orderedItem.price}</Text>
          </View>
        );
      })}

      <View style={styles.totalRow}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalRowPrice}> ${totalSum}</Text>
      </View>

      {invoiceStatus !== "approved" && (
        <TouchableOpacity onPress={handleInvoiceApprove}>
          <Text style={styles.approveInvoiceButton}>Approve Invoice</Text>
        </TouchableOpacity>
      )}
      <Text style={styles.reportText}>Report an Issue</Text>
      <TextInput
        multiline
        style={styles.reportMessage}
        value={issueMessage}
        onChangeText={(text) => setIssueMessage(text)}
      />
      <TouchableOpacity onPress={handleIssueSubmit}>
        <Text style={styles.submitButton}>Submit</Text>
      </TouchableOpacity>
    </Layout>
  );
};

const styles = {
  supplierName: {
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "uppercase",
    marginBottom: 5,
  },
  rowData: {
    backgroundColor: "#dddddd",
    padding: 10,
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-between",
  },
  statusTextapproved: {
    backgroundColor: "#c5ce48",
    padding: 10,
    borderRadius: 15,
  },
  statusTextpending: {
    backgroundColor: "#f1bb25",
    padding: 10,
    borderRadius: 15,
  },
  statusTextissue: {
    backgroundColor: "#f35454",
    padding: 10,
    borderRadius: 15,
  },
  tableHead: {
    marginTop: 10,
    padding: 10,
    backgroundColor: "#82c3e9",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  tableDataRow: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#dbdbdb",
  },
  tableTextItem: {
    width: "50%",
  },
  tableTextUnit: {
    width: "20%",
  },
  tableTextPrice: {
    width: "20%",
  },
  totalRow: {
    padding: 10,
    backgroundColor: "#82c3e9",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  totalRowPrice: {
    width: "20%",
  },
  totalText: {
    width: "70%",
    fontWeight: "bold",
  },

  approveInvoiceButton: {
    backgroundColor: "#c5ce48",
    padding: 15,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 15,
    fontSize: 15,
    textTransform: "uppercase",
  },
  reportText: {
    fontSize: 20,
    marginTop: 10,
    padding: 10,
    fontWeight: "bold",
    textAlign: "left",
  },
  reportMessage: {
    backgroundColor: "#dbdbdb",
    paddingTop: 10,
    borderRadius: 5,
    height: 100,
    // width: "80%",
  },
  submitButton: {
    backgroundColor: "#1b60f3",
    color: "white",
    padding: 10,
    marginTop: 10,
    width: 100,
    textAlign: "center",
    fontWeight: "bold",
    borderRadius: 10,
    fontSize: 18,
  },
};
IndividualInvoiceDetail.propTypes = {};

export default IndividualInvoiceDetail;
